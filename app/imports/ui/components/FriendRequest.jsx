import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Button, Card, Image } from 'react-bootstrap';
import '/public/style/friendListSearchBar.css';
import { Meteor } from 'meteor/meteor';

const FriendRequestCard = ({ request }) => {
  const confirmRequest = () => {
    Meteor.call('confirmRequest', request, (err) => {
      if (err) {
        console.log(err);
      }
    });
  };
  const rejectRequest = () => {
    Meteor.call('rejectRequest', request, (err) => {
      if (err) {
        console.log(err);
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
              <Card.Title>{request.sender}</Card.Title>
              <Card.Subtitle>email@address.com</Card.Subtitle>
              <Row className="py-2" />
            </Col>

            <Col md={3} className=" align-items-center justify-content-center">
              <Row>
                <Button id="confirmbutton" variant="primary" className="pb-2" onClick={confirmRequest}>
                  Confirm
                </Button>
              </Row>
              <Row>

                <Button id="rejectbutton" variant="primary" className="mt-4" onClick={rejectRequest}>
                  Reject
                </Button>
              </Row>
            </Col>

          </Row>
        </Card.Body>
      </Card>
    </Row>
  );
};

FriendRequestCard.propTypes = {
  request: PropTypes.shape({
    receiver: PropTypes.string,
    sender: PropTypes.string,
    status: PropTypes.bool,
    _id: PropTypes.string,
  }).isRequired,
};
export default FriendRequestCard;
