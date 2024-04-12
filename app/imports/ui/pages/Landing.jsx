import React from 'react';
import { Col, Container, Row, Form, Button, FloatingLabel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Landing = () => (
  <Container id="landing-page" fluid className="py-3">
    <Row className="align-middle text-center">
      <Col xs={4} className="text-start">
        <h1>NavBar</h1>
      </Col>

      <Col xs={8} className="d-flex flex-column justify-content-center">
        <h1>ProfessorTCG</h1>
      </Col>
    </Row>

    <Row className="py-5">
      <Col md={{ span: 4, offset: 6 }}>
        <h2 className="text-center py-2">Login to your account</h2>
        <Form>
          <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>

          <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>

          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Link to="/signup" className="px-5">Click here to Register</Link>
        </Form>
      </Col>
    </Row>
  </Container>
);

export default Landing;
