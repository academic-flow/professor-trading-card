import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';

const TeacherHome = () => (
  <Container id="landing-page" fluid className="py-3">
    <Row className="align-middle text-center">
      <Col>
        <h1>Username</h1>
        <Image src="/images/circle.png" roundedCircle />
      </Col>
      <Col xs={8} className="d-flex flex-column justify-content-center">
        <h1>Teacher Home Page</h1>
        <h2 className="text-center py-4">Welcome to ProfCTG!!</h2>
      </Col>
    </Row>
  </Container>
);

export default TeacherHome;