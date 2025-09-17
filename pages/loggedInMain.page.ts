// pages/LoginPage.ts
import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from '../core/base.page';

export class LoggedInMainPage extends BasePage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);

    this.usernameInput = page.locator('#username'); // Update as needed
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login');
    this.errorMessage = page.locator('.error-message'); // Example error message
  }

  async goto() {
    await this.navigateTo('/');
  }

  
}
