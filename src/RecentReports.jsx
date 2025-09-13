import React from "react";

// Sample civic reports with actual images
const reports = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1612296720050-bc0d2f9b3919?auto=format&fit=crop&w=800&q=60",
    issue: "Pothole",
    priority: "High",
    location: "Ward 3, Main Street",
    status: "Pending",
    description: "Huge pothole causing traffic jams."
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1604081516009-5036a0a8c1c8?auto=format&fit=crop&w=800&q=60",
    issue: "Streetlight",
    priority: "Low",
    location: "Ward 5, Green Park",
    status: "Completed",
    description: "Streetlight fixed after 3 weeks."
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1568387342309-74a40f19b79f?auto=format&fit=crop&w=800&q=60",
    issue: "Sewage",
    priority: "High",
    location: "Ward 2, River Road",
    status: "In Progress",
    description: "Sewage leakage spreading near river."
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1616077167252-d7c0a7f6c9b2?auto=format&fit=crop&w=800&q=60",
    issue: "Pothole",
    priority: "Low",
    location: "Ward 7, Market Street",
    status: "Pending",
    description: "Small potholes appearing on crossroad."
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=800&q=60",
    issue: "Streetlight",
    priority: "High",
    location: "Ward 9, Station Road",
    status: "In Progress",
    description: "Half the lights are not working."
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1580207923184-08855efc3ec6?auto=format&fit=crop&w=800&q=60",
    issue: "Sewage",
    priority: "Low",
    location: "Ward 1, Old Town",
    status: "Pending",
    description: "Bad smell due to sewage blockage."
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=60",
    issue: "Pothole",
    priority: "High",
    location: "Ward 6, School Road",
    status: "Completed",
    description: "Pothole repaired successfully."
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=800&q=60",
    issue: "Streetlight",
    priority: "Low",
    location: "Ward 4, River Bridge",
    status: "Pending",
    description: "Streetlight outage in bridge area."
  },
  {
    id: 9,
    img: "https://images.unsplash.com/photo-1584448097741-03f1b0f3a5f2?auto=format&fit=crop&w=800&q=60",
    issue: "Sewage",
    priority: "High",
    location: "Ward 10, Industrial Area",
    status: "In Progress",
    description: "Sewage water flooding nearby streets."
  },
  {
    id: 10,
    img: "https://images.unsplash.com/photo-1602810311561-69c1aef1d879?auto=format&fit=crop&w=800&q=60",
    issue: "Pothole",
    priority: "Low",
    location: "Ward 8, College Road",
    status: "Pending",
    description: "Multiple small potholes reported."
  }
];

// Inline styles
const styles = {
  container: {
    background: "linear-gradient(135deg, #1f1c2c, #928dab)", // dark bg with purple tone
    minHeight: "100vh",
    padding: "30px",
    fontFamily: "'Segoe UI', sans-serif",
    color: "#fff"
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "26px",
    fontWeight: "bold",
    color: "#f5f5f5",
    textShadow: "0px 2px 4px rgba(0,0,0,0.4)"
  },
  card: {
    background: "#f9f9f9",
    color: "#333",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
    marginBottom: "20px",
    display: "flex",
    overflow: "hidden",
    transition: "transform 0.2s ease",
    cursor: "pointer"
  },
  cardHover: {
    transform: "scale(1.02)"
  },
  img: {
    width: "200px",
    height: "150px",
    objectFit: "cover"
  },
  content: {
    padding: "15px",
    flex: 1
  },
  tags: {
    marginTop: "10px",
    display: "flex",
    gap: "10px",
    flexWrap: "wrap"
  },
  tag: {
    padding: "5px 10px",
    borderRadius: "8px",
    fontSize: "12px",
    fontWeight: "bold"
  },
  high: {
    background: "#ff4d4d",
    color: "#fff"
  },
  low: {
    background: "#4da6ff",
    color: "#fff"
  },
  pending: {
    background: "#ffd633",
    color: "#000"
  },
  completed: {
    background: "#4dff88",
    color: "#000"
  },
  inprogress: {
    background: "#ffa64d",
    color: "#000"
  }
};

function RecentReports() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Recent Civic Reports</h2>
      {reports.map((report) => (
        <div
          key={report.id}
          style={styles.card}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <img src={report.img} alt={report.issue} style={styles.img} />
          <div style={styles.content}>
            <h3>{report.issue} Issue</h3>
            <p>{report.description}</p>
            <div style={styles.tags}>
              <span
                style={{
                  ...styles.tag,
                  ...(report.priority === "High" ? styles.high : styles.low)
                }}
              >
                Priority: {report.priority}
              </span>
              <span style={{ ...styles.tag, background: "#666", color: "#fff" }}>
                📍 {report.location}
              </span>
              <span
                style={{
                  ...styles.tag,
                  ...(report.status === "Pending"
                    ? styles.pending
                    : report.status === "Completed"
                    ? styles.completed
                    : styles.inprogress)
                }}
              >
                {report.status}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecentReports;
