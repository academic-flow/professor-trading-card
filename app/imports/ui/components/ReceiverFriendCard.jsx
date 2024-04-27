import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Button, Card, Image } from 'react-bootstrap';
import '/public/style/friendListSearchBar.css';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';

const ReceiverFriendCard = ({ user }) => {
  const removeFriend = () => {
    Meteor.call('removeFriend', { sender: user.sender, receiver: user.receiver }, (error, result) => {
      if (error) {
        console.log(error);
      } else {
        console.log(`Friend removed sender:${user.sender} receiver:${user.receiver}`);
      }
    });
  };
  return (
    <Row xs={1} className="g-4 justify-content-center">
      <Card className="h-100" style={{ width: '40rem' }}>
        <Card.Body>
          <Row className="g-0">
            <Col md={4} className="text-center">
              <Image src="https://github.com/philipmjohnson.png" width={100} roundedCircle />
            </Col>

            <Col className="px-3">
              <Card.Title>{user.sender}</Card.Title>
              <Card.Subtitle>email@address.com</Card.Subtitle>
              <Row className="py-2" />
              <Link id="view-collection-button" to={`/friendcollection/${user.sender}`}>View Collection</Link>
            </Col>

            <Col md={3} className="d-flex align-items-center justify-content-center">
              <Button variant="danger" onClick={removeFriend}>
                REMOVE FRIEND
              </Button>
            </Col>

          </Row>
        </Card.Body>
      </Card>
    </Row>

  );
};

ReceiverFriendCard.propTypes = {
  user: PropTypes.shape({
    receiver: PropTypes.string,
    sender: PropTypes.string,
    image: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default ReceiverFriendCard;
