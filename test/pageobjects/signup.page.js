const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SignupPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputFirstname () {
        return $('#firstname');
    }

    get firstnameError () {
        return $('#firstname-error');
    }

    get inputLastname () {
        return $('#lastname');
    }

    get lastnameError () {
        return $('#lastname-error');
    }

    get inputEmail () {
        return $('#email_address');
    }

    get emailError () {
        return $('#email_address-error');
    }

    get inputPassword () {
        return $('#password');
    }

    get passwordError () {
        return $('#password-error');
    }

    get inputPasswordConfirmation () {
        return $('#password-confirmation');
    }

    get passwordConfirmationError () {
        return $('#password-confirmation-error');
    }

    get btnCreateAnAccount () {
        return $('button[type = "submit"][title ="Create an Account"]');
    }

    get signupConfirmationMessage (){
        return $('div[role=alert]');
    }
 
    async signup (firstname, lastname, email, password, passwordConfirmation) {
        await this.inputFirstname.setValue(firstname);
        await this.inputLastname.setValue(lastname);
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.inputPasswordConfirmation.setValue(passwordConfirmation);
        await this.btnCreateAnAccount.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('customer/account/create');
    }
}

module.exports = new SignupPage();
