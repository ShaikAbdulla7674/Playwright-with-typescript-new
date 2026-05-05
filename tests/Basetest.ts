import { chromium, Browser, Page } from '@playwright/test';

export class BaseTest {
  public browser!: Browser;
  public page!: Page;

  async setup() {
    this.browser = await chromium.launch({ headless: false });
    const context = await this.browser.newContext();
    this.page = await context.newPage();

    await this.page.goto('https://raajsk1-trials80.orangehrmlive.com');
  }

  async teardown() {
    //const cmnpg = new CommonClass(this.page);
  //  await cmnpg.logout();

    await this.browser.close();
  }
}