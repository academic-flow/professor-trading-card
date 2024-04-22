import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

class TradeCollection {
  constructor() {
    this.name = 'TradeCollection';
    this.collection = new Mongo.Collection(this.name);
    this.schema = new SimpleSchema({
      sender: String,
      receiver: String,
      card_wanted: String,
      card_offer: String,

    });
    // adding a schema check for future document
    this.collection.attachSchema(this.schema);
    // define name for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the CardCollection.
 * @type {TradeCollection}
 */

export const Trades = new TradeCollection();
