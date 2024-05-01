import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';

const TeacherHome = () => {
const { currentUser } = useTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : ''
}), []);
return (
  <Container id="landing-page" fluid className="py-3">
    <Row className="align-middle text-center">
      <Col>
        <h1>{ currentUser }</h1>
        <Image src="/images/Admin_Icon.jpeg" width="300" height="300" roundedCircle />
      </Col>
      <Col xs={8} className="d-flex flex-column justify-content-center">
        <h1>Teacher Home Page</h1>
        <h2 className="text-center py-4">Welcome to ProfCTG!!</h2>
      </Col>
    </Row>
  </Container>
);
}
export default TeacherHome;