import { Page } from '@playwright/test';

export class loginpage{

private page: Page;
     constructor(page: Page) {
    this.page = page;
  }

   // Locators
  private userName() {
    return this.page.locator('input[name="txtUsername"]');
  }
  private password() {
    return this.page.locator('input[name="txtPassword"]');
  }

  private loginBtn() {
    return this.page.locator('button[type="submit"]');
  }

    // Actions

    async login(username: string, password: string) {
    await this.userName().fill(username);
    await this.password().fill(password);
    await this.loginBtn().click();
  }
 
}