import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Keys } from '../../api/key/Key';
import { Friends } from '../../api/friend/Friend';

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

  // Add friend
  addFriend: function (sender, receiver) {
    const alreadyFriendC1 = Friends.collection.findOne({ $and: [{ sender: sender }, { receiver: receiver }, { status: true }] });
    const alreadyFriendC2 = Friends.collection.findOne({ $and: [{ sender: receiver }, { receiver: sender }, { status: true }] });
    if (alreadyFriendC1 || alreadyFriendC2) {
      throw new Meteor.Error('already-friend', 'You are already friend');
    }

    const checkSenderExist = Friends.collection.findOne({ $and: [{ sender: sender }, { receiver: receiver }, { status: false }] });
    if (checkSenderExist) {
      throw new Meteor.Error('already-pending', 'You already send the friend request');
    }

    const checkReceiveExist = Friends.collection.findOne({ $and: [{ sender: receiver }, { receiver: sender }, { status: false }] });
    if (checkReceiveExist) {
      Friends.collection.update(
        { $and: [{ sender: receiver }, { receiver: sender }, { status: false }] },
        { $set: { status: true } },
      );
      return `Added ${receiver}`;
    }
    Friends.collection.insert({ sender: sender, receiver: receiver, status: false });
    return `Friend request sent to ${receiver}`;

  },
  // Remove friend
  removeFriend: function (data) {
    const alreadyFriendC1 = Friends.collection.findOne({ $and: [{ sender: data.sender }, { receiver: data.receiver }, { status: true }] });
    const alreadyFriendC2 = Friends.collection.findOne({ $and: [{ sender: data.receiver }, { receiver: data.sender }, { status: true }] });
    if (alreadyFriendC1) {
      Friends.collection.remove({ _id: alreadyFriendC1._id });
    }
    if (alreadyFriendC2) {
      Friends.collection.remove({ _id: alreadyFriendC2._id });
    }
  },

});
