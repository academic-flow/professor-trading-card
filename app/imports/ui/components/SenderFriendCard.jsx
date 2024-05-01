import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Button, Card, Image } from 'react-bootstrap';
import '/public/style/friendListSearchBar.css';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';

const ReceiverFriendCard = ({ user }) => {
  const removeFriend = () => {
    Meteor.call('removeFriend', { sender: user.receiver, receiver: user.sender }, (error, result) => {
      if (error) {
        console.log(error);
      } else {
        console.log(`Friend removed sender:${user.receiver} receiver:${user.sender}`);
      }
    });
  };
  return (
    <Row xs={1} className="g-4 justify-content-center">
      <Card className="h-100" style={{ width: '40rem' }}>
        <Card.Body>
          <Row className="g-0">
            <Col md={4} className="text-center">
              <Image src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" width={100} roundedCircle />
            </Col>

            <Col className="px-3">
              <Card.Title>{user.receiver}</Card.Title>
              <Card.Subtitle>email@address.com</Card.Subtitle>
              <Row className="py-2" />
              <Link to={`/friendcollection/${user.receiver}`}>View Collection</Link>
            </Col>

            <Col md={3} className="d-flex align-items-center justify-content-center">
              <Button id="removefriendbutton" variant="danger" onClick={removeFriend}>
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
    sender: PropTypes.string,
    receiver: PropTypes.string,
    image: PropTypes.string,
    _id: PropTypes.string,
  }).isRequired,
};

export default ReceiverFriendCard;
