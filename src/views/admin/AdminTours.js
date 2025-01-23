import React, { useState } from 'react';
import './AdminTours.css';

const AdminTours = () => {
  const [tours, setTours] = useState([
    {
      id: 1,
      tourName: 'Beach Adventure',
      city: 'Miami',
      startDate: '2025-01-10',
      endDate: '2025-01-15',
      status: 'Pending',
      budget: '$1500',
      vehiclePreference: 'SUV',
    },
    {
      id: 2,
      tourName: 'Mountain Escape',
      city: 'Denver',
      startDate: '2025-02-01',
      endDate: '2025-02-05',
      status: 'Approved',
      budget: '$2000',
      vehiclePreference: '4x4 Jeep',
    },
    {
      id: 3,
      tourName: 'City Lights Tour',
      city: 'New York',
      startDate: '2025-03-10',
      endDate: '2025-03-12',
      status: 'Pending',
      budget: '$1200',
      vehiclePreference: 'Sedan',
    },
  ]);

  const updateTourStatus = (id, newStatus) => {
    setTours((prevTours) =>
      prevTours.map((tour) =>
        tour.id === id ? { ...tour, status: newStatus } : tour
      )
    );
  };

  return (
    <div className="admin-tours">
      <h1>Admin Tours</h1>
      <table className="tours-table">
        <thead>
          <tr>
            <th>Tour Name</th>
            <th>City</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Status</th>
            <th>Budget</th>
            <th>Vehicle Preference</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tours.map((tour) => (
            <tr key={tour.id}>
              <td>{tour.tourName}</td>
              <td>{tour.city}</td>
              <td>{tour.startDate}</td>
              <td>{tour.endDate}</td>
              <td>{tour.status}</td>
              <td>{tour.budget}</td>
              <td>{tour.vehiclePreference}</td>
              <td>
                {tour.status === 'Pending' && (
                  <>
                    <button
                      className="approve-btn"
                      onClick={() => updateTourStatus(tour.id, 'Approved')}
                    >
                      Approve
                    </button>
                    <button
                      className="disapprove-btn"
                      onClick={() => updateTourStatus(tour.id, 'Disapproved')}
                    >
                      Disapprove
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTours;
