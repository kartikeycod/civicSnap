// src/components/LogoutButton.jsx
import React from "react";

const LogoutButton = ({ onLogout }) => {
  return (
    <button
      onClick={onLogout}
      style={{
        padding: "10px 20px",
        backgroundColor: "#f44336",
        color: "#fff",
        fontWeight: "bold",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        margin: "10px",
      }}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
