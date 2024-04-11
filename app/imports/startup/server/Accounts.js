import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';

//  check if client is interacting with server
if (Meteor.isServer) {
  Accounts.onCreateUser((options, user) => {
    if (options.role) {
      Roles.createRole(options.role, { unlessExists: true });
      Roles.addUsersToRoles(user._id, options.role);
    }
    return user;
  });
}

// When running app for first time, pass a settings file to set up a default user account.
if (Meteor.users.find().count() === 0) {
  if (Meteor.settings.defaultAccounts) {
    console.log('Creating the default user(s)');
    Meteor.settings.defaultAccounts.forEach(({ email, password, role }) => {
      Accounts.createUser({
        username: email,
        email: email,
        password: password,
        role: role,
      });
    });
  } else {
    console.log('Cannot initialize the database! Please invoke meteor with a settings file.');
  }
}
