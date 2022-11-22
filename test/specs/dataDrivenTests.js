const signupPage = require("../pageobjects/signup.page");
const signupData = required('../data/signupData');

describe.only('Magento Signup', () => {

    for (const user of signupData) {
        
        it(`should attempt to create the ${user.firstname}`, async () => {
            await signupPage.open();//opening the page
            //attempting to login user
            await signupPage.signup(user.firstname, user.lastname, user.email, user.password, user.passwordConfirmation);

            //checking if data (firstname, lastname, email, password & confirm password) is invalid
            if(user.firstname == "Jane" && user.lastname == "Doe" && user.email == "email@email.com"
                && user.password == "p@ssword1" && user.passwordConfirmation == "p@ssword1"){

                    //if data is invalid then checking that they are at correct url
                    //if data is invalid then checking that they seeing the message
                    await expect(browser).toHaveUrl(user.expectedUrl); 
                    await expect(message).toHaveTextContaining(user.expectedFailureMessage);

                } else {

                    //data is not invalid so checking that they are at correct url
                    //data is not invalid so checking that they seeing the message
                    await expect(browser).toHaveUrl(user.expectedUrl); 
                    await expect(message).toHaveTextContaining(user.expectedMessage);
                }
        });
    }




});