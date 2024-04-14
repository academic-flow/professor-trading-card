import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { PersonCircle } from 'react-bootstrap-icons';

// Reusable component for the section with a title
const Section = ({ title, children }) => (
    <div className="landing-white-background text-center" style={{ marginBottom: '20px' }}>
      <h2 style={{ color: 'black' }}>{title}</h2>
      <Container>
        <Row md={1} lg={2}>
          {children}
        </Row>
      </Container>
    </div>
);

function MainPage() {
  return (
      <div>
        <Container fluid>
        <Row>
          <Col></Col>
          <Col sm={6} className="text-center">
            <h1>Welcome to ProfTCG</h1>
          </Col>
          <Col className="d-flex align-items-center justify-content-end"> {/* Adjust the size as needed */}
            <PersonCircle size={64}/> {/* Assuming PersonCircle is a custom component */}
          </Col>
        </Row>
      </Container>



        <div style={{ marginBottom: '20px' }}>
          <Container className="justify-content-center text-center">
            <h2 style={{ color: 'black' }}> Available Packages To Open: </h2>
          </Container>
        </div>

        {/* Reusable Section component for Trade Requested */}
        <Section title="Trade requested from 'UserName'">
          <Col xs={6}></Col>
          <Col xs={6}></Col>
        </Section>

        {/* Reusable Section component for Card Offered */}
        <Section title="Card Offered:">
          <Col xs={6}></Col>
          <Col xs={6}></Col>
        </Section>

        {/* Reusable Section component for Card Wanted */}
        <Section title="Card Wanted:">
          <Col xs={6}></Col>
          <Col xs={6}></Col>
        </Section>

        <div style={{ marginBottom: '20px' }} className="text-center">
          <p> Accept Trade? </p>
          <button style={{ marginRight: '10px' }}>Yes</button>
          <button>No</button>
        </div>
      </div>
  );
}

export default MainPage;
