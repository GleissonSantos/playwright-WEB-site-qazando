import { test } from '@playwright/test';
const { openEletronicsPage, validadeNewsletterSuccessMessage, scrollToNewsletterSection } = require('./eletronicsPage');

test('Validating the functionality of the Newsletter on the Electronics page', async ({ page }) => {
    await openEletronicsPage(page);
    await validadeNewsletterSuccessMessage(page);
});

test('Scrolling the screen to a specific selector on the Electronics page', async ({ page }) => {
    await openEletronicsPage(page);
    await scrollToNewsletterSection(page);
});