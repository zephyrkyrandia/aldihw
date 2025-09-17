// pages/LoginPage.ts
import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from '../core/base.page';

export class LoginPage extends BasePage {
  readonly editfieldUsername: Locator;
  readonly editfieldPassword: Locator;
  readonly buttonLogin: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);

    this.editfieldUsername = page.getByPlaceholder('Your email address');
    this.editfieldPassword = page.getByPlaceholder('Your password');
    this.buttonLogin = page.locator('//button[@title="Log In"]');
    this.errorMessage = page.getByText('Oops. Login failed.');
  }

  async goto() {
    //await this.navigateTo('/');
  }

  async login(username: string, password: string) {
    await this.editfieldUsername.fill(username);
    await this.editfieldPassword.fill(password);
    await this.buttonLogin.click();
  }

  async assertErrorMessage(expected: string) {
    await this.waitForElement(this.errorMessage);
    const actual = await this.getText(this.errorMessage);
    expect(actual!.trim()).toContain(expected);
  }
}
