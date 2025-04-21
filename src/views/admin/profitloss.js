import React, { useState } from 'react';
import './profitloss.css';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';

const COLORS = ['#007bff', '#28a745', '#ffc107', '#dc3545', '#17a2b8', '#6f42c1'];

const ProfitLoss = () => {
  const [entries, setEntries] = useState([]);
  const [formData, setFormData] = useState({
    travel: '',
    maintenance: '',
    advertising: '',
    rent: '',
    hardware: '',
    others: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEntries([...entries, formData]);
    setFormData({
      travel: '',
      maintenance: '',
      advertising: '',
      rent: '',
      hardware: '',
      others: ''
    });
  };

  const deleteEntry = (index) => {
    const updated = entries.filter((_, i) => i !== index);
    setEntries(updated);
  };

  const handlePrint = (entry) => {
    const formatted = Object.entries(entry)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');
    alert(`Print Data:\n${formatted}`);
    console.log('Print:', entry);
  };

  // Graph data aggregation
  const chartData = [
    { name: 'Travel', value: entries.reduce((acc, e) => acc + Number(e.travel || 0), 0) },
    { name: 'Maintenance', value: entries.reduce((acc, e) => acc + Number(e.maintenance || 0), 0) },
    { name: 'Advertising', value: entries.reduce((acc, e) => acc + Number(e.advertising || 0), 0) },
    { name: 'Rent', value: entries.reduce((acc, e) => acc + Number(e.rent || 0), 0) },
    { name: 'Hardware', value: entries.reduce((acc, e) => acc + Number(e.hardware || 0), 0) },
    { name: 'Others', value: entries.reduce((acc, e) => acc + Number(e.others || 0), 0) }
  ];

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Profit & Loss Entry</h2>

      {/* Form Section */}
      <form id="profit-loss-form" onSubmit={handleSubmit}>
        {Object.entries(formData).map(([key, value]) => (
          <label key={key}>
            {key.charAt(0).toUpperCase() + key.slice(1)} Expenses
            <input
              type="number"
              name={key}
              value={value}
              onChange={handleChange}
              placeholder="0"
              min="0"
              required
            />
          </label>
        ))}
        <button type="submit">Submit</button>
      </form>

      {/* Table Section */}
      <table id="profit-loss-table">
        <thead>
          <tr>
            <th>Travel</th>
            <th>Maintenance</th>
            <th>Advertising</th>
            <th>Rent</th>
            <th>Hardware</th>
            <th>Others</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="profit-loss-table-body">
          {entries.map((entry, index) => (
            <tr key={index}>
              <td>{entry.travel}</td>
              <td>{entry.maintenance}</td>
              <td>{entry.advertising}</td>
              <td>{entry.rent}</td>
              <td>{entry.hardware}</td>
              <td>{entry.others}</td>
              <td>
                <button className="action-btn add" onClick={() => alert("Add logic here!")}>Add</button>
                <button className="action-btn delete" onClick={() => deleteEntry(index)}>Delete</button>
                <button className="action-btn print" onClick={() => handlePrint(entry)}>Print</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Charts Section */}
      <h3 style={{ textAlign: 'center', marginTop: '30px' }}>Expense Distribution (Bar & Pie Charts)</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px', margin: '30px 0' }}>
        {/* Bar Chart */}
        <div style={{ width: '600px', height: 300 }}>
          <ResponsiveContainer>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#007bff" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div style={{ width: '400px', height: 300 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ProfitLoss;
