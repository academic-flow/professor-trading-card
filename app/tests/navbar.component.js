import { Selector, t } from 'testcafe';

class NavBar {

  /** If someone is logged in, then log them out, otherwise do nothing. */

  async gotoSignInPage(testController) {
    const visible = Selector('#sidebar').visible;
    if (!visible) {
      await testController.click('button.navbar-toggler');
    }
    await testController.click('#signin');
  }

  async gotoSignInAdminPage(testController) {
    const visible = Selector('#sidebar').visible;
    if (!visible) {
      await testController.click('button.navbar-toggler');
    }
    await testController.click('#signin');
  }

  async gotoFriendListPage(testController) {
    await testController.click('#navbar-friend');
  }
  async gotoCollectionListPage(testController) {
    await testController.click('#navbar-collection');
  }
  async gotoHomeListPage(testController) {
    await testController.click('#navbar-home');
  }
  async gotoCardListPage(testController) {
    await testController.click('#navbar-home');
  }
  async gotoHomeAdminListPage(testController) {
    await testController.click('#navbar-home-admin');
  }
  async gotoCardAdminListPage(testController) {
    await testController.click('#navbar-card-admin');
  }
}

export const navBar = new NavBar();
