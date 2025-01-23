import React, { useState } from "react";
import { Table, Button, Form, Modal } from "react-bootstrap";

const AdminDestination = () => {
  const [destinations, setDestinations] = useState([]);
  const [formData, setFormData] = useState({ name: "", description: "" });
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentDestination, setCurrentDestination] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add a new destination
  const handleAddDestination = (e) => {
    e.preventDefault();
    if (formData.name && formData.description) {
      setDestinations([
        ...destinations,
        { id: Date.now(), name: formData.name, description: formData.description },
      ]);
      setFormData({ name: "", description: "" });
    }
  };

  // Open edit modal
  const handleEdit = (destination) => {
    setCurrentDestination(destination);
    setFormData({ name: destination.name, description: destination.description });
    setShowEditModal(true);
  };

  // Update destination
  const handleUpdateDestination = () => {
    setDestinations(
      destinations.map((dest) =>
        dest.id === currentDestination.id ? { ...dest, ...formData } : dest
      )
    );
    setShowEditModal(false);
    setCurrentDestination(null);
    setFormData({ name: "", description: "" });
  };

  // Delete a destination
  const handleDelete = (id) => {
    setDestinations(destinations.filter((dest) => dest.id !== id));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Admin Destination Page</h2>

      {/* Add Destination Form */}
      <Form onSubmit={handleAddDestination} className="mb-4">
        <Form.Group className="mb-3">
          <Form.Label>Destination Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter destination name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Destination Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter destination description"
            rows={3}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Destination
        </Button>
      </Form>

      {/* Destinations Table */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {destinations.map((destination, index) => (
            <tr key={destination.id}>
              <td>{index + 1}</td>
              <td>{destination.name}</td>
              <td>{destination.description}</td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  className="me-2"
                  onClick={() => handleEdit(destination)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(destination.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Edit Destination Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Destination</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Destination Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter destination name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Destination Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter destination description"
                rows={3}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdateDestination}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminDestination;
