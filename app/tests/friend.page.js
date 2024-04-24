import { Selector, t } from 'testcafe';

class FriendPage {

  async gotoFriendCollection(testController, friendName) {
    const viewCollectionLink = Selector('a').withText('View Collection').filter(node => node.textContent === 'View Collection' && node.href.includes(`/friendcollection/${friendName}`));
    
    await testController.click(viewCollectionLink);

    await t.wait(5000);
  }

}

export const friendPage = new FriendPage();
