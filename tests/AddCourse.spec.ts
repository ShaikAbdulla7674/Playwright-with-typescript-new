import { test, expect } from '@playwright/test';
import { TrainingPage } from '../page/TrainingPage';
import { loginpage } from '../page/Loginpage';
import { LeftPanel } from '../page/Leftpanel';
import { allure } from 'allure-playwright';

test('Add Course Test', async ({ page }) => {

  // Allure metadata
  allure.feature('Training');
  allure.story('Add Course');
  allure.severity('critical');

  await allure.step('Open application', async () => {
    await page.goto('https://raajsk1-trials80.orangehrmlive.com');
  });

  await allure.step('Login to application', async () => {
    const login = new loginpage(page);
    await login.login('Admin', 'BfJXb49w@P');
  });

  await allure.step('Navigate to Training page', async () => {
    const leftpane = new LeftPanel(page);
    await leftpane.gotoTraineePage(); // ❗ added await (important)
  });

  const training = new TrainingPage(page);

  await allure.step('Add new course', async () => {
    await training.addCourse();
  });

  await allure.step('Verify course is added', async () => {
    const result = await training.isCourseAdded();
    expect(result).toBeTruthy();
  });

  // 📸 Attach screenshot to Allure
  const screenshot = await page.screenshot();
  await allure.attachment('Final Screenshot', screenshot, 'image/png');
});