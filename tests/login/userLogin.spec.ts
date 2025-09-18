import { test } from '@playwright/test';
import { LoginPage } from '../../pages/Login.Page';
import { HeaderPage } from '../../pages/header.page';
import { TestDataForLoginTest } from '../../resources/test.data';


test('Successful login redirects to dashboard', async ({ page }) => {
  const headerPage = new HeaderPage(page);
  const loginPage = new LoginPage(page);

  await headerPage.goto();
  await headerPage.click_ButtonLogin();

  await loginPage.login(
    TestDataForLoginTest.usernameCorrect,
    TestDataForLoginTest.passwordCorrect
  );

  await headerPage.isVisible_ButtonAccount();
});

test('Invalid password shows error message', async ({ page }) => {
  const headerPage = new HeaderPage(page);
  const loginPage = new LoginPage(page);

  await headerPage.goto();
  await headerPage.click_ButtonLogin();

  await loginPage.login(
    TestDataForLoginTest.usernameCorrect,
    TestDataForLoginTest.passwordIncorrect
  );

  await loginPage.assertErrorMessage('Oops. Login failed.');
});

test('Invalid username shows error message', async ({ page }) => {
  const headerPage = new HeaderPage(page);
  const loginPage = new LoginPage(page);

  await headerPage.goto();
  await headerPage.click_ButtonLogin();

  await loginPage.login(
    TestDataForLoginTest.usernameIncorrect,
    TestDataForLoginTest.passwordCorrect);

  await loginPage.assertErrorMessage('Oops. Login failed.');
});