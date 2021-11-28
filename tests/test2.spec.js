const { HomePage } = require('./home_model');
const { LoginPage } = require('./login_model');

const { test, expect } = require('@playwright/test');
test('test', async ({ page }) => {
  const homepage = new HomePage(page);
  
  await homepage.goto();

  
  // Click a:has-text("Sign up")
  await page.click('a:has-text("Sign up")');
  // Click text=Username: Password: >> input[type="text"]
  await page.click('text=Username: Password: >> input[type="text"]');
  // Fill text=Username: Password: >> input[type="text"]
  await page.fill('text=Username: Password: >> input[type="text"]', 'dfdsjfssldf');
  // Press Enter
  await page.press('text=Username: Password: >> input[type="text"]', 'Enter');
  // Press Tab
  await page.press('text=Username: Password: >> input[type="text"]', 'Tab');
  // Fill input[type="password"]
  await page.fill('input[type="password"]', 'skdgjs;fhefe');
  // Press Enter
  await page.press('input[type="password"]', 'Enter');
  // Click button:has-text("Sign up")
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.click('button:has-text("Sign up")');
  // Click a:has-text("Log in")
  
  homepage.goLogin();
  const loginpage = new LoginPage(page);
  loginpage.doInfo()

  // Click button:has-text("Log in")
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.click('button:has-text("Log in")');
  // Click text=Log in × >> [aria-label="Close"]
  await page.click('text=Log in × >> [aria-label="Close"]');
});
