import { Page, Locator, expect } from '@playwright/test';

export class EmployeePage {
  private page: Page;

  private firstName: string = "Abdullashaik098";
  private lastName: string = "shaik09";

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
 private addEMPbutton(): Locator {
  return this.page.locator('#addEmployeeButton');
}

private addEMPDtlTab(): Locator {
  return this.page.locator("//div[@class='modal-content ']");
}

private addEMPFirstName(): Locator {
  return this.page.locator("//input[@placeholder='First Name']");
}

private addEMPLastName(): Locator {
  return this.page.locator("//input[@placeholder='Last Name']");
}

private EMPlocationDropdown(): Locator {
  return this.page.locator("//div[@class='modal-content ']//i[text()='arrow_drop_down']");
}

private pageNextButton(): Locator {
  return this.page.locator("//button[text()='Next']");
}

private onboardingDropdown(): Locator {
  return this.page.locator("//input[@class='select-dropdown']");
}

private onboardingDropdownValue(): Locator {
  return this.page.locator("//span[text()='Onboarding - India']");
}

private saveButton(): Locator {
  return this.page.locator("//button[text()='Save']");
}

private personalNextButton(): Locator {
  return this.page.locator("//button[text()='Next']");
}
  // Actions
  async addEmployee() {
    const location = "India Office";

    await this.addEMPbutton().click();

    // Wait for modal
    await expect(this.addEMPDtlTab()).toBeVisible();

    await this.addEMPFirstName().fill(this.firstName);
    await this.addEMPLastName().fill(this.lastName);

    // Select location
    await this.EMPlocationDropdown().click();
    await this.page.locator(`//span[text()='${location}']`).click();

    await this.pageNextButton().click();

    // Playwright auto-waits → no sleep needed
    await this.personalNextButton().click();
    await this.personalNextButton().click();

    // Onboarding selection
    await this.onboardingDropdown().click();
    await this.onboardingDropdownValue().click();

    await this.saveButton().click();
  }

  async isEmployeeDetailsAdded(): Promise<boolean> {
    const element = this.page.locator(
      `//div[contains(text(),'${this.firstName}  ${this.lastName}')]`
    );

    return await element.isVisible().catch(() => false);
  }
}