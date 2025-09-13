import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.css";

// Components
import LoginApp from "./Loginapp";
import CivicReportDashboard from "./CivicReportDashboard";
import CivicDashboard from "./civicDashboard";
import ReportIssue from "./ReportIssue";
import RecentReports from "./RecentReports";
import Community from "./Community";
// import "./RecentReport.css";

function Home({ isAuthenticated, handleLogout }) {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">CivicSnap</h2>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>

          {isAuthenticated ? (
            <>
              <li>
                <a
                  href="https://user-dashboard-kappa-eight.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Track My Progress
                </a>
              </li>
              <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
            </>
          ) : (
            <li><Link to="/login">Login/Signup</Link></li>
          )}
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <h1>
          Report Civic Issues. Together, We Make Change. <br /> हम बदलेंगे - देश बदलेगा
        </h1>
        <p>
          Empowering citizens to report, track, and resolve issues in their community.
        </p>

        <a
          href="https://civic-dashboard-api.vercel.app/"
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Report Now
        </a>
        <br /><br /><br />
        {/* <h4>“Made with ❤️ by Team Pinnacle”</h4> */}
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Our Features</h2>
        <div className="feature-grid">

          <div className="feature-card">
            <h3>
              <a
                href="https://civic-dashboard-api.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                📸 REPORT ISSUES
              </a>
            </h3>
            <p>Capture and submit problems like potholes, garbage, or streetlights.</p>
          </div>

          <div className="feature-card">
            <h3>
              <a
                href="https://user-dashboard-kappa-eight.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                📊 TRACK PROGRESS
              </a>
            </h3>
            <p>Check real-time status updates on reported issues.</p>
          </div>

          <div className="feature-card">
            <h3>
              <a
                href="https://civic-dashboard-api.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                🗺️ THE MAP DASHBOARD
              </a>
            </h3>
            <p>See reports across the city on a live map.</p>
          </div>

          <div className="feature-card">
            <h3>
              🤝{" "}
              <a
                href="https://new-admin-db.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                LOGIN AS AN ADMIN
              </a>
            </h3>
            <p>Support and upvote issues that affect your area.</p>
          </div>

          <div className="feature-card">
            <h3>
              <Link
                to={isAuthenticated ? "/recent-reports" : "/login"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                📰 RECENT REPORTS
              </Link>
            </h3>
            <p>Browse the latest community-reported issues.</p>
          </div>

          <div className="feature-card">
            <h3>
              <Link
                to={isAuthenticated ? "/analysis" : "/login"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                📈 ANALYSIS SO FAR
              </Link>
            </h3>
            <p>Visual breakdown of reports with charts & stats.</p>
          </div>

          <div className="feature-card">
            <h3>
              <Link
                to={isAuthenticated ? "/community" : "/login"}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                🤝 COMMUNITY
              </Link>
            </h3>
            <p>Engage with neighbors, like posts, and share updates.</p>
          </div>

          <div className="feature-card">
            <h3>
              <a
                href="https://pgportal.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                🏛️ GOVERNMENT PORTAL
              </a>
            </h3>
            <p>Escalate issues directly to authorities.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Us</h2>
        <p id="text">
          CivicConnect is a revolutionary, crowdsourced civic issue reporting and resolution platform. We seamlessly connect citizens, local authorities, and urban planners to transform cities into cleaner, safer, and smarter environments. Using cutting-edge AI and real-time analytics, CivicConnect predicts infrastructure problems before they occur, ensures instant responses from authorities, and empowers communities to take proactive action. With our platform, every report contributes to a smarter, greener, and more efficient city—making CivicConnect the ultimate tool for modern urban living.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 CivicConnect. All rights reserved.</p>
        <h4>“Made with ❤️ by Team Pinnacle”</h4>
      </footer>
    </div>
  );
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // check token on page load
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsAuthenticated(true);
  }, []);

  // handle login
  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate("/");
  };

  // handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <Routes>
      <Route path="/" element={<Home isAuthenticated={isAuthenticated} handleLogout={handleLogout} />} />
      <Route path="/login" element={<LoginApp onLogin={handleLogin} />} />
      <Route path="/dashboard" element={isAuthenticated ? <CivicReportDashboard /> : <LoginApp onLogin={handleLogin} />} />
      <Route path="/report" element={isAuthenticated ? <ReportIssue /> : <LoginApp onLogin={handleLogin} />} />
      <Route path="/recent-reports" element={isAuthenticated ? <RecentReports /> : <LoginApp onLogin={handleLogin} />} />
      <Route path="/analysis" element={isAuthenticated ? <CivicDashboard /> : <LoginApp onLogin={handleLogin} />} />
      <Route path="/community" element={isAuthenticated ? <Community /> : <LoginApp onLogin={handleLogin} />} />
    </Routes>
  );
}
