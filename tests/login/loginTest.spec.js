import { test } from '@playwright/test';
const { openLoginPage, sucessfulLogin, validateSucessfulLogin, loginEmptyEmail, validadeErrorLoginMessage, loginInvalidEmail, validadeErrorPasswordMessage, loginEmptyPassword, loginInvalidPassword} = require('./loginPage');


test('Sucessful Login', async ({ page }) => {
  await openLoginPage(page);
  await sucessfulLogin(page);
  await validateSucessfulLogin(page);
});

test('Login with empty e-mail', async ({ page }) => {
  await openLoginPage(page);
  await loginEmptyEmail(page);
  await validadeErrorLoginMessage(page);
});

test('Login with invalid email', async ({ page }) => {
  await openLoginPage(page);
  await loginInvalidEmail(page);
  await validadeErrorLoginMessage(page);
});

test ('Login with empty password', async ({ page }) => {
  await openLoginPage(page);
  await loginEmptyPassword(page);
  await validadeErrorPasswordMessage(page);
});

test ('Login with invalid password', async ({ page }) => {
  await openLoginPage(page);
  await loginInvalidPassword(page);
  await validadeErrorPasswordMessage(page);
}); 



