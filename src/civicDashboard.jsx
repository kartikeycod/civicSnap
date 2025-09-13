import React from "react";
import {
  PieChart, Pie, Cell,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  LineChart, Line,
  AreaChart, Area,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from "recharts";
import "./CivicDashboard.css";

// ---------- Sample Data ----------
const pieData1 = [
  { name: "Completed", value: 45 },
  { name: "Pending", value: 25 },
  { name: "In Progress", value: 30 }
];

const pieData2 = [
  { name: "High Priority", value: 40 },
  { name: "Low Priority", value: 60 }
];

const barData1 = [
  { type: "Potholes", reports: 30 },
  { type: "Streetlights", reports: 20 },
  { type: "Sewage", reports: 15 }
];

const barData2 = [
  { month: "Jan", high: 10, low: 5 },
  { month: "Feb", high: 8, low: 12 },
  { month: "Mar", high: 12, low: 10 }
];

const lineData1 = [
  { month: "Jan", issues: 12 },
  { month: "Feb", issues: 18 },
  { month: "Mar", issues: 25 }
];

const lineData2 = [
  { month: "Jan", resolved: 8 },
  { month: "Feb", resolved: 15 },
  { month: "Mar", resolved: 20 }
];

const donutData = [
  { name: "Resolved", value: 50 },
  { name: "Unresolved", value: 30 },
  { name: "In Progress", value: 20 }
];

const stackedData = [
  { month: "Jan", high: 10, low: 5 },
  { month: "Feb", high: 8, low: 12 },
  { month: "Mar", high: 12, low: 10 }
];

const areaData = [
  { month: "Jan", potholes: 5, sewage: 4, streetlights: 3 },
  { month: "Feb", potholes: 8, sewage: 3, streetlights: 6 },
  { month: "Mar", potholes: 7, sewage: 6, streetlights: 5 }
];

const radarData = [
  { issue: "Potholes", reports: 120 },
  { issue: "Streetlights", reports: 98 },
  { issue: "Sewage", reports: 86 },
  { issue: "Garbage", reports: 65 },
  { issue: "Water Supply", reports: 75 }
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// ---------- Dashboard Component ----------
function CivicDashboard() {
  return (
    <div className="dashboard">
      <h1>Civic Issue Dashboard</h1>

      {/* KPI Section */}
      <div className="kpis">
        <div className="card">Total Reports: 65</div>
        <div className="card">Pending: 25</div>
        <div className="card">In Progress: 30</div>
        <div className="card">Completed: 45</div>
        <div className="card">High Priority: 40</div>
        <div className="card">Low Priority: 60</div>
      </div>

      {/* Charts Section */}
      <div className="charts">
        {/* Pie 1 */}
        <div className="chartBox">
          <h3>Issue Status</h3>
          <PieChart width={250} height={250}>
            <Pie data={pieData1} cx="50%" cy="50%" outerRadius={80} label dataKey="value">
              {pieData1.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </div>

        {/* Pie 2 */}
        <div className="chartBox">
          <h3>Priority Split</h3>
          <PieChart width={250} height={250}>
            <Pie data={pieData2} cx="50%" cy="50%" outerRadius={80} label dataKey="value">
              {pieData2.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </div>

        {/* Bar 1 */}
        <div className="chartBox">
          <h3>Reports by Type</h3>
          <BarChart width={300} height={250} data={barData1}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="type" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="reports" fill="#8884d8" />
          </BarChart>
        </div>

        {/* Bar 2 */}
        <div className="chartBox">
          <h3>Priority Trends</h3>
          <BarChart width={300} height={250} data={barData2}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="high" fill="#FF8042" />
            <Bar dataKey="low" fill="#00C49F" />
          </BarChart>
        </div>

        {/* Line 1 */}
        <div className="chartBox">
          <h3>Issues Reported</h3>
          <LineChart width={300} height={250} data={lineData1}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="issues" stroke="#8884d8" />
          </LineChart>
        </div>

        {/* Line 2 */}
        <div className="chartBox">
          <h3>Resolved Issues</h3>
          <LineChart width={300} height={250} data={lineData2}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="resolved" stroke="#82ca9d" />
          </LineChart>
        </div>

        {/* Donut */}
        <div className="chartBox">
          <h3>Resolution Status</h3>
          <PieChart width={250} height={250}>
            <Pie
              data={donutData}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={80}
              dataKey="value"
              label
            >
              {donutData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </div>

        {/* Stacked Bar */}
        <div className="chartBox">
          <h3>Stacked Priority</h3>
          <BarChart width={300} height={250} data={stackedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="high" stackId="a" fill="#FF8042" />
            <Bar dataKey="low" stackId="a" fill="#00C49F" />
          </BarChart>
        </div>

        {/* Area */}
        <div className="chartBox">
          <h3>Issue Trends (Area)</h3>
          <AreaChart width={300} height={250} data={areaData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="potholes" stackId="1" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="sewage" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
            <Area type="monotone" dataKey="streetlights" stackId="1" stroke="#ffc658" fill="#ffc658" />
          </AreaChart>
        </div>

        {/* Radar */}
        <div className="chartBox">
          <h3>Issue Distribution (Radar)</h3>
          <RadarChart outerRadius={90} width={300} height={250} data={radarData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="issue" />
            <PolarRadiusAxis />
            <Radar name="Reports" dataKey="reports" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          </RadarChart>
        </div>
      </div>

      {/* Table Section */}
      <div className="tableSection">
        <h3>Sample Issues Table</h3>
        <table>
          <thead>
            <tr>
              <th>Issue Type</th>
              <th>Description</th>
              <th>Status</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pothole</td>
              <td>Large pothole near Main St.</td>
              <td>Pending</td>
              <td>High</td>
            </tr>
            <tr>
              <td>Streetlight</td>
              <td>Light not working in Ward 5</td>
              <td>Completed</td>
              <td>Low</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CivicDashboard;
