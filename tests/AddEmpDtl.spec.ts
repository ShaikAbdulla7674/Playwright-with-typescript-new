import { test, expect } from '@playwright/test';
import { EmployeePage } from '../page/Addemployee';
import { LeftPanel } from '../page/Leftpanel';
import { allure } from 'allure-playwright';
import { loginpage } from '../page/Loginpage';
test.describe('AddEmployeeData', () => {

  test('should add employee details successfully', async ({ page }) => {
    
      await allure.step('Open application', async () => {
        await page.goto('https://raajsk1-trials80.orangehrmlive.com');
      });
    
      await allure.step('Login to application', async () => {
        const login = new loginpage(page);
        await login.login('Admin', 'BfJXb49w@P');
      });
    

    const leftpnpg = new LeftPanel(page);
    const emppage = new EmployeePage(page);

    await test.step('Navigate to Employee Management', async () => {
      await leftpnpg.gotoEmployeeManagementPage();
    });

    await test.step('Add employee details', async () => {
      await emppage.addEmployee();
    });
await test.step('Again Navigate to Employee Management', async () => {
      await leftpnpg.gotoEmployeeManagementPage();
    });
    await test.step('Verify employee added', async () => {
      await expect(
        page.locator(`//div[contains(text(),'${emppage.isEmployeeDetailsAdded()}')]`)
      ).toBeVisible();
    });

  });

});