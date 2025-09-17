import { test } from '@playwright/test';
import { LoginPage } from '../../pages/Login.Page';
import { HeaderPage } from '../../pages/header.page';


test('Successful login redirects to dashboard', async ({ page }) => {
  const headerPage = new HeaderPage(page);
  const loginPage = new LoginPage(page);

  await headerPage.goto();
  await headerPage.click_ButtonLogin();

  await loginPage.login('zephyrkyrandia@outlook.com', 'Zoldfoki1!');

  await headerPage.isVisible_ButtonAccount();
});

test('Invalid password shows error message', async ({ page }) => {
  const headerPage = new HeaderPage(page);
  const loginPage = new LoginPage(page);

  await headerPage.goto();
  await headerPage.click_ButtonLogin();

  await loginPage.login('zephyrkyrandia@outlook.com', 'WRONGZoldfoki1!');

  await loginPage.assertErrorMessage('Oops. Login failed.');
});

test('Invalid username shows error message', async ({ page }) => {
  const headerPage = new HeaderPage(page);
  const loginPage = new LoginPage(page);

  await headerPage.goto();
  await headerPage.click_ButtonLogin();

  await loginPage.login('WRONGzephyrkyrandia@outlook.com', 'Zoldfoki1!');

  await loginPage.assertErrorMessage('Oops. Login failed.');
});