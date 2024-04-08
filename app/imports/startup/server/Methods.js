import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Keys } from '../../api/key/Key';

Meteor.methods({
  // key validate function check if the key exist in database and the status if everything good return admin for role
  keyValidate: function (key) {
    const keyData = Keys.collection.findOne({ key: key });

    if (!keyData) {
      throw new Meteor.Error('key-not-found', 'Key not found in the database');
    }

    // Check the status of the key
    if (keyData.status === false) {
      const result = {
        keyData,
        role: 'admin',
      };
      return result;
    }
    return 'Account already exists for this key';

  },
  // Chaning status of the key from false to true prevent same key used again
  keyChangeStatus: function (key) {
    Keys.collection.update({ key: key }, { $set: { status: true } });
  },

});
