import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { Cards } from '../../api/card/Card.js';

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
