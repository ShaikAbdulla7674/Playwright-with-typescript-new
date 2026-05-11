import { Page, Locator, expect } from '@playwright/test';
export class CommonClass {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async autoCompleteDropdown(locator: Locator, text: string) {
    // Click and type
    await locator.click();
    await locator.fill(text);

    // Dynamic option locator
    const option = this.page.locator(`//div//strong[text()='${text}']`);

    // Wait for option and click
    await option.waitFor({ state: 'visible' });
    await option.click();
  }
}