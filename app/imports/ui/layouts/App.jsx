import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Roles } from 'meteor/alanning:roles';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Landing from '../pages/Landing';
import ListCard from '../pages/ListCard';
import CardItem from '../components/CardItem';
import SignUp from '../pages/SignUp';
import SignOut from '../pages/SignOut';
import NavBar from '../components/NavBar';
import SignIn from '../pages/SignIn';
import NotAuthorized from '../pages/NotAuthorized';
import LoadingSpinner from '../components/LoadingSpinner';
import MainPage from '../pages/MainPage';
import ListFriends from '../pages/ListFriends';
import ViewCollection from '../pages/ViewCollection';
import TeacherHomePage from '../pages/TeacherHomePage';
import TeacherAddCard from '../pages/TeacherAddCard';
/* eslint-disable */


const App = () => {
  const { ready } = useTracker(() => {
    const rdy = Roles.subscription.ready();
    return {
      ready: rdy,
    };
  });
  return (
    <Router>
      <div className="d-flex ">
        <NavBar ready={ready} />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<ProtectedRoute><MainPage /></ProtectedRoute>} />
          <Route path="/friendlist" element={<ProtectedRoute><ListFriends /></ProtectedRoute>} />
          <Route path="/TeacherHome" element={<ProtectedRoute><TeacherHomePage /></ProtectedRoute>} />
          <Route path="/list" element={<ProtectedRoute><ListCard /></ProtectedRoute>} />
          <Route path="/notauthorized" element={<NotAuthorized />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/CardItem" element={<CardItem card={1} />} />
          <Route path="/friendcollection/:friendUserName" element={<ProtectedRoute><ViewCollection /></ProtectedRoute>} />
          <Route path="/add-card" element={<AdminProtectedRoute ready={ready}><TeacherAddCard /></AdminProtectedRoute>} />
        </Routes>
      </div>
    </Router>
  );
};

/*
* ProtectedRoute (see React Router v6 sample)
 * Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const ProtectedRoute = ({ children }) => {
  const isLogged = Meteor.userId() !== null;
  return isLogged ? children : <Navigate to="/signin" />;
};

/**
 * AdminProtectedRoute (see React Router v6 sample)
 * Checks for Meteor login and admin role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const AdminProtectedRoute = ({ ready, children }) => {
  const isLogged = Meteor.userId() !== null;
  if (!isLogged) {
    return <Navigate to="/signin" />;
  }
  if (!ready) {
    return <LoadingSpinner />;
  }

  const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
  return (isLogged && isAdmin) ? children : <Navigate to="/notauthorized" />;
};

// Require a component and location to be passed to each ProtectedRoute.
ProtectedRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

ProtectedRoute.defaultProps = {
  children: <Landing />,
};

// Require a component and location to be passed to each AdminProtectedRoute.
AdminProtectedRoute.propTypes = {
  ready: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

AdminProtectedRoute.defaultProps = {
  ready: false,
  children: <Landing />,
};

export default App;
