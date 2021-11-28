const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {

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
  
  async doInfo() {
      // Click text=Log in × Username: Password: Close Log in >> input[type="text"]
    await this.page.click('text=Log in × Username: Password: Close Log in >> input[type="text"]');
    // Fill text=Log in × Username: Password: Close Log in >> input[type="text"]
    await this.page.fill('text=Log in × Username: Password: Close Log in >> input[type="text"]', 'adawdwadad');
    // Click text=Log in × Username: Password: Close Log in >> input[type="password"]
    await this.page.click('text=Log in × Username: Password: Close Log in >> input[type="password"]');
    // Fill text=Log in × Username: Password: Close Log in >> input[type="password"]
    await this.page.fill('text=Log in × Username: Password: Close Log in >> input[type="password"]', 'awdadwdawd');


  }
}
