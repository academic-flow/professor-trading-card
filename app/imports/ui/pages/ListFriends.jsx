import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import LoadingSpinner from '../components/LoadingSpinner';
import Friend from '../components/Friend';
import { Friends } from '../../api/friend/Friends';

/* Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
const ListFriends = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready, friends } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Friends.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Friend documents
    const friendItems = Friends.collection.find({}).fetch();
    return {
      friends: friendItems,
      ready: rdy,
    };
  }, []);

  return (ready ? (
    <Container className="py-3">
      <Row>
        <Col md={4}>
          <h1 className="py-4">NavBar</h1>
        </Col>

        <Col>
          <h1 className="text-center py-4">ProfTCG</h1>

          <Form>
            <Row className="justify-content-center">
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Control className="text-center" type="text" placeholder="Add friend by typing in their username." />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>

          <Col className="text-center">
            <h2>Your Friends List</h2>
          </Col>

          <Row xs={1} className="g-4">
            {friends.map((friend) => (<Col key={friend._id}><Friend friend={friend} /></Col>))}
          </Row>
        </Col>

        <Col md={1} />
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListFriends;
