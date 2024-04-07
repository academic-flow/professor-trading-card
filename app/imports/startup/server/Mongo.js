import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { Cards } from '../../api/card/Card.js';
import { Friends } from '../../api/friend/Friends';
/* eslint-disable no-console */

// Initialize the database with a default data document.
const addData = (data) => {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.collection.insert(data);
};

const addCardData = (data) => {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Cards.collection.insert(data);
};

// Initialize the StuffsCollection if empty.
if (Stuffs.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.forEach((data) => addData(data));
  }
}

if (Cards.collection.find().count() === 0) {
  if (Meteor.settings.cardData) {
    console.log('Creating card data');
    Meteor.settings.cardData.forEach((data) => addCardData(data));
  }
}

const addFriend = (friend) => {
  console.log(`  Adding: ${friend.lastname} (${friend.owner})`);
  Friends.collection.insert(friend);
};

if (Friends.collection.find().count() === 0) {
  if (Meteor.settings.defaultFriends) {
    console.log('Creating default friends');
    Meteor.settings.defaultFriends.forEach(friend => addFriend(friend));
  }
}
