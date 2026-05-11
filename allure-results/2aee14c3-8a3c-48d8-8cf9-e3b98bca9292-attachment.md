# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AddEmpDtl.spec.ts >> AddEmployeeData >> should add employee details successfully
- Location: tests\AddEmpDtl.spec.ts:8:7

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('//button[text()=\'Save\']')
    - locator resolved to <button type="button" ng-show="vm.showFinishButton" class="btn btn-secondary right" ohrm-click-and-wait="vm.onFinish()" ng-class="{disabled: !vm.canSubmitForm}">Save</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
  - element was detached from the DOM, retrying
    - locator resolved to <button type="button" id="modal-save-button" class="btn btn-secondary" ng-click="saveConfiguredWidgets()">Save</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - element is outside of the viewport
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - element is outside of the viewport
    - retrying click action
      - waiting 100ms
    236 × waiting for element to be visible, enabled and stable
        - element is visible, enabled and stable
        - scrolling into view if needed
        - done scrolling
        - element is outside of the viewport
      - retrying click action
        - waiting 500ms
    - waiting for element to be visible, enabled and stable
  - element was detached from the DOM, retrying

```

# Test source

```ts
  1  | import { Page, Locator, expect } from '@playwright/test';
  2  | 
  3  | export class EmployeePage {
  4  |   private page: Page;
  5  | 
  6  |   private firstName: string = "Abdullashaik098";
  7  |   private lastName: string = "shaik09";
  8  | 
  9  |   constructor(page: Page) {
  10 |     this.page = page;
  11 |   }
  12 | 
  13 |   // Locators
  14 |  private addEMPbutton(): Locator {
  15 |   return this.page.locator('#addEmployeeButton');
  16 | }
  17 | 
  18 | private addEMPDtlTab(): Locator {
  19 |   return this.page.locator("//div[@class='modal-content ']");
  20 | }
  21 | 
  22 | private addEMPFirstName(): Locator {
  23 |   return this.page.locator("//input[@placeholder='First Name']");
  24 | }
  25 | 
  26 | private addEMPLastName(): Locator {
  27 |   return this.page.locator("//input[@placeholder='Last Name']");
  28 | }
  29 | 
  30 | private EMPlocationDropdown(): Locator {
  31 |   return this.page.locator("//div[@class='modal-content ']//i[text()='arrow_drop_down']");
  32 | }
  33 | 
  34 | private pageNextButton(): Locator {
  35 |   return this.page.locator("//button[text()='Next']");
  36 | }
  37 | 
  38 | private onboardingDropdown(): Locator {
  39 |   return this.page.locator("//input[@class='select-dropdown']");
  40 | }
  41 | 
  42 | private onboardingDropdownValue(): Locator {
  43 |   return this.page.locator("//span[text()='Onboarding - India']");
  44 | }
  45 | 
  46 | private saveButton(): Locator {
  47 |   return this.page.locator("//button[text()='Save']");
  48 | }
  49 | 
  50 | private personalNextButton(): Locator {
  51 |   return this.page.locator("//button[text()='Next']");
  52 | }
  53 |   // Actions
  54 |   async addEmployee() {
  55 |     const location = "India Office";
  56 | 
  57 |     await this.addEMPbutton().click();
  58 | 
  59 |     // Wait for modal
  60 |     await expect(this.addEMPDtlTab()).toBeVisible();
  61 | 
  62 |     await this.addEMPFirstName().fill(this.firstName);
  63 |     await this.addEMPLastName().fill(this.lastName);
  64 | 
  65 |     // Select location
  66 |     await this.EMPlocationDropdown().click();
  67 |     await this.page.locator(`//span[text()='${location}']`).click();
  68 | 
  69 |     await this.pageNextButton().click();
  70 | 
  71 |     // Playwright auto-waits → no sleep needed
  72 |     await this.personalNextButton().click();
  73 |     await this.personalNextButton().click();
  74 | 
  75 |     // Onboarding selection
  76 |     await this.onboardingDropdown().click();
  77 |     await this.onboardingDropdownValue().click();
  78 | 
> 79 |     await this.saveButton().click();
     |                             ^ Error: locator.click: Target page, context or browser has been closed
  80 |   }
  81 | 
  82 |   async isEmployeeDetailsAdded(): Promise<boolean> {
  83 |     const element = this.page.locator(
  84 |       `//div[contains(text(),'${this.firstName}  ${this.lastName}')]`
  85 |     );
  86 | 
  87 |     return await element.isVisible().catch(() => false);
  88 |   }
  89 | }
```