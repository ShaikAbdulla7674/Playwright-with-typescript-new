import { Page, Locator } from '@playwright/test';

export class LeftPanel {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  private leftpanelEMPManagementbutton(){
    // return this.page.locator("//div[@id='left-menu']//span[text()='Employee Management']");
    
  }
  private trainingTab(){
    return this.page.locator("//div[@id='left-menu']//span[text()='Training']");
  }
  // Actions
  async gotoEmployeeManagementPage() {
    //await this.leftpanelEMPManagementbutton().click()
    await this.page.getByRole('link', { name: 'Employee Management' }).click();
  }

  async gotoTraineePage() {
    //await this.trainingTab().click();
   // await this.page.getByRole('link', { name: 'Training' }).click();
    //await this.page.locator('#left-menu >> text=Training').click();
   const trainingLink = this.page.getByRole('link', { name: 'Training' });

   await trainingLink.waitFor({ state: 'visible' });
   await trainingLink.scrollIntoViewIfNeeded();
   await trainingLink.click();
  }
}