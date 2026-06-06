import { test, expect } from '@playwright/test';

test('homepage loads', async ({ page }) => {
  await page.goto('https://playwright.dev');
  //await expect(page).toHaveTitle(/Playwright/);
  await expect(1).toBe(2);
});