import { type Locator, type Page } from '@playwright/test';
import { PlaywrightDocsPage } from './playwright-docs.page';

export class PlaywrightHomePage {
  readonly getStartedLink: Locator;

  constructor(readonly page: Page) {
    this.getStartedLink = page.getByRole('link', { name: 'Get started' });
  }

  async goto() {
    await this.page.goto('/');
  }

  async openGetStarted(): Promise<PlaywrightDocsPage> {
    await this.getStartedLink.click();
    return new PlaywrightDocsPage(this.page);
  }
}
