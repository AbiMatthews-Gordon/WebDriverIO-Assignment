const signupPage = require('../pageobjects/signup.page');
const testUser = require('./test.data');
const {faker} = require('@faker-js/faker');
// const LoginPage = require('../pageobjects/signup.page');
// const SecurePage = require('../pageobjects/product.page');

describe('The Signup application', () => {

    it('should check that error message is on all fields before completing', async () => {
        
        //open register page
        await signupPage.open();

        //submit form
        await signupPage.btnCreateAnAccount.click();

        //check that the firstname error is visible
        //check that firstname error contians text "This is a required field."
        await expect(signupPage.firstnameError).toBeExisting();
        await expect(signupPage.firstnameError).toHaveTextContaining(
            "This is a required field.");

        //check that lastname error is visible
        //check that lastname error contians text "This is a required field."
        await expect(signupPage.lastnameError).toBeExisting();
        await expect(signupPage.lastnameError).toHaveTextContaining(
            "This is a required field.");

        //check that email error is visible
        //check that email error contians text "This is a required field."
        await expect(signupPage.emailError).toBeExisting();
        await expect(signupPage.emailError).toHaveTextContaining(
            "This is a required field.");

        //check that password error is visible
        //check that password error contians text "This is a required field."
        await expect(signupPage.passwordError).toBeExisting();
        await expect(signupPage.passwordError).toHaveTextContaining(
            "This is a required field.");

        //check that password confirmation error is visible
        //check that password confirmation error contians text "This is a required field."
        await expect(signupPage.passwordConfirmationError).toBeExisting();
        await expect(signupPage.passwordConfirmationError).toHaveTextContaining(
            "This is a required field.");
    });

    //checking that an invalid email produces the below error message 
    it('should not register with invalid email', async () => {

        //open register page
        await signupPage.open();

        await signupPage.signup(testUser[0].firstName, testUser[0].lastName, 'tree');
        await expect(signupPage.emailError).toBeExisting();
        await expect(signupPage.emailError).toHaveTextContaining(
            'Please enter a valid email address (Ex: johndoe@domain.com)');
    });

    //checking that an invalid password length produces the below error message 
    it('should not register with invalid password length', async () => {

        //open register page
        await signupPage.open();

        await signupPage.signup(testUser[0].firstName, testUser[0].lastName, faker.internet.email(), 'p@');
        await expect(signupPage.passwordError).toBeExisting();
        await expect(signupPage.passwordError).toHaveTextContaining(
            'Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.');
    });

    //checking that an invalid password confirmation produces the below error message 
    it('should not register if confirmation password does not match password', async () => {

        //open register page
        await signupPage.open();

        await signupPage.signup(testUser[0].firstName, testUser[0].lastName, faker.internet.email(), testUser[0].password, 'p@1');
        await expect(signupPage.passwordConfirmationError).toBeExisting();
        await expect(signupPage.passwordConfirmationError).toHaveTextContaining(
            'Please enter the same value again.');
    });
    
    //creating the account
    it('should create an account', async () => {

        //open the page
        await signupPage.open();

        //set values in fields
        await signupPage.signup(testUser[0].firstName, testUser[0].lastName, testUser[0].email, testUser[0].password, testUser[0].password);

        //check redirection page
         await expect(browser).toHaveUrl('https://magento.softwaretestingboard.com/customer/account');
        //check creation message
    
        await expect(signupPage.signupConfirmationMessage).toHaveTextContaining(
        'Thank you for registering with Fake Online Clothing Store');

    });
});


