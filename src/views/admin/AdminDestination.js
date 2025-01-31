import React, { useState } from "react";
import { Table, Button, Form, Modal } from "react-bootstrap";

const AdminDestination = () => {
  const [destinations, setDestinations] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    description: "",
    locations: [],
  });

  const [locationData, setLocationData] = useState({
    title: "",
    image: "",
    description: "",
  });

  const [showEditModal, setShowEditModal] = useState(false);
  const [currentDestination, setCurrentDestination] = useState(null);

  // Handle input changes for the main destination form
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle image upload for the main destination
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: URL.createObjectURL(file) });
    }
  };

  // Handle input changes for the location fields
  const handleLocationChange = (e) => {
    setLocationData({ ...locationData, [e.target.name]: e.target.value });
  };

  // Handle image upload for locations
  const handleLocationImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLocationData({ ...locationData, image: URL.createObjectURL(file) });
    }
  };

  // Add a new location inside the destination
  const handleAddLocation = () => {
    if (locationData.title && locationData.description) {
      setFormData({
        ...formData,
        locations: [...formData.locations, { ...locationData, id: Date.now() }],
      });
      setLocationData({ title: "", image: "", description: "" });
    }
  };

  // Remove a location from the destination
  const handleRemoveLocation = (id) => {
    setFormData({
      ...formData,
      locations: formData.locations.filter((loc) => loc.id !== id),
    });
  };

  // Add a new destination
  const handleAddDestination = (e) => {
    e.preventDefault();
    if (formData.title && formData.description && formData.image) {
      setDestinations([
        ...destinations,
        { id: Date.now(), ...formData },
      ]);
      setFormData({ title: "", image: "", description: "", locations: [] });
    }
  };

  // Open edit modal
  const handleEdit = (destination) => {
    setCurrentDestination(destination);
    setFormData({ ...destination });
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
    setFormData({ title: "", image: "", description: "", locations: [] });
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
          <Form.Label>Destination Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter destination title"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Destination Image</Form.Label>
          <Form.Control
            type="file"
            onChange={handleImageUpload}
            accept="image/*"
            required
          />
          {formData.image && (
            <img
              src={formData.image}
              alt="Destination Preview"
              className="mt-2"
              width="150"
            />
          )}
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

        {/* Add Locations Section */}
        <h5>Add Locations</h5>
        <Form.Group className="mb-3">
          <Form.Label>Location Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={locationData.title}
            onChange={handleLocationChange}
            placeholder="Enter location title"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Location Image</Form.Label>
          <Form.Control
            type="file"
            onChange={handleLocationImageUpload}
            accept="image/*"
          />
          {locationData.image && (
            <img
              src={locationData.image}
              alt="Location Preview"
              className="mt-2"
              width="100"
            />
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Location Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            value={locationData.description}
            onChange={handleLocationChange}
            placeholder="Enter location description"
            rows={2}
          />
        </Form.Group>

        <Button variant="secondary" onClick={handleAddLocation} className="mb-3">
          Add Location
        </Button>

        <ul className="list-group">
          {formData.locations.map((location) => (
            <li key={location.id} className="list-group-item d-flex justify-content-between align-items-center">
              {location.title} 
              <Button variant="danger" size="sm" onClick={() => handleRemoveLocation(location.id)}>
                Remove
              </Button>
            </li>
          ))}
        </ul>

        <Button variant="primary" type="submit" className="mt-3">
          Add Destination
        </Button>
      </Form>

      {/* Destinations Table */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Image</th>
            <th>Description</th>
            <th>Locations</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {destinations.map((destination, index) => (
            <tr key={destination.id}>
              <td>{index + 1}</td>
              <td>{destination.title}</td>
              <td>
                <img src={destination.image} alt="Destination" width="100" />
              </td>
              <td>{destination.description}</td>
              <td>
                <ul>
                  {destination.locations.map((loc) => (
                    <li key={loc.id}>{loc.title}</li>
                  ))}
                </ul>
              </td>
              <td>
                <Button variant="warning" size="sm" onClick={() => handleEdit(destination)}>
                  Edit
                </Button>{" "}
                <Button variant="danger" size="sm" onClick={() => handleDelete(destination.id)}>
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

export default AdminDestination;
