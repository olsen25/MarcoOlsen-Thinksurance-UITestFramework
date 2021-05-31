import loginPage from '../pages/login.page';
//data
import loginData from '../data/login.data'

describe('Locked out User Flow', function() {
  it('Load Login Page', function() {
    loginPage
        .open()
        .verifyPage(loginData.pageTitle);
        utilities.takeScreenshot('LoadPage');
  });

  it('Login Process', function() {
    loginPage.loginProcess(loginData.userNameLocked, loginData.password)
    expect(loginPage.verifyLogin()).toEqual(true);
  });

});
