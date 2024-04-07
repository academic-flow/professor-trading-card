import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Image, Row } from 'react-bootstrap';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const Friend = ({ friend }) => (
  <Card className="h-100">
    <Card.Body>
      <Row className="g-0">
        <Col md={4} className="text-center">
          <Image src={friend.image} width={100} roundedCircle />
        </Col>
        <Col md={8}>
          <Card.Title>{friend.firstname} {friend.lastname}</Card.Title>
          <Card.Subtitle>{friend.address}</Card.Subtitle>
          <Card.Text>{friend.description}</Card.Text>
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
