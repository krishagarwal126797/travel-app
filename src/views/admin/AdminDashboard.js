import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from 'chart.js';
import './AdminDashboard.css';

// Register Chart.js modules
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const AdminDashboard = () => {
  // Dummy data for cards
  const metrics = [
    { title: 'Total Customers', value: 500 },
    { title: 'Total Partners', value: 50 },
    { title: 'Total Tours Completed', value: 1200 },
    { title: 'Total Tours Pending', value: 300 },
    { title: 'Total Destinations', value: 75 },
  ];

  // Data for the "Destinations accessed by customers" pie chart
  const destinationsData = {
    labels: ['Paris', 'New York', 'Tokyo', 'Dubai', 'London'],
    datasets: [
      {
        label: 'Customers',
        data: [150, 200, 120, 180, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        hoverOffset: 4,
      },
    ],
  };

  // Data for the "Total Tours Between Months" bar chart
  const toursData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Tours Completed',
        data: [120, 150, 180, 220, 170, 200],
        backgroundColor: '#36A2EB',
      },
      {
        label: 'Tours Pending',
        data: [30, 40, 20, 50, 30, 40],
        backgroundColor: '#FF6384',
      },
    ],
  };

  return (
    <div className="admin-dashboard">
      {/* Header */}
      <h1 className="dashboard-title">Admin Dashboard</h1>

      {/* Cards */}
      <div className="metrics-container">
        {metrics.map((metric, index) => (
          <div key={index} className="metric-card">
            <h3>{metric.title}</h3>
            <p>{metric.value}</p>
          </div>
        ))}
      </div>

      {/* Graphs */}
      <div className="charts-container">
        {/* Pie Chart */}
        <div className="chart">
          <h3>Destinations Accessed by Customers</h3>
          <Pie data={destinationsData} />
        </div>

        {/* Bar Chart */}
        <div className="chart">
          <h3>Total Tours Between Months</h3>
          <Bar data={toursData} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
