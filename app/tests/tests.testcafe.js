import { Selector, t } from 'testcafe';
import { landingPage } from './landing.page';
import { signinPage } from './signin.page';
import { signoutPage } from './signout.page';
import { navBar } from './navbar.component';
import { friendPage } from './friend.page';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'john@foo.com', password: 'changeme' };
const credentialsadam = { username: 'phat@foo.com', password: 'changeme' };
const credentialsAdmin = { username: 'admin@foo.com', password: 'changeme' };
fixture('meteor-application-template-react localhost test with default db')
  .page('http://localhost:3000');

test('Test that landing page shows up', async (testController) => {
  await landingPage.isDisplayed(testController);
});

test('Test that signin, open menu, and signout work', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await testController.click('#openMenu');
  await testController.wait(3000);
  await testController.click('#dropdownUser1');
  await testController.click('#accountClickSignOut');
});

test('Test Friendlist works in regular User', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await testController.click('#openMenu');
  await navBar.gotoFriendListPage(testController);
});

test('Test Collection works in regular User', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await testController.click('#openMenu');
  await navBar.gotoCollectionListPage(testController);
});

test('Test friend list can trade with others', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await testController.wait(3000);
  await testController.click('#openMenu');
  await navBar.gotoFriendListPage(testController);
  await testController.click('#view-collection-button');
  await testController.click('#trade');
  await testController.click('#completeTrade');
  await testController.wait(3000);
  await testController.click('.btn-close');
  await navBar.gotoCardListPage(testController);
  await testController.click('.card');
  await testController.click('#openMenu');
  await testController.click('#dropdownUser1');
  await testController.click('#accountClickSignOut');
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentialsadam.username, credentials.password);
  await friendPage.acceptTrade(testController);
  await testController.click('#openMenu');
  await navBar.gotoCollectionListPage(testController);
  await testController.wait(3000);
});

test('Test Home works in regular User', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await testController.click('#openMenu');
  await navBar.gotoHomeListPage(testController);
});

test('Test Adminlogin and home button works', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentialsAdmin.username, credentialsAdmin.password);
  await testController.click('#openMenuAdmin');
  await navBar.gotoHomeAdminListPage(testController);
});

test('Test CardAdmin button works', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentialsAdmin.username, credentialsAdmin.password);
  await testController.click('#openMenuAdmin');
  await navBar.gotoCardAdminListPage(testController);
});


