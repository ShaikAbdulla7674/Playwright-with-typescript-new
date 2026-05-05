import { test, expect } from '@playwright/test';
import { loginpage } from '../page/Loginpage';

test('Is able to Login', async ({ page }) => {
  await page.goto('https://raajsk1-trials80.orangehrmlive.com');

  const login = new loginpage(page);
  await login.login('Admin', 'BfJXb49w@P');
});

