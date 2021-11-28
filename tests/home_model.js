const { expect } = require('@playwright/test');

exports.HomePage = class HomePage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://www.demoblaze.com/');
  }

  async getStarted() {
    await this.page.click('text=Laptops');
  }
  
  async goLaptop() {
    await this.page.click('text=Sony vaio i5');
  }
  
  async goLogin() {
    await this.page.click('a:has-text("Log in")');
  }
  
  
  async addCart() {
    await this.page.click('text=Add to cart');
  }
  
  
  async expectDial() {
    // Click text=Add to cart
    this.page.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });
  }
  
  async expectURL(url) {
    await expect(this.page).toHaveURL(url);
  }

}
