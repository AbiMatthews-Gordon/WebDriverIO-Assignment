const registrationPage = require('../pageobjects/registration.page');
const LoginPage = require('../pageobjects/registration.page');
const SecurePage = require('../pageobjects/secure.page');

describe('My Login application', () => {

    // it('should login with valid credentials', async () => {
    //     await LoginPage.open();

    //     await LoginPage.login('tomsmith', 'SuperSecretPassword!');
    //     await expect(SecurePage.flashAlert).toBeExisting();
    //     await expect(SecurePage.flashAlert).toHaveTextContaining(
    //         'You logged into a secure area!');
    // });

    it('Should check that error message is on all fields prior to filling out form', async () => {
        
        //open register page
        await registrationPage.open();

        //submit form
        await registrationPage.btnCreateAnAccount.click();

        //check that the firstname error is visible
        await expect(registrationPage.firstnameError).toBeExisting();
        //check that firstname error contians text "This is a required field."
        await expect(registrationPage.firstnameError).toHaveTextContaining(
            "This is a required field.");

        //check that lastname error is visible
        await expect(registrationPage.lastnameError).toBeExisting();
        //check that lastname error contians text "This is a required field."
        await expect(registrationPage.lastnameError).toHaveTextContaining(
            "This is a required field.");

        //check that email error is visible
        await expect(registrationPage.emailError).toBeExisting();
        //check that email error contians text "This is a required field."
        await expect(registrationPage.emailError).toHaveTextContaining(
            "This is a required field.");

        //check that password error is visible
        await expect(registrationPage.passwordError).toBeExisting();
        //check that password error contians text "This is a required field."
        await expect(registrationPage.passwordError).toHaveTextContaining(
            "This is a required field.");

        //check that password confirmation error is visible
        await expect(registrationPage.passwordConfirmationError).toBeExisting();
        //check that password confirmation error contians text "This is a required field."
        await expect(registrationPage.passwordConfirmationError).toHaveTextContaining(
            "This is a required field.");
    });

    //checking invalid that an invalid email produces the below error message 
    it('Should not register with invalid email', async () => {

        //open register page
        await registrationPage.open();

        await registrationPage.registration('Jane', 'Doe', 'tree');
        await expect(registrationPage.emailError).toBeExisting();
        await expect(registrationPage.emailError).toHaveTextContaining(
            'Please enter a valid email address (Ex: johndoe@domain.com)');
    });

    //checking invalid that an invalid password length produces the below error message 
    it('Should not register with invalid password length', async () => {

        //open register page
        await registrationPage.open();

        await registrationPage.registration('Jane', 'Doe', 'server@email.com', 'p@');
        await expect(registrationPage.passwordError).toBeExisting();
        await expect(registrationPage.passwordError).toHaveTextContaining(
            'Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.');
    });

    //checking invalid that an invalid password confirmation produces the below error message 
    it('Should not register if confirmation password does not match password', async () => {

        //open register page
        await registrationPage.open();

        await registrationPage.registration('Jane', 'Doe', 'server@email.com', 'p@ssword1', 'p@');
        await expect(registrationPage.passwordConfirmationError).toBeExisting();
        await expect(registrationPage.passwordConfirmationError).toHaveTextContaining(
            'Please enter the same value again.');
    });

    //creating the account
    it('Should create an account', async () => {

        //open the page
        await registrationPage.open();

        //set values in fields
        //click create an account button
        await registrationPage.registration('Jane', 'Doe', 'email@email.com', 'p@ssword1', 'p@ssword1');

        //check redirection page

        //check creation message
        await expect(registrationPage.registrationConfirmationMessage).toHaveTextContaining(
        'Thank you for registering with Fake Online Clothing Store');

    });

});


