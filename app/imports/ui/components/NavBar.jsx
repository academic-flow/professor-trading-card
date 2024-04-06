import React from 'react';
import { Col, Row } from 'react-bootstrap';

const NavBar = () => (
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  <NavBar className="d-flex flex-column min-vh-100">
    <Col className="container-fluid">
      <Row className="row flex-nowrap">
        <Row className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-danger">
          <Row className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <Row href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
              <Row className="fs-5 d-none d-sm-inline">Menu</Row>
            </Row>
          </Row>
        </Row>
      </Row>
    </Col>
  </NavBar>
);
export default NavBar;
