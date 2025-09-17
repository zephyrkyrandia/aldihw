// pages/LoginPage.ts
import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from '../core/base.page';

export class HeaderPage extends BasePage {
  readonly buttonHeaderLogin: Locator;
  readonly buttonHeaderAccount: Locator;

  constructor(page: Page) {
    super(page);

    this.buttonHeaderLogin = page.getByText('Log in');
    this.buttonHeaderAccount = page.locator('//span[text() ="Account"]');
  }

  async goto() {
    await this.navigateTo('/');
  }

  async click_ButtonLogin() {
    await this.buttonHeaderLogin.click();
  }

  async click_ButtonAccount() {
    await this.buttonHeaderAccount.click();
  }

  async isVisible_ButtonAccount() {    
    await this.buttonHeaderAccount.isVisible();
  }
}
