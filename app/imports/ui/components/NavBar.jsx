import React from 'react';
import '../../../public/style/navbar.css';
import { Collection, House, CardList, People, List, PeopleFill, BoxArrowRight, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Navigate, Redirect, NavLink } from 'react-router-dom';
import '../layouts/App.jsx';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Roles } from 'meteor/alanning:roles';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const NavBar = ({ ready }) => {
// useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { currentUser, isAdmin } = useTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username : '',
    isAdmin: Roles.userIsInRole(Meteor.userId(), 'admin'),
  }), []);
  // Check if the current user is an admin
  // Render the appropriate navbar based on the user's role
  if (!currentUser) {
    return (
      <div />
    );
  } if (isAdmin) {
    return (
      <div className="d-flex flex-column min-vh-100">
        <div className="container-fluid">
          <div className="row flex-nowrap">
            <div className="col-auto px-0">
              <div id="sidebar" className="collapse collapse-horizontal col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-danger">
                <div id="sidebar-nav" className="d-flex flex-column align-items-center align-items-sm-start px-1 pt-2 text-white min-vh-100">
                  <a href="/TeacherHome" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="collapse fs-5 d-none d-sm-inline">Menu</span>
                  </a>
                  <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                      <a href="/TeacherHome" className="nav-link px-0 align-middle" id="navbar-home-admin">
                        <House className="fs-4 text-white" /><span className="ms-1 d-none d-sm-inline text-white">Home</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/add-card" className="nav-link px-0 align-middle " id="navbar-card-admin">
                        <CardList className="fs-4 text-white" /><span className="ms-1 d-none d-sm-inline text-white">TeacherAddCard</span>
                      </a>
                    </li>
                  </ul>
                  <hr />
                  <div className="dropdown pb-4">
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="morning-brew-coffee.png" width="30" height="30" className="rounded-circle" />
                      <span className="d-none d-sm-inline mx-1">{currentUser}</span>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                      <li><a className="dropdown-item" href="/signout">Sign out</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <main id="openMenuAdmin" className="col ps-md-2 pt-2">
              <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse" className="border rounded-3 p-2 text-decoration-none "><List className="fs-4" /></a>
            </main>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto px-0">
            <div id="sidebar" className="collapse collapse-horizontal col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-danger">
              <div id="sidebar-nav" className="d-flex flex-column align-items-center align-items-sm-start px-1 pt-2 text-white min-vh-100">
                <a href="/home" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                  <span className="collapse fs-5 d-none d-sm-inline">Menu</span>
                </a>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                  <li className="nav-item">
                    <a href="/home" className="nav-link px-0 align-middle" id="navbar-home">
                      <House className="fs-4 text-white" /><span className="ms-1 d-none d-sm-inline text-white">Home</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/list" className="nav-link px-0 align-middle" id="navbar-collection">
                      <Collection className="fs-4 text-white" /> <span className="ms-1 d-none d-sm-inline text-white">Collection</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/friendlist" className="nav-link px-0 align-middle" id="navbar-friend">
                      <People className="fs-4 text-white" /><span className="ms-1 d-none d-sm-inline text-white">Friends</span>
                    </a>
                  </li>
                </ul>
                <hr />
                <div className="dropdown pb-4">
                  <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="morning-brew-coffee.png" width="30" height="30" className="rounded-circle"/>
                    <span className="d-none d-sm-inline mx-1">{currentUser}</span>
                  </a>
                  <ul id="accountClickSignOut" className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                    <li><a className="dropdown-item" href="/signout">Sign out</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <main id="openMenu" className="col ps-md-2 pt-2">
            <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse" className="border rounded-3 p-2 text-decoration-none "><List className="fs-4" /></a>
          </main>
        </div>
      </div>
    </div>
  );

};

export default NavBar;
