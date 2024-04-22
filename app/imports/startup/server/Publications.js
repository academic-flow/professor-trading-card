import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Cards } from '../../api/card/Card';
import { Friends } from '../../api/friend/Friend';
import { Trades } from '../../api/trade/Trade';
// User-level publication.
// If logged in, then publish documents owned by this user. Otherwise, publish nothing.
Meteor.publish(Cards.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Cards.collection.find({ owner: username });
  }
  return this.ready();
});

Meteor.publish(Trades.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Trades.collection.find({ receiver: username });
  }
  return this.ready();
});

Meteor.publish(Friends.userPublicationName, function () {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Friends.collection.find({ $or: [{ receiver: username }, { sender: username }] });
  }
  return this.ready();
});

// Admin-level publication.
// If logged in and with admin role, then publish all documents from all users. Otherwise, publish nothing.
Meteor.publish(Cards.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Cards.collection.find();
  }
  return this.ready();
});

Meteor.publish(Friends.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Friends.collection.find();
  }
  return this.ready();
});

Meteor.publish(Trades.adminPublicationName, function () {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Trades.collection.find();
  }
  return this.ready();
});


// planning:roles publication
// Recommended code to publish roles for each user.
Meteor.publish(null, function () {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  }
  return this.ready();
});
