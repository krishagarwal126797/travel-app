import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { db } from "../../firebase/firebase";// Ensure the correct path
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

const AdminCustomer = () => {
  const [customers, setCustomers] = useState([]);

  // Fetch all users from Firestore
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const customerData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCustomers(customerData);
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    };

    fetchCustomers();
  }, []);

  // Delete user from Firestore
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "users", id));
      setCustomers(customers.filter((customer) => customer.id !== id));
      alert("User deleted successfully!");
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Error deleting user. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Admin Customer Page</h2>

      {/* Customer Table */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>City</th>
            <th>State</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={customer.id}>
              <td>{index + 1}</td>
              <td>{customer.Username || "N/A"}</td>
              <td>{customer.Email || "N/A"}</td>
              <td>{customer.Phone_number || "N/A"}</td>
              <td>{customer.City || "N/A"}</td>
              <td>{customer.state || "N/A"}</td>
              <td>
                <Button variant="danger" size="sm" onClick={() => handleDelete(customer.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AdminCustomer;
