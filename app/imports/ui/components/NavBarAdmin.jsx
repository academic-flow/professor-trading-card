import React from 'react';
import { Meteor } from 'meteor/meteor';
import App from '../layouts/App';
import '../../../public/style/navbar.css';
import { House, CardList, List } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Roles } from 'meteor/alanning:roles';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import PropTypes from 'prop-types';
import Landing from '../pages/Landing';
import NotFound from '../pages/NotFound';
import SignOut from '../pages/SignOut';
import CardItem from './CardItem';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import NotAuthorized from '../pages/NotAuthorized';
import LoadingSpinner from './LoadingSpinner';

const NavBar = () => (
  <div className="d-flex flex-column min-vh-100">
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto px-0">
          <div id="sidebar" className="collapse collapse-horizontal col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-danger">
            <div id="sidebar-nav" className="d-flex flex-column align-items-center align-items-sm-start px-1 pt-2 text-white min-vh-100">
              <a href="/admin" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="collapse fs-5 d-none d-sm-inline">Menu</span>
              </a>
              <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <li className="nav-item">
                  <a href="/home" className="nav-link px-0 align-middle">
                    <House className="fs-4 text-white" /><span className="ms-1 d-none d-sm-inline text-white">Home</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/CardItem" className="nav-link px-0 align-middle ">
                    <CardList className="fs-4 text-white" /><span className="ms-1 d-none d-sm-inline text-white">CardList</span>
                  </a>
                </li>
              </ul>
              <hr />
              <div className="dropdown pb-4">
                <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="morning-brew-coffee.png" width="30" height="30" className="rounded-circle" />
                  <span className="d-none d-sm-inline mx-1">*admin*</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                  <li><a className="dropdown-item" href="/signout">Sign out</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <main className="col ps-md-2 pt-2">
          <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse" className="border rounded-3 p-2 text-decoration-none "><List className="fs-4" /> Menu</a>
        </main>
      </div>
    </div>
  </div>
);

export default NavBar;
