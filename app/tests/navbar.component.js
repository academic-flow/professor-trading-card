import { Selector } from 'testcafe';

class NavBar {

  /** If someone is logged in, then log them out, otherwise do nothing. */

  async gotoSignInPage(testController) {
    await testController.click('#navbar');
    await testController.click('#navbar-home');
  }

  async gotoFriendListPage(testController) {
    await testController.click('#navbar');
    await testController.click('#navbar-friend');
  }

  async gotoCardListPage(testController) {
    await testController.click('#navbar');
    await testController.click('#navbar-collection');
  }

}

export const navBar = new NavBar();
