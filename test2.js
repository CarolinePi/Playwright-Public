const { test, expect } = require('@playwright/test');
test('test', async ({ page }) => {
  // Go to https://www.demoblaze.com/
  await page.goto('https://www.demoblaze.com/');
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
  await page.click('a:has-text("Log in")');
  // Click text=Log in × Username: Password: Close Log in >> input[type="text"]
  await page.click('text=Log in × Username: Password: Close Log in >> input[type="text"]');
  // Fill text=Log in × Username: Password: Close Log in >> input[type="text"]
  await page.fill('text=Log in × Username: Password: Close Log in >> input[type="text"]', 'adawdwadad');
  // Click text=Log in × Username: Password: Close Log in >> input[type="password"]
  await page.click('text=Log in × Username: Password: Close Log in >> input[type="password"]');
  // Fill text=Log in × Username: Password: Close Log in >> input[type="password"]
  await page.fill('text=Log in × Username: Password: Close Log in >> input[type="password"]', 'awdadwdawd');
  // Click button:has-text("Log in")
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.click('button:has-text("Log in")');
  // Click text=Log in × >> [aria-label="Close"]
  await page.click('text=Log in × >> [aria-label="Close"]');
});
