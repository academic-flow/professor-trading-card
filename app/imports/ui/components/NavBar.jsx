import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom';
import { Roles } from 'meteor/alanning:roles';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BoxArrowRight, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';
import Hamburger from 'hamburger-react';

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username : '',
  }), []);

  return (
      <div className={`navbar-wrapper ${isOpen ? 'open' : ''}`}>
        <Navbar>
          <div className="hamburger-container" onClick={toggleMenu}>
            <Hamburger toggled={isOpen} toggle={toggleMenu}/>
          </div>
        </Navbar>
      </div>
  );
}

export default NavBar;

