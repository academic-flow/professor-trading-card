import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Image, Row, Button } from 'react-bootstrap';

const Friend = ({ friend }) => (
  <Card className="h-100">
    <Card.Body>
      <Row className="g-0">
        <Col md={3} className="text-center">
          <Image src={friend.image} width={100} roundedCircle />
        </Col>
        <Col md={7} className="px-2">
          <Card.Title>{friend.firstname} {friend.lastname}</Card.Title>
          <Card.Subtitle>{friend.address}</Card.Subtitle>
          <Card.Text>{friend.description}</Card.Text>
        </Col>
        <Col md={2} className="px-3 d-flex align-items-center justify-content-center">
          <Button variant="danger">REMOVE FRIEND</Button>
        </Col>
      </Row>
    </Card.Body>
  </Card>
);

// Require a document to be passed to this component.
Friend.propTypes = {
  friend: PropTypes.shape({
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    address: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    // _id: PropTypes.string,
  }).isRequired,
};

export default Friend;
