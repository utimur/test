import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

 class HelloWorldPage extends Page {
  public get searchInput(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $('#search');
  }

  public get toggleButton(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $('#toggle');
  }

  public get helloTitle(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $('#hello');
  }

  public async toggle (text: string): Promise<void> {
    await this.searchInput.setValue(text);
    await this.toggleButton.click();
  }

  public async open(): Promise<string> {
    return super.open('/hello');
  }
}

export default new HelloWorldPage();
