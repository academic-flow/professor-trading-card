import React from 'react';
// import { Meteor } from 'meteor/meteor';
// import { useTracker } from 'meteor/react-meteor-data';
// import LoadingSpinner from '../components/LoadingSpinner';
import { Col, Container, Row, Form, Button, InputGroup, Card, Image } from 'react-bootstrap';
import '/public/style/friendListSearchBar.css';

const ListFriends = () => (
  <Container className="py-3">
    <Row>
      <Col>
        <h1 className="text-center py-4">ProfTCG</h1>

        <Row className="justify-content-center">
          <Col md={7}>
            <InputGroup className="mb-4">
              <Form.Control className="text-center" type="text" placeholder="Add friend by typing in their username." />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </InputGroup>
          </Col>
        </Row>

        <Col className="text-center">
          <h2>Your Friends List</h2>
        </Col>

        <Row xs={1} className="g-4 justify-content-center">
          <Card className="h-100" style={{ width: '40rem' }}>
            <Card.Body>
              <Row className="g-0">

                <Col md={4} className="text-center">
                  <Image src="https://github.com/philipmjohnson.png" width={100} roundedCircle />
                </Col>

                <Col className="px-3">
                  <Card.Title>Username</Card.Title>
                  <Card.Subtitle>email@address.com</Card.Subtitle>
                  <Row className="py-2" />
                  <Button variant="secondary">
                    View Collection
                  </Button>
                </Col>

                <Col md={3} className="d-flex align-items-center justify-content-center">
                  <Button variant="danger">
                    REMOVE FRIEND
                  </Button>
                </Col>

              </Row>
            </Card.Body>
          </Card>
        </Row>
      </Col>

      <Col md={1} />
    </Row>
  </Container>
);

export default ListFriends;