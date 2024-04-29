import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Navigate } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';
import { Alert, Card, Col, Container, Row } from 'react-bootstrap';
import SimpleSchema from 'simpl-schema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { AutoForm, ErrorsField, SubmitField, TextField } from 'uniforms-bootstrap5';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';

const SignUp = ({ location }) => {
  const [error, setError] = useState('');
  const [redirectToRef, setRedirectToRef] = useState(false);

  const schema = new SimpleSchema({
    email: String,
    password: String,
    key: { type: String, optional: true },
    availablePackage: { type: Number, optional: true },
  });
  const bridge = new SimpleSchema2Bridge(schema);

  const { isAdmin } = useTracker(() => ({
    isAdmin: Roles.userIsInRole(Meteor.userId(), 'admin'),
  }), []);

  const submit = (doc) => {
    const { email, password, key } = doc;
    if (key) {
      Meteor.call('keyValidate', key, (err, result) => {
        if (err) {
          setError(err.reason);
        } else if (result === 'Account already exists for this key') {
          setError(result);
        } else {
          Accounts.createUser({ email, password, role: result.role, username: email, availablePackage: 1 }, (err) => {
            if (err) {
              setError(err.reason);
            } else {
              Meteor.call('keyChangeStatus', key, (err) => {
                if (err) {
                  setError(err.reason);
                } else {
                  setError('');
                  const redirectPath = isAdmin ? '/home' : '/TeacherHome';
                  setRedirectToRef(redirectPath);
                }
              });
            }
          });
        }
      });
    } else {
      Accounts.createUser({ email, password, username: email }, (err) => {
        if (err) {
          setError(err.reason);
        } else {
          setError('');
          const redirectPath = isAdmin ? '/TeacherHomePage' : '/home';
          setRedirectToRef(redirectPath);
        }
      });
    }
  };

  const { from } = location?.state || { from: { pathname: '/add' } };
  if (redirectToRef) {
    return <Navigate to={redirectToRef} />;
  }

  return (
      <Container id="signup-page" className="py-3">
        <Row className="justify-content-center">
          <Col xs={5}>
            <Col className="text-center">
              <h2>Register your account</h2>
            </Col>
            <AutoForm schema={bridge} onSubmit={data => submit(data)}>
              <Card>
                <Card.Body>
                  <TextField name="email" placeholder="E-mail address" />
                  <TextField name="password" placeholder="Password" type="password" />
                  <TextField name="key" placeholder="Key" optional />
                  <ErrorsField />
                  <SubmitField />
                </Card.Body>
              </Card>
            </AutoForm>
            <Alert variant="light">
              Already have an account? Login <Link to="/signin">here</Link>
            </Alert>
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
      </Container>
  );
};

SignUp.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.string,
  }),
};

SignUp.defaultProps = {
  location: { state: '' },
};

export default SignUp;

