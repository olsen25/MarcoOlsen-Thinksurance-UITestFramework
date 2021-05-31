let baseUrl = 'https://www.saucedemo.com'

export default class Page {
  constructor() {
    this.title = 'Sauce Demo';
  }

  open() {
    browser.url(baseUrl);
  }

  verifyPage(title){
    const pageTitle = browser.getTitle();
    chai.expect(pageTitle).equal(title)
  }

}
