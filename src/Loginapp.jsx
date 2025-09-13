import { useState } from "react";
import axios from "axios";
import "./Loginapp.css";

export default function LoginApp({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", password: "", otp: "" });
  const [otpSent, setOtpSent] = useState(false);
  const [message, setMessage] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Send OTP
  const handleSendOtp = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", {
        email: form.email,
        password: form.password,
      });

      setMessage(res.data.message);
      setOtpSent(true);
    } catch (err) {
      setMessage(err.response?.data?.message || "Error sending OTP");
    }
  };

  // Verify OTP
  const handleVerifyOtp = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/verify-otp", {
        email: form.email,
        otp: form.otp,
      });

      setMessage(res.data.message);
      setOtpVerified(true);
    } catch (err) {
      setMessage(err.response?.data?.message || "OTP verification failed");
    }
  };

  // Submit Login/Signup
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        // Login request
        const res = await axios.post("http://localhost:5000/api/auth/login", {
          email: form.email,
          password: form.password,
        });

        localStorage.setItem("token", res.data.token);
        setMessage(res.data.message);
        if (onLogin) onLogin(); // ✅ tell App.jsx to update auth and redirect
      } else {
        // Signup flow
        if (!otpSent) {
          setMessage("Please send OTP first!");
          return;
        }
        if (!otpVerified) {
          setMessage("Please verify OTP before signing up!");
          return;
        }

        setMessage("Signup completed ✅ You can now login.");
        setIsLogin(true); // switch back to login tab
      }
    } catch (err) {
      setMessage(err.response?.data?.message || "Server error. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="auth-card">
        <div className="toggle">
          <button className={isLogin ? "active" : ""} onClick={() => setIsLogin(true)}>
            Login
          </button>
          <button className={!isLogin ? "active" : ""} onClick={() => setIsLogin(false)}>
            Signup
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          {!isLogin && (
            <>
              {!otpSent ? (
                <button type="button" className="otp-btn" onClick={handleSendOtp}>
                  Send OTP
                </button>
              ) : (
                <>
                  <input
                    type="text"
                    name="otp"
                    placeholder="Enter OTP"
                    value={form.otp}
                    onChange={handleChange}
                    required
                  />
                  <button type="button" className="otp-btn" onClick={handleVerifyOtp}>
                    Verify OTP
                  </button>
                  <button type="button" className="resend-btn" onClick={handleSendOtp}>
                    Resend OTP
                  </button>
                </>
              )}
            </>
          )}

          <button type="submit" className="submit-btn">
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>

        {message && (
          <p
            className={`message ${
              message.includes("successful") || message.includes("✅") ? "success" : "error"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
