import { Page, expect } from '@playwright/test';

export class TrainingPage {
  private page: Page;
  private titleName: string = "Artificial tool";
  private coordinatorName: string = "Odis Adalwin";

  constructor(page: Page) {
    this.page = page;
  }

  private frame() {
    return this.page.frameLocator("iframe");
  }

  async addCourse() {
    const frame = this.frame();

    // Wait for page ready
    await frame.locator('#preloader').waitFor({ state: 'hidden' });
   
    // Click Add Course
    const addBtn = frame.locator('#list_item_add');
    await expect(addBtn).toBeVisible();
    await addBtn.waitFor({ state: 'visible', timeout: 20000 });
    await addBtn.click();

    // Fill Title
    const tittletxtbox=frame.getByLabel('Title *');
    await tittletxtbox.waitFor({ state: 'visible', timeout: 20000 });
    await tittletxtbox.fill(this.titleName);
    // Fill Coordinator (IMPORTANT: select from dropdown)
    const coordinator = frame.getByPlaceholder('Type for hints...');
    await coordinator.fill(this.coordinatorName);
    await frame.getByText(this.coordinatorName, { exact: true }).click();

    // Click Save
    const saveBtn = frame.locator('#btnSaveCourse');
    await expect(saveBtn).toBeEnabled();

    await saveBtn.click();

    // Wait for navigation to course list
    await frame.getByText('Courses').waitFor();
  }

  async isCourseAdded(): Promise<boolean> {
    const frame = this.frame();

    const titleLocator = frame.getByText(this.titleName, { exact: true });
    const coordLocator = frame.getByText(this.coordinatorName, { exact: true });

    await expect(titleLocator).toBeVisible({ timeout: 10000 });
    await expect(coordLocator).toBeVisible({ timeout: 10000 });

    return true;
  }
}