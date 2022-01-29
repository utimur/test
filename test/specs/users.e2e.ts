import UsersPage from '../pageobjects/Users.page';
import HelloWorldPage from "../pageobjects/HelloWorld.page";

describe('My users list page', () => {
  beforeEach(async () => {
    await UsersPage.open();
  })

  it('Should load data', async () => {
    await UsersPage.loadData();
  });

  it('Should delete user', async () => {
    await UsersPage.deleteUser();
  });

});
