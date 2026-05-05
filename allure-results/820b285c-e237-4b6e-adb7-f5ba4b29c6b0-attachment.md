# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AddCourse.spec.ts >> Add Course Test
- Location: tests\AddCourse.spec.ts:7:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('iframe').contentFrame().locator('#list_item_add')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('iframe').contentFrame().locator('#list_item_add')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e4]:
    - text: oxd_prev
    - iframe [ref=e5]
  - img [ref=e7]
```

# Test source

```ts
  1  | import { Page, expect } from '@playwright/test';
  2  | 
  3  | export class TrainingPage {
  4  |   private page: Page;
  5  |   private titleName: string = "Artificial tool";
  6  |   private coordinatorName: string = "Odis Adalwin";
  7  | 
  8  |   constructor(page: Page) {
  9  |     this.page = page;
  10 |   }
  11 | 
  12 |   private frame() {
  13 |     return this.page.frameLocator("iframe");
  14 |   }
  15 | 
  16 |   async addCourse() {
  17 |     const frame = this.frame();
  18 | 
  19 |     // Wait for page ready
  20 |     await frame.locator('#preloader').waitFor({ state: 'hidden' });
  21 | 
  22 |     // Click Add Course
  23 |     const addBtn = frame.locator('#list_item_add');
> 24 |     await expect(addBtn).toBeVisible();
     |                          ^ Error: expect(locator).toBeVisible() failed
  25 |     await addBtn.click();
  26 | 
  27 |     // Fill Title
  28 |     await frame.getByLabel('Title *').fill(this.titleName);
  29 | 
  30 |     // Fill Coordinator (IMPORTANT: select from dropdown)
  31 |     const coordinator = frame.getByPlaceholder('Type for hints...');
  32 |     await coordinator.fill(this.coordinatorName);
  33 |     await frame.getByText(this.coordinatorName, { exact: true }).click();
  34 | 
  35 |     // Click Save
  36 |     const saveBtn = frame.locator('#btnSaveCourse');
  37 |     await expect(saveBtn).toBeEnabled();
  38 | 
  39 |     await saveBtn.click();
  40 | 
  41 |     // Wait for navigation to course list
  42 |     await frame.getByText('Courses').waitFor();
  43 |   }
  44 | 
  45 |   async isCourseAdded(): Promise<boolean> {
  46 |     const frame = this.frame();
  47 | 
  48 |     const titleLocator = frame.getByText(this.titleName, { exact: true });
  49 |     const coordLocator = frame.getByText(this.coordinatorName, { exact: true });
  50 | 
  51 |     await expect(titleLocator).toBeVisible({ timeout: 10000 });
  52 |     await expect(coordLocator).toBeVisible({ timeout: 10000 });
  53 | 
  54 |     return true;
  55 |   }
  56 | }
```