import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const AdminPartner = () => {
  const [partnerDetails, setPartnerDetails] = useState({
    partnerName: "",
    partnerWebsite: "",
    availableVehicles: "",
    availableDestinations: "",
    averageBudget: "",
  });

  const [submittedData, setSubmittedData] = useState([]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPartnerDetails({ ...partnerDetails, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !partnerDetails.partnerName ||
      !partnerDetails.partnerWebsite ||
      !partnerDetails.availableVehicles ||
      !partnerDetails.availableDestinations ||
      !partnerDetails.averageBudget
    ) {
      alert("All fields are required!");
      return;
    }

    setSubmittedData([...submittedData, { ...partnerDetails }]);
    setPartnerDetails({
      partnerName: "",
      partnerWebsite: "",
      availableVehicles: "",
      availableDestinations: "",
      averageBudget: "",
    });
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Admin Partner Page</h2>

      {/* Partner Form */}
      <Form onSubmit={handleSubmit} className="mb-4">
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="partnerName">
              <Form.Label>Partner Name</Form.Label>
              <Form.Control
                type="text"
                name="partnerName"
                value={partnerDetails.partnerName}
                onChange={handleChange}
                placeholder="Enter partner name"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="partnerWebsite">
              <Form.Label>Partner Website</Form.Label>
              <Form.Control
                type="url"
                name="partnerWebsite"
                value={partnerDetails.partnerWebsite}
                onChange={handleChange}
                placeholder="Enter website link"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="availableVehicles">
              <Form.Label>Available Vehicles</Form.Label>
              <Form.Control
                type="text"
                name="availableVehicles"
                value={partnerDetails.availableVehicles}
                onChange={handleChange}
                placeholder="Enter vehicle types (comma-separated)"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="availableDestinations">
              <Form.Label>Available Destinations</Form.Label>
              <Form.Control
                type="text"
                name="availableDestinations"
                value={partnerDetails.availableDestinations}
                onChange={handleChange}
                placeholder="Enter destination types (comma-separated)"
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="averageBudget" className="mb-3">
          <Form.Label>Average Budget</Form.Label>
          <Form.Control
            type="number"
            name="averageBudget"
            value={partnerDetails.averageBudget}
            onChange={handleChange}
            placeholder="Enter average budget"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Partner
        </Button>
      </Form>

      {/* Submitted Data */}
      <h4 className="mt-4">List of Partners</h4>
      {submittedData.length > 0 ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Partner Name</th>
              <th>Website</th>
              <th>Available Vehicles</th>
              <th>Available Destinations</th>
              <th>Average Budget</th>
            </tr>
          </thead>
          <tbody>
            {submittedData.map((partner, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{partner.partnerName}</td>
                <td>{partner.partnerWebsite}</td>
                <td>{partner.availableVehicles}</td>
                <td>{partner.availableDestinations}</td>
                <td>{partner.averageBudget}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No partners added yet.</p>
      )}
    </Container>
  );
};

export default AdminPartner;
