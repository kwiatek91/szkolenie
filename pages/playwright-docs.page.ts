import { type Locator, type Page } from '@playwright/test';

export class PlaywrightDocsPage {
  readonly installationHeading: Locator;

  constructor(readonly page: Page) {
    this.installationHeading = page.getByRole('heading', { name: 'Installation' });
  }
}
