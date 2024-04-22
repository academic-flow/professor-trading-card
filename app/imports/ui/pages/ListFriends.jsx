import React, { useState, useRef } from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import SimpleSchema from 'simpl-schema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { Col, Container, Row, Card, Alert } from 'react-bootstrap';
import { AutoForm, TextField, ErrorsField, SubmitField, HiddenField } from 'uniforms-bootstrap5';
import LoadingSpinner from '../components/LoadingSpinner';
import '/public/style/friendListSearchBar.css';
import { Friends } from '../../api/friend/Friend';
import FriendRequestCard from '../components/FriendRequest';
import ReceiverFriendCard from '../components/ReceiverFriendCard';
import SenderFriendCard from '../components/SenderFriendCard';

const ListFriends = () => {
  const [error, setError] = useState('');
  const schema = new SimpleSchema(Friends.schema);
  const bridge = new SimpleSchema2Bridge(schema);
  const formRef = useRef(null);

  const submit = (doc) => {
    const { sender, receiver } = doc;
    Meteor.call('addFriend', sender, receiver, (err) => {
      if (err) {
        setError(err.reason);
        console.error('Error:', err);

      } else {
        setError('');
        console.error('Error:', err);
        if (formRef.current) {
          formRef.current.reset();
        }

      }
    });

  };

  const { ready, receiverFriends, senderFriends, friendRequest, currentUserName } = useTracker(() => {
    const subscription = Meteor.subscribe(Friends.userPublicationName);
    const rdy = subscription.ready();
    const currentUser = Meteor.user();
    const username = currentUser ? currentUser.username : null;
    const receiverFriendItems = Friends.collection.find({ $and: [{ status: true }, { receiver: username }] }).fetch();
    const senderFriendItems = Friends.collection.find({ $and: [{ status: true }, { sender: username }] }).fetch();
    const friendRequestItems = Friends.collection.find({ $and: [{ status: false }, { receiver: username }] }).fetch();
    return {
      friendRequest: friendRequestItems,
      receiverFriends: receiverFriendItems,
      senderFriends: senderFriendItems,
      ready: rdy,
      currentUserName: username,
    };
  }, []);

  return (ready ? (
    <Container className="py-3">
      <Row>

        <Col>
          <h1 className="text-center py-4">ProfTCG</h1>

          <Row className="justify-content-center">
            <Col md={7}>
              <AutoForm ref={formRef} schema={bridge} onSubmit={data => submit(data)}>
                <Card>
                  <Card.Body>
                    <HiddenField name="sender" value={currentUserName} />
                    <HiddenField name="status" value="false" />
                    <TextField name="receiver" placeholder="Add friend by username" label={false} required="True" />
                    <ErrorsField />
                    <SubmitField />
                  </Card.Body>
                </Card>
              </AutoForm>
              {error === '' ? (
                ''
              ) : (
                <Alert variant="danger">
                  <Alert.Heading>Registration was not successful</Alert.Heading>
                  {error}
                </Alert>
              )}
            </Col>
          </Row>

          <Col className="text-center">
            <h2>Your Friends List</h2>
          </Col>
          {receiverFriends.map((friend) => <ReceiverFriendCard key={friend._id} user={friend} />)}
          {senderFriends.map((friend) => <SenderFriendCard key={friend._id} user={friend} />)}
          <Col className="text-center">
            <h2>Friend Request</h2>
          </Col>
          {friendRequest.map((request) => <FriendRequestCard key={request._id} request={request} />)}
        </Col>

        <Col md={1} />
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default ListFriends;
