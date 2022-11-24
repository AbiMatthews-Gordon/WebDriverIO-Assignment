/*
SIGNUP
-----
*/

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputEmail () {
        return $('#email');
    }

    get emailError () {
        return $('#email-error');
    }

    get inputPassword () {
        return $('#pass');
    }

    get passwordError () {
        return $('#pass-error');
    }

    get btnSignIn () {
        return $('#send2');
    }

    get loginConfirmationMessage (){
        return $('div[role=alert]');
    }

 
    async login (email, password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSignIn.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('customer/account/login');
    }
}

module.exports = new LoginPage();
