import { test, expect } from '@playwright/test';

const openLoginPage = async (page) => {
  await page.goto('https://automationpratice.com.br/login')
}

const sucessfulLogin = async (page) => {
  await page.locator('#user').fill('teste@teste.com')
  await page.locator('#password').fill('123456')
  await page.getByRole('button', { name: 'login' }).click()
}

const validateSucessfulLogin = async (page) => {
  await expect(page.getByRole('heading', { name: 'Login realizado' })).toBeVisible()
  await page.getByText('Olá, teste@teste.com').click()
}

const loginEmptyEmail = async (page) => {

  await page.locator('#password').fill('123456')
  await page.getByRole('button', { name: 'login' }).click()
}

const loginInvalidEmail = async (page) => {

  await page.locator('#user').fill('teste.com')
  await page.getByRole('button', { name: 'login' }).click()
}

const validadeErrorLoginMessage = async (page) => {
  await expect(page.getByText('E-mail inválido.')).toBeVisible()
}

const validadeErrorPasswordMessage = async (page) => {
  await expect(page.getByText('Senha inválida.')).toBeVisible()
}

const loginEmptyPassword = async (page) => {
  await page.locator('#user').fill('teste@teste.com')
  await page.getByRole('button', { name: 'login' }).click()
}

const loginInvalidPassword = async (page) => {
  await page.locator('#user').fill('teste@teste.com')
  await page.locator('#password').fill('123')
  await page.getByRole('button', { name: 'login' }).click()
}


module.exports = {
  openLoginPage,
  sucessfulLogin,
  validateSucessfulLogin,
  loginEmptyEmail,
  validadeErrorLoginMessage,
  loginInvalidEmail,
  validadeErrorPasswordMessage,
  loginEmptyPassword,
  loginInvalidPassword
}