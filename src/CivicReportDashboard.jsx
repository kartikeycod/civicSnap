import React from 'react';
import { Plus, MapPin, Clock, CheckCircle, AlertCircle, FileText } from 'lucide-react';
import './CivicReportDashboard.css';    

const App = ({ userName = 'citizen' }) => {
  return (
    <div className="dashboard">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <div className="logo">
            <div className="logo-icon">CR</div>
            <div className="logo-text">
              <h1>CivicReport</h1>
              <p>Citizen Portal ⭐</p>
            </div>
          </div>
        </div>
        <div className="header-right">
          <span className="user-icon">👤</span>
          <span className="username">{userName}</span>
          <span className="sign-out">🔗 Sign Out</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="dashboard-header">
          <h2>Your Dashboard 🏠</h2>
          <p>Report civic issues and track their progress</p>
          <button 
            className="report-button"
            onClick={() => window.open("https://civic-dashboard-api.vercel.app", "_blank")}
          >
            <Plus size={16} />
            Report New Issue ✨
          </button>
        </div>

        {/* Stats Cards */}
        <div className="stats-grid">
          <div className="stat-card blue">
            <div className="stat-content">
              <h3>Total Reports</h3>
              <div className="stat-number">1</div>
            </div>
            <MapPin className="stat-icon" size={24} />
          </div>
          
          <div className="stat-card yellow">
            <div className="stat-content">
              <h3>Pending</h3>
              <div className="stat-number">1</div>
            </div>
            <Clock className="stat-icon" size={24} />
          </div>
          
          <div className="stat-card blue-light">
            <div className="stat-content">
              <h3>In Progress</h3>
              <div className="stat-number">0</div>
            </div>
            <AlertCircle className="stat-icon" size={24} />
          </div>
          
          <div className="stat-card green">
            <div className="stat-content">
              <h3>Resolved</h3>
              <div className="stat-number">0</div>
            </div>
            <CheckCircle className="stat-icon" size={24} />
          </div>
        </div>

        {/* Reports Section */}
        <div className="reports-section">
          <div className="reports-header">
            <FileText size={20} />
            <h3>Your Reports</h3>
          </div>
          <p className="reports-subtitle">Track the status of all your submitted reports</p>
          
          <div className="report-card hover-card">
            <h4>pothole</h4>
            <p>we need to pay attention on this issue</p>
            <div className="report-meta">
              <span className="location">📍 shiv nagar sarwat gaon muzaffarnagar</span>
              <span className="date">📅 9/6/2025</span>
            </div>
            <div className="report-tags">
              <span className="tag pending">⚠️ Pending</span>
              <span className="tag priority">medium priority</span>
              <span className="tag category">pothole</span>
            </div>
            <button 
              className="view-report-btn"
              onClick={() => window.open("https://civic-dashboard-api.vercel.app", "_blank")}
            >
              View Full Report
            </button>
          </div>
          <div className="report-card hover-card">
            <h4>pothole</h4>
            <p>we need to pay attention on this issue</p>
            <div className="report-meta">
              <span className="location">📍 shiv nagar sarwat gaon muzaffarnagar</span>
              <span className="date">📅 9/6/2025</span>
            </div>
            <div className="report-tags">
              <span className="tag pending">⚠️ Pending</span>
              <span className="tag priority">medium priority</span>
              <span className="tag category">pothole</span>
            </div>
            <button 
              className="view-report-btn"
              onClick={() => window.open("https://civic-dashboard-api.vercel.app", "_blank")}
            >
              View Full Report
            </button>
          </div>
          <div className="report-card hover-card">
            <h4>pothole</h4>
            <p>we need to pay attention on this issue</p>
            <div className="report-meta">
              <span className="location">📍 shiv nagar sarwat gaon muzaffarnagar</span>
              <span className="date">📅 9/6/2025</span>
            </div>
            <div className="report-tags">
              <span className="tag pending">⚠️ Pending</span>
              <span className="tag priority">medium priority</span>
              <span className="tag category">pothole</span>
            </div>
            <button 
              className="view-report-btn"
              onClick={() => window.open("https://civic-dashboard-api.vercel.app", "_blank")}
            >
              View Full Report
            </button>
          </div>
          <div className="report-card hover-card">
            <h4>pothole</h4>
            <p>we need to pay attention on this issue</p>
            <div className="report-meta">
              <span className="location">📍 shiv nagar sarwat gaon muzaffarnagar</span>
              <span className="date">📅 9/6/2025</span>
            </div>
            <div className="report-tags">
              <span className="tag pending">⚠️ Pending</span>
              <span className="tag priority">medium priority</span>
              <span className="tag category">pothole</span>
            </div>
            <button 
              className="view-report-btn"
              onClick={() => window.open("https://civic-dashboard-api.vercel.app", "_blank")}
            >
              View Full Report
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
