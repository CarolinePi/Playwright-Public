Record




Target:

Playwright Test

const { test, expect } = require('@playwright/test');
test('test', async ({ page }) => {
  // Go to https://www.demoblaze.com/
  await page.goto('https://www.demoblaze.com/');
  // Click text=Cart
  await page.click('text=Cart');
  await expect(page).toHaveURL('https://www.demoblaze.com/cart.html');
  // Click button:has-text("Place Order")
  await page.click('button:has-text("Place Order")');
  // Click text=Total: Name: Country: City: Credit card: Month: Year: >> input[type="text"]
  await page.click('text=Total: Name: Country: City: Credit card: Month: Year: >> input[type="text"]');
  // Fill text=Total: Name: Country: City: Credit card: Month: Year: >> input[type="text"]
  await page.fill('text=Total: Name: Country: City: Credit card: Month: Year: >> input[type="text"]', 'sdsadsad');
  // Fill #country
  await page.fill('#country', 'd');
  // Click #country
  await page.click('#country');
  // Fill #country
  await page.fill('#country', 'dasdsadad');
  // Click #city
  await page.click('#city');
  // Fill #city
  await page.fill('#city', 'dasd');
  // Click #card
  await page.click('#card');
  // Fill #card
  await page.fill('#card', 'dsad');
  // Fill #month
  await page.fill('#month', 'a');
  // Click #month
  await page.click('#month');
  // Fill #month
  await page.fill('#month', 'asdasd');
  // Click #year
  await page.click('#year');
  // Fill #year
  await page.fill('#year', 'as');
  // Double click #year
  await page.dblclick('#year');
  // Fill #year
  await page.fill('#year', 'asdasdasd');
  // Click text=Purchase
  await page.click('text=Purchase');
  // Click text=OK
  await page.click('text=OK');
  await expect(page).toHaveURL('https://www.demoblaze.com/index.html');
});
