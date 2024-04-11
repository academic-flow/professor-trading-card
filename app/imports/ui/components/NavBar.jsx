import React from 'react';
import './style/navbar.css';
import { Container, Row, Col, Collapse, Nav, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
function NavBar() {
  return (
    <Container fluid>
      <Row className="flex-nowrap">
        <Col className="px-0">
          <Collapse in={true} className="collapse-horizontal col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-danger" id="sidebar">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-1 pt-2 text-white min-vh-100" id="sidebar-nav">
              <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="collapse fs-5 d-none d-sm-inline">Menu</span>
              </a>
              <Nav className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <Nav.Item>
                  <Nav.Link href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-collection "></i> <span className="ms-1 d-none d-sm-inline">Collection</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#" className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-person"></i> <span className="ms-1 d-none d-sm-inline">Friends</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                    <i className="fs-4 bi-box"></i> <span className="ms-1 d-none d-sm-inline">CardList</span>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <hr />
              <Dropdown className="pb-4">
                <Dropdown.Toggle as="a" className="d-flex align-items-center text-white text-decoration-none" id="dropdownUser1">
                  <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="morning-brew-coffee.png" width="30" height="30" className="rounded-circle" />
                  <span className="d-none d-sm-inline mx-1">*username*</span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                  <Dropdown.Item href="#">Profile</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">Sign out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Collapse>
        </Col>
        <Col className="ps-md-2 pt-2">
          <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse" className="border rounded-3 p-2 text-decoration-none "><i className="bi bi-list"></i> Menu</a>
          <div className="page-header pt-3">
            <h2>Title Test</h2>
          </div>
          <p className="lead"></p>
          <hr />
          <Row>
            <Col>
              <p>Text Goes in main</p>
              <p>Anything can go here</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default NavBar;
