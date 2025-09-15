// @ts-check
import { test, expect } from '@playwright/test';
import { beforeEach } from 'node:test';

test.beforeEach(async ({ page }) => {
  // Go to the starting url before each test.
  await page.goto('https://automationpratice.com.br/')
})

test('Successful login with a specific resolution', async ({ page }) => {

  await page.getByRole('link', { name: ' Login' }).click()
  await page.locator('#user').click()
  await page.locator('#user').fill('teste@teste.com')
  await page.locator('#password').click()
  await page.locator('#password').fill('123456')
  await page.getByRole('button', { name: 'login' }).click()
  await page.getByRole('heading', { name: 'Login realizado' }).click()
  await page.getByText('Olá, teste@teste.com').click()
  await page.getByRole('button', { name: 'OK' }).click()
  await expect(page.getByRole('heading', { name: 'Total Orders' })).toBeVisible()
});


test('Validando funcionamento da Newslatter', async ({ page }) => {

  await page.getByRole('textbox', { name: 'Your Mail' }).click()
  await page.getByRole('textbox', { name: 'Your Mail' }).fill('teste@teste.com')
  const button = await page.getByRole('button', { name: 'Send Mail' })
  await button.scrollIntoViewIfNeeded()
  await button.click()
  await expect(page.getByRole('heading',{ name: 'Success'})).toBeVisible()
  await page.getByRole('button', { name: 'OK' }).click()

  });
  

  test('Escrollando a tela para um seletor específico', async ({ page }) => {

  const newslatter = await page.waitForSelector('text=NEWSLETTER')
  await newslatter.scrollIntoViewIfNeeded()

  });

