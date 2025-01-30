import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/firebase';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import './AdminTours.css';

const AdminTours = () => {
  const [tours, setTours] = useState([]);

  // Fetch all tours from Firestore
  useEffect(() => {
    const fetchTours = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Tours'));
        const toursData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTours(toursData);
      } catch (error) {
        console.error('Error fetching tours:', error);
      }
    };

    fetchTours();
  }, []);

  // Update approval status in Firestore
  const updateApprovalStatus = async (id) => {
    try {
      const tourRef = doc(db, 'Tours', id);
      await updateDoc(tourRef, {
        approve: true, // Set approve to true
      });

      // Update the local state to reflect changes instantly
      setTours((prevTours) =>
        prevTours.map((tour) =>
          tour.id === id ? { ...tour, approve: true } : tour
        )
      );
    } catch (error) {
      console.error('Error updating approval status:', error);
    }
  };

  return (
    <div className="admin-tours">
      <h1>Admin Tours</h1>
      <table className="tours-table">
        <thead>
          <tr>
            <th>Tour Name</th>
            <th>Destination</th>
            <th>Start Date</th>
            <th>Days</th>
            <th>Budget</th>
            <th>Travel Medium</th>
            <th>Approval</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tours.map((tour) => (
            <tr key={tour.id}>
              <td>{tour.Tour_name}</td>
              <td>{tour.destination}</td>
              <td>{tour.start_date.toDate().toLocaleDateString()}</td>
              <td>{tour.number_of_days}</td>
              <td>${tour.budget}</td>
              <td>{tour.travel_medium}</td>
              <td>{tour.approve ? 'Approved' : 'Pending'}</td>
              <td>
                {!tour.approve && (
                  <button
                    className="approve-btn"
                    onClick={() => updateApprovalStatus(tour.id)}
                  >
                    Approve
                  </button>
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
