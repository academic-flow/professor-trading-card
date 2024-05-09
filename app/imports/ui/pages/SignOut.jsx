import React, { useEffect } from 'react';
import { Meteor } from 'meteor/meteor';
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SignOut = () => {
  const navigate = useNavigate();

  useEffect(() => {
    Meteor.logout(() => {
      navigate('/');
    });
  }, [navigate]);

  return (
    <Col id="signout-page" className="text-center py-3">
      <h2>You are signed out.</h2>
    </Col>
  );
};

export default SignOut;
