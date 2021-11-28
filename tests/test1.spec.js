const { HomePage } = require('./home_model');



const { test, expect } = require('@playwright/test');
test('test', async ({ page }) => {
  // Go to https://www.demoblaze.com/
  
  const homepage = new HomePage(page);
  
  await homepage.goto();
  
  await homepage.getStarted();

  await expect(await page.screenshot()).toMatchSnapshot('screenshot.png');

  await homepage.expectURL('https://www.demoblaze.com/#');

  // Click text=Sony vaio i5
  await homepage.goLaptop()
  
  await homepage.expectURL('https://www.demoblaze.com/prod.html?idp_=8');

  await homepage.expectDial();
  await homepage.addCart();

  await homepage.expectURL('https://www.demoblaze.com/prod.html?idp_=8#');
});
