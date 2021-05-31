import Page from './page';

class LoginPage extends Page {
    get userField() {return $('#user-name')}
    get passwordField() {return $('#password')}
    get loginBtn() { return $('#login-button')}
    get errorMessage() {return $('#login_button_container > div > form > div.error-message-container.error > h3')}

    open() {
        super.open();
        return this;
      }

    loginProcess(username, password){
        this.userField.setValue(username);
        this.passwordField.setValue(password);
        this.loginBtn.click();
        return this;
    }

    verifyLogin(){
        let pageText = $('body').getText();
        let error = pageText.search(this.errorMessage)
        console.log(error)
        if(error != 0){
            let msg =this.errorMessage.getText()
            return msg
        }
        else{
            return true
        }
    }

    // verifyLogin(){
    //     const pageText = $('body').getText();
    //     const error = pageText.search(this.errorMessage)
    //     if(chai.expect(error).to.be.below(1)){
    //         return 'Login Successful'
    //     }
    //     else{
    //         return 'User Locked. Contact Admin'
    //     }
    // }

}

export default new LoginPage();
