import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/**
 * The CardCollection. It encapsulates state and variable values for stuff.
 */
class KeyCollection {
  constructor() {
    // The name of this collection.
    this.name = 'KeyCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      key: String,
      status: {
        type: Boolean,
        defaultValue: false,
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
 * The singleton instance of the KeyCollection.
 * @type {KeyCollection}
 */
export const Keys = new KeyCollection();
