import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { PersonCircle, GiftFill } from 'react-bootstrap-icons';
import styles from '../../../public/stylesheets/MainPage.css';

// Reusable Section component
const Section = ({ title, children }) => (
  <section className="text-center" style={{ marginBottom: '40px' }}>
    <h2 style={{ color: '#333', fontSize: '28px', fontWeight: 'bold', margin: '20px 0' }}>{title}</h2>
    <Container>
      <Row md={1} lg={2}>
        {children}
      </Row>
    </Container>
  </section>
);

const MainPage = () => (
  <main>

    <Container fluid>
      <Row>
        <Col />
        <Col sm={6} className="text-center">
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', color: '#333', marginTop: '40px' }}>Welcome to ProfTCG</h1>
        </Col>
        <Col className="d-flex align-items-center justify-content-end">
          <PersonCircle size={64} style={{ marginBottom: '30px' }} />
        </Col>
      </Row>
      <hr className="line" />
    </Container>

    <Container className="bg-image" fluid>
      <Container className="justify-content-center text-center">
        <h2 style={{ color: '#333', fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Available Packages To Open:</h2>
        <p style={{ color: '#666', fontSize: '18px', marginBottom: '20px' }}>Click here to open your package:</p>
        <Button variant="primary" size="lg" style={{ backgroundColor: '#333', borderColor: '#333' }}>
          <GiftFill size={64} />
        </Button>
      </Container>

      <br />
      <br />

      {/* Reusable Section component for Trade Requested */}
      <Section title="Trade requested from 'UserName'">
        <Col xs={6} />
        <Col xs={6} />
      </Section>

      <br />
      <br />

      <Container>
        <Row>
          <Col xs={6}>
            <Section title="Card Offered:">
              <Col xs={6} />
              <Col xs={6} />
            </Section>
          </Col>
          <Col xs={6}>
            <Section title="Card Wanted:">
              <Col xs={6} />
              <Col xs={6} />
            </Section>
          </Col>
        </Row>
      </Container>

      <br />
      <br />
      <br />

      <div className="text-center">
        <p style={{ color: '#666', fontSize: '18px', marginBottom: '20px' }}>Accept Trade?</p>
        <Button style={{ marginRight: '10px', backgroundColor: '#00ab66', borderColor: '#00ab66' }}>Yes</Button>
        <Button style={{ backgroundColor: '#e13d30', borderColor: '#e13d30' }}>No</Button>
      </div>
    </Container>
  </main>
);

export default MainPage;
