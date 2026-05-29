import { test, expect } from '@playwright/test';
import { PlaywrightHomePage } from '../pages/playwright-home.page';

test('displays Playwright in the page title', async ({ page }) => {
  const homePage = new PlaywrightHomePage(page);

  await test.step('open the home page', async () => {
    await homePage.goto();
  });

  await expect(page).toHaveTitle(/Playwright/);
});

test('navigates to installation docs from Get started', async ({ page }) => {
  const homePage = new PlaywrightHomePage(page);

  await test.step('open the home page', async () => {
    await homePage.goto();
  });

  const docsPage = await test.step('follow Get started', async () => {
    return homePage.openGetStarted();
  });

  await expect(docsPage.installationHeading).toBeVisible();
});
