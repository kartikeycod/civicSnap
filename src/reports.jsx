import React from "react";
import "./report.css";
import { Search, Bell, Coins, Home, PlusCircle, FileText, Users, GitHub } from "lucide-react";

export default function Dashboard() {
  const reports = [
    {
      id: 1,
      title: "Garbage on main street",
      desc: "Huge amount of garbage causing health issues",
      location: "Gold Coast, NSW",
      date: "06/09/2025",
      status: "New",
      image: "https://picsum.photos/400/200?random=1",
    },
    {
      id: 2,
      title: "Potholes on main street",
      desc: "These potholes cause vehicle damage and traffic issues",
      location: "Gold Coast, NSW",
      date: "06/09/2025",
      status: "In Progress",
      image: "https://picsum.photos/400/200?random=2",
    },
    {
      id: 3,
      title: "Rainwater accumulated on roads",
      desc: "Rainwater accumulated on roads causes vehicle issues",
      location: "Gold Coast, NSW",
      date: "06/09/2025",
      status: "Resolved",
      image: "https://picsum.photos/400/200?random=3",
    },
  ];

  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="header">
        <div className="user-info">
          <img src="https://i.pravatar.cc/50" alt="User" className="avatar"/>
          <div>
            <h2>Welcome, User!</h2>
            <p>Your Dashboard</p>
          </div>
        </div>
        <div className="header-icons">
          <Bell className="icon"/>
          <div className="coins">
            <Coins className="icon-small"/>
            <span>120</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <a href="https://civic-dashboard-api.vercel.app" target="_blank" className="btn-green">
          Create New Report
        </a>
        <a href="https://civic-dashboard-api.vercel.app" target="_blank" className="btn-purple">
          New Repository
        </a>
      </div>

      {/* Search */}
      <div className="search-bar">
        <Search className="icon"/>
        <input type="text" placeholder="Search issues..."/>
      </div>

      {/* Filters */}
      <div className="filters">
        {["All Issues", "New", "In Progress", "Resolved"].map(f => (
          <button key={f} className="filter-btn">{f}</button>
        ))}
      </div>

      {/* Reports */}
      <div className="reports">
  {reports.map(r => (
    <div key={r.id} className="report-card">
      <img src={r.image} alt={r.title} />
      <div className="report-info">
        <span className={`status ${r.status.toLowerCase().replace(" ","-")}`}>
          {r.status}
        </span>
        <h3>{r.title}</h3>
        <p>{r.desc}</p>
        <p className="location">📍 {r.location}</p>
        <p className="date">📅 {r.date}</p>
        <a 
          href="https://civic-dashboard-api.vercel.app" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-view"
        >
          View Full Report
        </a>
      </div>
    </div>
  ))}
</div>


      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <button><Home className="icon"/><span>Home</span></button>
        <button><PlusCircle className="icon"/><span>Report</span></button>
        <button><FileText className="icon"/><span>My Reports</span></button>
        <button><Users className="icon"/><span>Community</span></button>
        <a href="https://civic-dashboard-api.vercel.app"><GitHub className="icon"/><span>API</span></a>
      </div>
    </div>
  );
}
