import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

class FriendCollection {
  constructor() {
    this.name = 'FriendCollection';
    this.collection = new Mongo.Collection(this.name);
    this.schema = new SimpleSchema({
      sender: String,
      receiver: String,
      status: Boolean,

    });
    // adding a schema check for future document
    this.collection.attachSchema(this.schema);
    // define name for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

export const Friends = new FriendCollection();
