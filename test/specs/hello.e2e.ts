import HelloWorldPage from '../pageobjects/HelloWorld.page';

describe('My hello world page', () => {

  beforeEach(async () => {
    await HelloWorldPage.open();
  })

  it('Should toggle hello world title', async () => {
    await HelloWorldPage.toggle('hello');
    await expect(HelloWorldPage.helloTitle).toBeExisting()
  });

  it('Should not toggle', async () => {
    await HelloWorldPage.toggle('asfasfsa');
    await expect(HelloWorldPage.helloTitle).not.toBeExisting();
  });
});
