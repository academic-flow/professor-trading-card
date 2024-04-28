import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Keys } from '../../api/key/Key';
import { Friends } from '../../api/friend/Friend';
import { Cards } from '../../api/card/Card';
import { Trades } from '../../api/trade/Trade';

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
  confirmRequest: function (data) {
    Friends.collection.update(
      { $and: [{ sender: data.sender }, { receiver: data.receiver }] },
      { $set: { status: true } },
    );
  },
  rejectRequest: function (data) {
    Friends.collection.remove({ $and: [{ sender: data.sender }, { receiver: data.receiver }, { status: false }] });
  },
  gettingFriendCardCollection: function (data) {
    const collection = Cards.collection.find({ owner: data }).fetch();
    return collection;
  },
  tradeCard: function (myCardID, selectedCardID, receiver, sender) {
    const checkingTradeExistC1 = Trades.collection.findOne({ $and: [{ sender: sender }, { receiver: receiver }, { card_wanted: selectedCardID }, { card_offer: myCardID }] });
    const checkingTradeExistC2 = Trades.collection.findOne({ $and: [{ sender: receiver }, { receiver: sender }, { card_wanted: myCardID }, { card_offer: selectedCardID }] });
    if (checkingTradeExistC1) {
      throw new Meteor.Error('already-pending', 'You already send asked for this trade');
    }
    if (checkingTradeExistC2) {
      const friendStillHaveCard = Cards.collection.findOne({ $and: [{ _id: selectedCardID }, { owner: receiver }] });
      const iStillHaveCard = Cards.collection.findOne({ $and: [{ _id: myCardID }, { owner: sender }] });
      if (friendStillHaveCard && iStillHaveCard) {
        Cards.collection.update(
          { $and: [{ _id: selectedCardID }, { owner: receiver }] },
          { $set: { owner: sender } },
        );
        Cards.collection.update(
          { $and: [{ _id: myCardID }, { owner: sender }] },
          { $set: { owner: receiver } },
        );
        Trades.collection.remove({ $and: [{ sender: receiver }, { receiver: sender }, { card_wanted: myCardID }, { card_offer: selectedCardID }] });

        return 'success trade';
      }
      throw new Meteor.Error("can-not-trade', 'Cannot trade either you or your friend don't own the card anymore");

    }
    Trades.collection.insert({ sender: sender, receiver: receiver, card_wanted: selectedCardID, card_offer: myCardID });
    return 'initiate the trade';
  },
  getCardDataForTradeComponent: function (card_wanted, card_offer) {
    const cardOffer = Cards.collection.findOne({ _id: card_offer });
    const cardWanted = Cards.collection.findOne({ _id: card_wanted });
    return { cardOffer, cardWanted };
  },
  confirmTrade: function (trade) {
    const cardOfferCheck = Cards.collection.findOne({ $and: [{ _id: trade.card_offer }, { owner: trade.sender }] });
    const cardOwnerCheck = Cards.collection.findOne({ $and: [{ _id: trade.card_wanted }, { owner: trade.receiver }] });
    if (cardOfferCheck && cardOwnerCheck) {
      Cards.collection.update(
        { $and: [{ _id: trade.card_offer }, { owner: trade.sender }] },
        { $set: { owner: trade.receiver } },
      );
      Cards.collection.update(
        { $and: [{ _id: trade.card_wanted }, { owner: trade.receiver }] },
        { $set: { owner: trade.sender } },
      );
      Trades.collection.remove({ $and: [{ sender: trade.sender }, { receiver: trade.receiver }, { card_wanted: trade.card_wanted }, { card_offer: trade.card_offer }] });
      return 'success trade';

    }
    Trades.collection.remove({ $and: [{ sender: trade.sender }, { receiver: trade.receiver }, { card_wanted: trade.card_wanted }, { card_offer: trade.card_offer }] });
    throw new Meteor.Error("can-not-trade', 'Cannot trade either you or your friend don't own the card anymore");

  },
  denyTrade: function (trade) {
    Trades.collection.remove({ $and: [{ sender: trade.sender }, { receiver: trade.receiver }, { card_wanted: trade.card_wanted }, { card_offer: trade.card_offer }] });
    return 'success cancel trade';
  },
  getRandomCards: function (username) {
    const user = Meteor.users.findOne({ username: username });
    if (user.availablePackage > 0) {
      const numberOfCards = 3;
      const randomCards = Cards.collection.find({ owner: 'None' }).fetch();
      if (randomCards.length < numberOfCards) {
        throw new Meteor.Error("insuffiecient-cards', 'Insufficient cards in database please contact UH manoa to resolve this issue");

      } else {

        const randomIndex = Math.floor(Math.random() * (randomCards.length - numberOfCards + 1));
        const selectedCards = randomCards.slice(randomIndex, randomIndex + numberOfCards);

        selectedCards.forEach(card => {
          Cards.collection.update(
            { _id: card._id },
            { $set: { owner: username } },
          );
        });
        Meteor.users.update(
          { _id: user._id },
          { $inc: { availablePackage: -1 } },
        );
        return 'Check your collection for all the new cards';

      }
    } else {
      throw new Meteor.Error("you-dont-have-any-package', 'You don't have any package to open");

    }
  },
});
