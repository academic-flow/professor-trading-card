import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../components/landingLogo';

const Landing = () => (
    <Container id="landing-page" fluid className="py-3">

      <Row className="justify-content-center">
        <Col xs={6} className="text-center">
          <Logo />
        </Col>
      </Row>


      <Row className="justify-content-center mt-5">
        <Col xs={12} className="text-center">
          <h1 className="display-4">Welcome to ProfTCG!</h1>
        </Col>
      </Row>
<br />
      <br />
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={8} lg={6} className="text-center">
          <p className="lead">
            Open packs of cards containing professors here at UH Manoa, trade with friends, and get to know your professors better!
          </p>
        </Col>
      </Row>

<Row className="justify-content-center mt-5">
  <Col xs={12} md={8} lg={6} className="text-center">
    <Link id="signin" to="/SignIn" className="btn btn-secondary ">Sign In or register here </Link>
  </Col>
</Row>
</Container>
);

export default Landing;
