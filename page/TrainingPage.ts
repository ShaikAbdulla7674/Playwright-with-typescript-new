import { Locator, Page, expect } from '@playwright/test';

export class TrainingPage {
  private page: Page;
  private titleName: string = "Artificial tool";
  private coordinatorName: string = "Odis Adalwin";

  constructor(page: Page) {
    this.page = page;
  }
 //Locators 
  private addCourseButton():Locator { return this.page.locator("//div[@id='list_item_add']");}
  private courseTitle(): Locator { return this.page.locator("//input[@id='addCourse_title']"); } 
  private coordinator(): Locator { return this.page.locator("//input[@id='addCourse_coordinator_empName']"); }
  private courseSaveButton():Locator 
  { 
    return this.page.locator("//a[@id='btnSaveCourse']"); 
  }
  private frame() {
    return this.page.frameLocator("iframe");
  }

  async addCourse() {
    const frame = this.frame();

    // Wait for page ready
    await frame.locator('#preloader').waitFor({ state: 'hidden' });
   
    // Click Add Course
    const addBtn = frame.locator(this.addCourseButton());
    await addBtn.waitFor({ state: 'visible', timeout: 20000 });
    await expect(addBtn).toBeVisible();
    await addBtn.click();

    // Fill Title
    const tittletxtbox=frame.locator(this.courseTitle());
     await tittletxtbox.click();
    await tittletxtbox.fill(this.titleName);
    // Fill Coordinator (IMPORTANT: select from dropdown)
    const coordinator = frame.locator(this.coordinator());
    await coordinator.click();
    await coordinator.fill(this.coordinatorName);
    await frame.getByText(this.coordinatorName, { exact: true }).click();

    // Click Save
    const saveBtn = frame.locator(this.courseSaveButton());
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