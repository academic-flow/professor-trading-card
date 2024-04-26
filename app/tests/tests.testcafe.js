import { Selector, t } from 'testcafe';
import { landingPage } from './landing.page';
import { signinPage } from './signin.page';
import { signoutPage } from './signout.page';
import { navBar } from './navbar.component';
import { friendPage } from './friend.page';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'john@foo.com', password: 'changeme' };

fixture('meteor-application-template-react localhost test with default db')
  .page('http://localhost:3000');

test('Test that landing page shows up', async (testController) => {
  await landingPage.isDisplayed(testController);
});

test('Test that signin and signout work', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
});

test('Test friend list page show up and collection page', async (testController) => {
  await navBar.gotoFriendListPage(testController);
  await testController.click('#view-collection-button');
  await testController.click('#trade');
  await testController.click('.btn-close');
  await navBar.gotoCardListPage(testController);
  await testController.click('.card');
  await testController.wait(5000); 

});

