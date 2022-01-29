import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';
import {LONG_TIMEOUT, SHORT_TIMEOUT} from "../consts/conts";

class UsersPage extends Page {
  public get loadingTitle(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $('#users-loading');
  }

  public get usersList(): ChainablePromiseElement<Promise<WebdriverIO.Element>> {
    return $('#users-list');
  }

  public get usersItems() {
    return browser.react$$('User');
  }


  public async loadData (): Promise<void> {
    try {
      await this.open();
      await this.loadingTitle.waitForDisplayed({timeout: SHORT_TIMEOUT})
      await this.usersList.waitForDisplayed({timeout: SHORT_TIMEOUT});
    } catch (e) {
      throw new Error('Не удалось загрузить пользователей')
    }
  }

  public async deleteUser (): Promise<void> {
    try {
      await this.loadData();
      const length = await this.usersItems.length;
      console.log('LENGTH', length)

      if(!length) {
        throw new Error('Пользователи не найдены');
      }

      await this.usersItems[0].$('#user-delete').click();
      const lengthAfterDelete = await this.usersItems.length;

      if(length - lengthAfterDelete !== 1) {
        throw new Error('Удаление не произошло или удалился более чем 1 пользователь');
      }
    } catch (e) {
      throw new Error('Не удалось удалить пользователя' + e.message)
    }
  }

  public async open(): Promise<string> {
    return super.open('/users');
  }
}

export default new UsersPage();
