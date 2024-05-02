import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';

const TeacherHome = () => (
  <div
    className="py-4 bg-image"
    style={{
      backgroundColor: '#E5F6DF',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100vw',
    }}
  >
    <Container id="landing-page" fluid className="py-3">
      <Row className="align-middle text-center">
        <Col>
          <h1></h1>
          <Image src="/images/UH-Seal.png" width="200" roundedCircle />
        </Col>
        <Col xs={8} className="d-flex flex-column justify-content-center">
          <h1>Teacher Home Page</h1>
          <h2 className="text-center py-4">Welcome to ProfCTG!!</h2>
        </Col>
      </Row>
    </Container>
  </div>
);

export default TeacherHome;
