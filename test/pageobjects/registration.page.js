/*
SIGNUP
-----

firstname selector - #firstname
firstname error selector - #firstname-error ("This is a required field.")

lastname selector - #lastname
lastname error selector - #lastname-error ("This is a required field.")

email selector - #email_address
email error selector - #email_address-error -This is a required field.
email error selector - #email_address-error - Please enter a valid email address (Ex: johndoe@domain.com).

password selector - #password
password error selector - #password-error - This is a required field.
password error selector - #password-error - Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.

password confirmation selector - #password-confirmation
password error selector - #password-confirmation-error  - This is a required field.")
password error selector - #password-confirmation-error  - Please enter the same value again.

button create an account selector - button[type = "submit"][title ="Create an Account"]

registration confirmation alert selector - div[role="alert"]
registration confirmation message - Thank you for registering with Fake Online Clothing Store.
registration confirmation url - https://magento.softwaretestingboard.com/customer/account/

welcome Jane Doe selector - .panel.header .greet.welcome
welcome Jane Doe message - .panel.header .greet.welcome .logged-in
***********************************************************************************************



*/




const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegistrationPage extends Page {
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

    get registrationConfirmationMessage (){
        return $('div[role=alert]');
    }

 

    async registration (firstname, lastname, email, password, passwordConfirmation) {
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

module.exports = new RegistrationPage();
