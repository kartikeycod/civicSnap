import React, { useState } from "react";

export default function ReportIssue() {
  const [image, setImage] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ title: "", description: "" });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // preview
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // 🔥 Later: send to backend using FormData
    // const data = new FormData();
    // data.append("title", form.title);
    // data.append("description", form.description);
    // data.append("image", file);
    // axios.post("/api/report", data)
  };

  const styles = {
    container: {
      padding: "2rem",
      textAlign: "center",
      fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
      background: "linear-gradient(to bottom right, #f9f9f9, #f1e6f7)",
      minHeight: "100vh",
    },
    card: {
      background: "white",
      padding: "2rem",
      borderRadius: "15px",
      boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
      maxWidth: "500px",
      margin: "0 auto",
    },
    title: {
      fontSize: "2rem",
      marginBottom: "0.5rem",
      color: "#570c86",
      fontWeight: "bold",
    },
    subtitle: {
      fontSize: "1.1rem",
      marginBottom: "1.5rem",
      color: "#444",
    },
    input: {
      width: "100%",
      marginTop: "1rem",
      padding: "0.8rem",
      border: "2px solid #570c86",
      borderRadius: "8px",
      fontSize: "1rem",
    },
    textarea: {
      width: "100%",
      marginTop: "1rem",
      padding: "0.8rem",
      border: "2px solid #570c86",
      borderRadius: "8px",
      fontSize: "1rem",
      minHeight: "100px",
    },
    fileInput: {
      marginTop: "1rem",
      padding: "0.6rem",
      border: "2px dashed #570c86",
      borderRadius: "8px",
      background: "#fafafa",
      cursor: "pointer",
      width: "100%",
    },
    previewBox: {
      marginTop: "1.5rem",
    },
    previewImage: {
      width: "300px",
      maxWidth: "90%",
      borderRadius: "10px",
      border: "2px solid #ccc",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    },
    button: {
      marginTop: "1.5rem",
      padding: "0.8rem 1.5rem",
      background: "#570c86",
      color: "white",
      fontSize: "1rem",
      border: "none",
      borderRadius: "25px",
      cursor: "pointer",
      transition: "background 0.3s",
    },
    buttonHover: {
      background: "#7a1eb0",
    },
    successMessage: {
      marginTop: "1.5rem",
      padding: "1rem",
      background: "#d4f8d4",
      color: "#155724",
      border: "1px solid #c3e6cb",
      borderRadius: "8px",
      fontSize: "1rem",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>📸 Report an Issue</h2>
        <p style={styles.subtitle}>
          Upload a picture of the issue and provide details:
        </p>

        {submitted ? (
          <div style={styles.successMessage}>
            ✅ Thank you! Your issue has been submitted. Action will be taken soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Issue Title (e.g. Pothole on Main Road)"
              value={form.title}
              onChange={handleChange}
              style={styles.input}
              required
            />
            <textarea
              name="description"
              placeholder="Describe the issue..."
              value={form.description}
              onChange={handleChange}
              style={styles.textarea}
              required
            />
            <textarea
              name="description"
              placeholder="Kindly enter the location..."
              value={form.description}
              onChange={handleChange}
              style={styles.textarea}
              required
            />
            <input
              type="file"
              accept="image/*"
              capture="environment"
              onChange={handleImageChange}
              style={styles.fileInput}
            />

            {image && (
              <div style={styles.previewBox}>
                <h4>Preview:</h4>
                <img src={image} alt="Preview" style={styles.previewImage} />
              </div>
            )}

            <button type="submit" style={styles.button}>
              Submit Report
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
