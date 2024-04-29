import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../components/landingLogo';

const Landing = () => (
  <Container id="landing-page" fluid className="p-0">
    <div
      className="bg-image"
      style={{
        backgroundImage: "url('https://i.pinimg.com/originals/dd/f0/e5/ddf0e5f01afb7be61381075b0498e780.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container className="text-white bg-dark bg-opacity-50 py-5 text-center">
        <Row className="justify-content-center">
          <Col xs={6}>
            <Logo />
          </Col>
        </Row>

        <Row className="justify-content-center mt-5">
          <Col xs={12}>
            <h1 className="display-4">Welcome to ProfTCG!</h1>
          </Col>
        </Row>

        <Row className="justify-content-center mt-5">
          <Col xs={12} md={8} lg={6}>
            <p className="lead">
              Open packs of cards containing professors here at UH Manoa, trade with friends, and get to know your professors better!
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center mt-5">
          <Col xs={12} md={8} lg={6}>
            <Link id="signin" to="/SignIn" className="btn btn-secondary">Sign In or register here</Link>
          </Col>
        </Row>
      </Container>
    </div>
  </Container>
);

export default Landing;