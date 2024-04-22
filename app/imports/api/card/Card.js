import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/**
 * The CardCollection. It encapsulates state and variable values for stuff.
 */
class CardCollection {
  constructor() {
    // The name of this collection.
    this.name = 'CardCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      name: String,
      image: String,
      description: String,
      owner: { type: String, optional: true },
      rarity: {
        type: String,
        allowedValues: ['Common', 'Uncommon', 'Mythic'],
        defaultValue: 'Common',
      },
      tradeAble: {
        type: Boolean,
        defaultValue: true,
      },
    });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the CardCollection.
 * @type {CardCollection}
 */
export const Cards = new CardCollection();
