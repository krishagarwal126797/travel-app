import React from "react";
import "./Pricing.css";
import { Card, Button, Container, Row, Col, Accordion } from "react-bootstrap";
import NavbarComp from "../Navbar";
import Footer from "../footer";
const Pricing = () => {
  const testimonials = [
    {
      name: "John Doe",
      position: "Startup Founder",
      image: "/assets/img/h01.jpg",
      feedback:
        "The Basic plan was a perfect start for our small team. It provided all the core features we needed to manage our operations effectively without breaking the bank.",
    },
    {
      name: "Emily Carter",
      position: "Marketing Manager",
      image: "/assets/img/h01.jpg",
      feedback:
        "Upgrading to the Premium plan transformed our workflow. The analytics platform gave us actionable insights that boosted our campaigns' performance.",
    },
    {
      name: "Michael Stevens",
      position: "Tech Entrepreneur",
      image: "/assets/img/h01.jpg",
      feedback:
        "The Pro plan is exceptional! The chat support and advanced features made scaling our business seamless and stress-free.",
    },
  ];
  const faqs = [
    {
      question: "What if I need more features, integrations or customizations?",
      answer: "Ever Platform and Gauzy Platform are great to get started fast, but some marketplaces and ERP/CRM platforms need more flexibility out of the box. Get in touch with us for all kinds of customizations.",
    },
    {
      question: "How does my 90-days free trial work?",
      answer: "Your free trial allows you full access to the platform for 90 days. No credit card is required during this period.",
    },
    {
      question: "Will you be there to help?",
      answer: "Yes, our support team is available 24/7 to assist you with any questions or issues.",
    },
    {
      question: "Are there any hidden fees?",
      answer: "No, there are no hidden fees. Everything is transparent and clearly stated in your plan.",
    },
    {
      question: "What happens if I want to leave?",
      answer: "You can cancel your plan at any time. Your data will remain accessible for a limited period for export.",
    },
  ];
  const data = [
    { feature: "All limited links", basic: "✔", premium: "✔", pro: "✔" },
    { feature: "Own analytics platform", basic: "✔", premium: "✖", pro: "✔" },
    { feature: "Chat Support", basic: "✖", premium: "✔", pro: "✔" },
    { feature: "Optimize Hashtags", basic: "✔", premium: "✔", pro: "✔" },
    { feature: "Unlimited", basic: "✖", premium: "✔", pro: "✔" },
  ];
  return (
    <section className="pricing">
      <NavbarComp/>
    <div className="pricing-page">
      {/* Header Section */}
      <header className="pricing-header text-center">
        <h1>Choose Your Plan</h1>
        <p>Find the perfect plan tailored to your needs.</p>
      </header>

      {/* Pricing Section */}
      <Container className="pricing-section">
        <Row className="justify-content-center">
          {/* Free Plan */}
          <Col md={4}>
            <Card className="pricing-card free-plan">
              <Card.Body>
                <Card.Title>Free plan</Card.Title>
                <h2 className="price">$0</h2>
                <Card.Text>
                  For early-stage startups looking to combine data from a few sources.
                </Card.Text>
                <Button className="cta-button">Get started for free</Button>
              </Card.Body>
            </Card>
          </Col>
          {/* Startup Plan */}
          <Col md={4}>
            <Card className="pricing-card startup-plan">
              <Card.Body>
                <Card.Title>Startup</Card.Title>
                <h2 className="price">$200</h2>
                <small className="subtext">per month, per connector</small>
                <Card.Text>
                  For early-stage startups looking to combine data from a few sources.
                </Card.Text>
                <Button className="cta-button">Buy this plan</Button>
              </Card.Body>
            </Card>
          </Col>
          {/* Enterprise Plan */}
          <Col md={4}>
            <Card className="pricing-card enterprise-plan">
              <Card.Body>
                <Card.Title>Enterprise</Card.Title>
                <h2 className="price">Custom</h2>
                <Card.Text>
                  If you're looking for more access as an Enterprise company, contact us.
                </Card.Text>
                <Button className="cta-button">Talk to sales</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Pricing Comparison Section */}
      <section className="pricing-comparison-section text-center">
      <Container>
        <h2 className="mb-4">Compare Plans</h2>
        <div className="table-responsive">
          <table className="pricing-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Basic</th>
                <th>Premium</th>
                <th>Pro</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td style={{backgroundColor:'#6c63ff',border:'0.5px solid white',color:'white'}}>{row.feature}</td>
                  <td className={row.basic === "✔" ? "check" : "cross"}>{row.basic}</td>
                  <td className={row.premium === "✔" ? "check" : "cross"}>{row.premium}</td>
                  <td className={row.pro === "✔" ? "check" : "cross"}>{row.pro}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>

      {/* CTA Section */}
      <section className="cta-section text-center">
        <h2>Ready to Get Started?</h2>
        <p>Sign up now and take your experience to the next level!</p>
        <Button variant="success">Sign Up Now</Button>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section" style={{ margin: '30px', backgroundColor: '#f9f9f9', padding: '50px 0' }}>
  <h2 className="text-center mb-5" style={{ fontFamily: 'Poppins, sans-serif', color: '#333', fontWeight: '600' }}>
    What Our Users Say
  </h2>
  <Container>
    <Row>
      {testimonials.map((testimonial, index) => (
        <Col key={index} md={4} className="mb-4">
          <Card
            className="text-center shadow-sm p-3"
            style={{
              borderRadius: '15px',
              overflow: 'hidden',
              transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
              background: 'linear-gradient(to bottom, #ffffff, #f0f4f9)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 5px 10px rgba(0, 0, 0, 0.1)';
            }}
          >
            <Card.Img
              variant="top"
              src={testimonial.image}
              alt={testimonial.name}
              className="rounded-circle img-fluid shadow"
              style={{
                width: '120px',
                margin: '20px auto',
                border: '4px solid #4a90e2',
                transition: 'border-color 0.3s ease-in-out',
              }}
              onMouseOver={(e) => (e.currentTarget.style.borderColor = '#50c878')}
              onMouseOut={(e) => (e.currentTarget.style.borderColor = '#4a90e2')}
            />
            <Card.Body style={{backgroundColor:'white'}}>
              <Card.Title style={{ fontFamily: 'Poppins, sans-serif', color: '#222', fontWeight: 'bolder', fontSize: '18px' }}>
                {testimonial.name}
              </Card.Title>
              <Card.Subtitle
                className="mb-3 text-muted"
                style={{
                  fontFamily: 'Roboto, sans-serif',
                  color: '#555',
                  fontSize: '14px',
                  textTransform: 'uppercase',
                  fontWeight:'bold'
                }}
              >
                {testimonial.position}
              </Card.Subtitle>
              <Card.Text style={{ fontFamily:'serif', color: 'black', fontSize: '14px', fontStyle: 'normal',fontWeight:'500' }}>
                "{testimonial.feedback}"
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
</section>


      {/* FAQ Section */}
      <section className="faq-section">
      <Container>
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>
        <Accordion defaultActiveKey="0" flush>
          {faqs.map((faq, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>{faq.question}</Accordion.Header>
              <Accordion.Body>{faq.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </section>
    </div>
    <Footer/>
    </section>
  );
};

export default Pricing;
