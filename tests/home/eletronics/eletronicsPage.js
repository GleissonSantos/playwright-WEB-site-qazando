import { test, expect } from '@playwright/test';

const openEletronicsPage = async (page) => {
    await page.goto('https://automationpratice.com.br/electronics')
}

const validadeNewsletterSuccessMessage = async (page) => {
    //await page.getByRole('textbox', { name: 'Your Mail' }).click()
    await page.getByRole('textbox', { name: 'Your Mail' }).fill('teste@teste.com')
    const button = await page.getByRole('button', { name: 'Send Mail' })
    await button.scrollIntoViewIfNeeded()
    await button.click()
    await expect(page.getByRole('heading', { name: 'Success' })).toBeVisible()
    await page.getByRole('button', { name: 'OK' }).click()
}

const scrollToNewsletterSection = async (page) => {
    const newslatter = await page.waitForSelector('text=NEWSLETTER')
    await newslatter.scrollIntoViewIfNeeded()
}

module.exports = {
    openEletronicsPage,
    validadeNewsletterSuccessMessage,
    scrollToNewsletterSection
}   