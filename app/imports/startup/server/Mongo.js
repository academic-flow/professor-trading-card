import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { Cards } from '../../api/card/Card.js';
import { Friends } from '../../api/friend/Friend.js';

import { Keys } from '../../api/key/Key.js';

/* eslint-disable no-console */

// Initialize the database with a default data document.
const addData = (data) => {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.collection.insert(data);
};

// adding Friend data
const addFriendData = (data) => {
  console.log(' Adding friend data');
  Friends.collection.insert(data);
};

// adding card data
const addCardData = (data) => {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Cards.collection.insert(data);
};

// adding key data
const addKeyData = (data) => {
  console.log(`  Adding: ${data.key} is used: (${data.status})`);
  Keys.collection.insert(data);
};

// Initialize the StuffsCollection if empty.
if (Stuffs.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.forEach((data) => addData(data));
  }
}

// check if db is empty for cards then add cards
if (Cards.collection.find().count() === 0) {
  if (Meteor.settings.cardData) {
    console.log('Creating card data');
    Meteor.settings.cardData.forEach((data) => addCardData(data));
  }
}
// check if db is empty for keys then add keys
if (Keys.collection.find().count() === 0) {
  if (Meteor.settings.keyData) {
    console.log('Creating key data.');
    Meteor.settings.keyData.forEach((data) => addKeyData(data));
  }
}

if (Friends.collection.find().count() === 0) {
  if (Meteor.settings.friendData) {
    console.log('Creating key data.');
    Meteor.settings.friendData.forEach((data) => addFriendData(data));
  }
}
