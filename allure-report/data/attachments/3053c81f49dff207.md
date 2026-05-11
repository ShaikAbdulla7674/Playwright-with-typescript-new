# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AddEmpDtl.spec.ts >> AddEmployeeData >> should add employee details successfully
- Location: tests\AddEmpDtl.spec.ts:8:7

# Error details

```
Error: locator.click: Error: strict mode violation: locator('//div[@id=\'left-menu\']//span[text()=\'Employee Management\']') resolved to 2 elements:
    1) <span data-position="right" class="menu-title-text tooltipped" data-tooltip="Employee Management" data-tooltip-id="3f4131f4-f33f-ad93-9629-df68b550f0be">Employee Management</span> aka getByRole('link', { name: 'Employee Management' })
    2) <span data-position="right" class="menu-title-text tooltipped" data-tooltip="Employee Management" data-tooltip-id="edcc3547-bc22-dc3a-db7b-2f5519a77e65">Employee Management</span> aka getByText('Employee Management').nth(1)

Call log:
  - waiting for locator('//div[@id=\'left-menu\']//span[text()=\'Employee Management\']')

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e5]:
    - link "oxd_prev" [ref=e9] [cursor=pointer]:
      - /url: javascript:void(0)
    - generic [ref=e10]:
      - generic [ref=e12]:
        - img [ref=e13]
        - generic [ref=e15] [cursor=pointer]: ohrm_settings
      - link "Aaron Hamilton" [ref=e16] [cursor=pointer]:
        - /url: /client/#/pim/my_info
      - generic [ref=e17]: Regional HR Manager
    - generic [ref=e18]:
      - generic [ref=e20] [cursor=pointer]: search
      - combobox [ref=e21]:
        - textbox "Search" [ref=e22]
    - list [ref=e27]:
      - listitem [ref=e28]:
        - link "HR Administration" [ref=e29] [cursor=pointer]:
          - /url: "#/admin/systemUsers"
          - img [ref=e30]
          - generic [ref=e32]: HR Administration
      - listitem [ref=e33]:
        - link "Employee Management" [ref=e34] [cursor=pointer]:
          - /url: "#/pim/employees"
          - img [ref=e35]
          - generic [ref=e48]: Employee Management
      - listitem [ref=e49]:
        - link "Reports and Analytics" [ref=e50] [cursor=pointer]:
          - /url: "#/reports_and_analytics/catalogue"
          - img [ref=e51]
          - generic [ref=e53]: Reports and Analytics
      - listitem [ref=e54]:
        - link "Leave" [ref=e55] [cursor=pointer]:
          - /url: "#/leave/view_leave_list"
          - img [ref=e56]
          - generic [ref=e58]: Leave
      - listitem [ref=e59]:
        - link "Time Tracking" [ref=e60] [cursor=pointer]:
          - /url: "#/time/employee_timesheets"
          - img [ref=e61]
          - generic [ref=e66]: Time Tracking
      - listitem [ref=e67]:
        - link "Attendance" [ref=e68] [cursor=pointer]:
          - /url: "#/report/oxd/persisted/Attendance_Pay_Hours_Report/null/%257B%25220%2522%253A%257B%2522name%2522%253A%2522Attendance%2522%257D%257D//null/0"
          - img [ref=e69]
          - generic [ref=e73]: Attendance
      - listitem [ref=e74]:
        - link "Roster" [ref=e75] [cursor=pointer]:
          - /url: "#/roster/schedule/shift-group-based/weekly"
          - img [ref=e76]
          - generic [ref=e80]: Roster
      - listitem [ref=e81]:
        - link "Recruitment (ATS)" [ref=e82] [cursor=pointer]:
          - /url: "#/recruitment/candidates/"
          - img [ref=e83]
          - generic [ref=e88]: Recruitment (ATS)
      - listitem [ref=e89]:
        - link "Onboarding" [ref=e90] [cursor=pointer]:
          - /url: "#/preboarding/preboardingEmployees"
          - img [ref=e91]
          - generic [ref=e116]: Onboarding
      - listitem [ref=e117]:
        - link "Training" [ref=e118] [cursor=pointer]:
          - /url: /client/#/noncore/training/viewCourseList
          - img [ref=e119]
          - generic [ref=e124]: Training
      - listitem [ref=e125]:
        - link "Goals" [ref=e126] [cursor=pointer]:
          - /url: "#/performance/goals/approved"
          - img [ref=e127]
          - generic [ref=e131]: Goals
      - listitem [ref=e132]:
        - link "Performance" [ref=e133] [cursor=pointer]:
          - /url: "#/performance/appraisals_list"
          - img [ref=e134]
          - generic [ref=e141]: Performance
      - listitem [ref=e142]:
        - link "Career Development" [ref=e143] [cursor=pointer]:
          - /url: "#/succession_and_development/idp_list"
          - img [ref=e144]
          - generic [ref=e151]: Career Development
      - listitem [ref=e152]:
        - link "request desk Request Desk" [ref=e153] [cursor=pointer]:
          - /url: "#/help_desk/submit_request"
          - img "request desk" [ref=e154]
          - generic [ref=e156]: Request Desk
      - listitem [ref=e157]:
        - link "Integrations" [ref=e158] [cursor=pointer]:
          - /url: "#/admin/integration"
          - img [ref=e159]
          - generic [ref=e165]: Integrations
      - listitem [ref=e166]:
        - link "Surveys" [ref=e167] [cursor=pointer]:
          - /url: "#/app/1/3/list"
          - img [ref=e168]
          - generic [ref=e174]: Surveys
      - listitem [ref=e175]:
        - link "Employee Voice" [ref=e176] [cursor=pointer]:
          - /url: "#/app/2/11/myList"
          - img [ref=e177]
          - generic [ref=e183]: Employee Voice
      - listitem [ref=e184]:
        - link "Discipline" [ref=e185] [cursor=pointer]:
          - /url: "#/app/3/28/myList"
          - img [ref=e186]
          - generic [ref=e190]: Discipline
    - generic [ref=e192] [cursor=pointer]:
      - generic [ref=e193]: keyboard_arrow_down
      - generic [ref=e194]: More
  - generic [ref=e195]:
    - banner [ref=e197]:
      - navigation [ref=e198]:
        - generic [ref=e200]:
          - list [ref=e201]:
            - listitem
            - listitem [ref=e202]:
              - generic [ref=e203]: Employee Management
          - list [ref=e204]:
            - listitem [ref=e205]:
              - link "oxd_logout_round Log Out" [ref=e206] [cursor=pointer]:
                - /url: /auth/logout
                - generic [ref=e207]: oxd_logout_round
                - generic [ref=e208]: Log Out
              - link "arrow_drop_down" [ref=e210] [cursor=pointer]:
                - /url: javascript:void(0)
                - generic [ref=e211]: arrow_drop_down
            - listitem
        - generic [ref=e213]:
          - generic [ref=e214]:
            - link "oxd_home_menu" [ref=e217] [cursor=pointer]:
              - /url: "#/dashboard"
            - generic [ref=e218]:
              - link "Employee List" [ref=e221] [cursor=pointer]:
                - /url: "#/pim/employees"
              - link "My Info" [ref=e224] [cursor=pointer]:
                - /url: "#/pim/my_info"
              - link "Directory" [ref=e227] [cursor=pointer]:
                - /url: "#/corporate_directory/directory"
              - link "Buzz" [ref=e230] [cursor=pointer]:
                - /url: /client/#/buzz/home
              - generic [ref=e233] [cursor=pointer]: Announcements oxd_menu_down
              - generic [ref=e236] [cursor=pointer]: Organization Chart oxd_menu_down
              - generic [ref=e239] [cursor=pointer]: Competencies oxd_menu_down
              - generic [ref=e242] [cursor=pointer]: Qualifications oxd_menu_down
              - generic [ref=e245] [cursor=pointer]: Manage Data oxd_menu_down
              - generic [ref=e248] [cursor=pointer]: Configurations oxd_menu_down
              - link "Nationalities" [ref=e251] [cursor=pointer]:
                - /url: "#/admin/nationalities"
              - generic [ref=e254] [cursor=pointer]: Assets oxd_menu_down
              - link "iCalendar Feeds" [ref=e257] [cursor=pointer]:
                - /url: "#/pim/icalendar_feed"
              - link "Dashboard" [ref=e260] [cursor=pointer]:
                - /url: "#/dashboard"
              - generic [ref=e263] [cursor=pointer]: Discipline oxd_menu_down
              - generic [ref=e266] [cursor=pointer]: Purge Records oxd_menu_down
          - list [ref=e268]:
            - listitem [ref=e269]:
              - generic [ref=e272] [cursor=pointer]: ohrm_help
            - listitem [ref=e273]:
              - generic [ref=e277] [cursor=pointer]: oxd_shortcut
    - generic [ref=e282]:
      - generic [ref=e283]:
        - generic [ref=e284]: widgets
        - generic [ref=e285]:
          - generic [ref=e286]: Dashboard
          - generic [ref=e287]: Configuration
      - generic [ref=e288]:
        - list [ref=e289]:
          - listitem [ref=e290]:
            - generic [ref=e291] [cursor=pointer]: Admin Configurations
          - listitem [ref=e292]:
            - generic [ref=e293] [cursor=pointer]: My Widgets
        - generic [ref=e296]:
          - button "Cancel" [ref=e297] [cursor=pointer]
          - button "Save" [ref=e298] [cursor=pointer]
      - generic [ref=e301] [cursor=pointer]: ohrm_settings
    - generic [ref=e303]:
      - text: OrangeHRM 8.0
      - text: © 2005 - 2026
      - link "OrangeHRM, Inc" [ref=e304] [cursor=pointer]:
        - /url: http://www.orangehrm.com
      - text: . All rights reserved.
```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class LeftPanel {
  4  |   private page: Page;
  5  | 
  6  |   constructor(page: Page) {
  7  |     this.page = page;
  8  |   }
  9  | 
  10 |   // Locators
  11 |   private leftpanelEMPManagementbutton(){
  12 |     // return this.page.locator("//div[@id='left-menu']//span[text()='Employee Management']");
  13 |     
  14 |   }
  15 |   private trainingTab(){
  16 |     return this.page.locator("//div[@id='left-menu']//span[text()='Training']");
  17 |   }
  18 |   // Actions
> 19 |   async gotoEmployeeManagementPage() {
     |                                               ^ Error: locator.click: Error: strict mode violation: locator('//div[@id=\'left-menu\']//span[text()=\'Employee Management\']') resolved to 2 elements:
  20 |     //await this.leftpanelEMPManagementbutton().click()
  21 |     await this.page.getByRole('link', { name: 'Employee Management' }).click();
  22 |   }
  23 | 
  24 |   async gotoTraineePage() {
  25 |     //await this.trainingTab().click();
  26 |    // await this.page.getByRole('link', { name: 'Training' }).click();
  27 |     //await this.page.locator('#left-menu >> text=Training').click();
  28 |    const trainingLink = this.page.getByRole('link', { name: 'Training' });
  29 | 
  30 |    await trainingLink.waitFor({ state: 'visible' });
  31 |    await trainingLink.scrollIntoViewIfNeeded();
  32 |    await trainingLink.click();
  33 |   }
  34 | }
```