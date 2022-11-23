/*
PURCHASE
--------
country selector - #E7OISUC

shipping method selector - .row .radio

invalid password selector - div[role="alert"] div
invalid password message - Invalid login or password.

email address message - You can create an account after checkout.
email address message selector - .note span

firstname required field error selector - #error-WYU9RHQ
firstname required field error message - This is a required field.

lastname required field error selector - #error-D51XLNW
lastname required field error message - This is a required field.

street address required field error selector - #error-SEQCCR7
street address required field error message - This is a required field.

city required field error selector - #error-UFREIKH
city required field error selector message - This is a required field.

zip required field error selector - #error-THCMFGV
zip required field error selector message - This is a required field.

phone number required field error selector - #error-D8TPC2N
phone number required field error selector message - This is a required field.

selecting next without fields filled error selector - [role="alert"].message
selecting next without fields filled error message - The shipping method is missing. Select the shipping method and try again.
***********************************************************************************************
*/

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PurchaseProductPage extends Page {
    /**
     * define selectors using getter methods
     */
    //cartIcon selector
    get cartIcon (){
        return $('.action.showcart');
    }

    //"Proceed to Checkout" selector
    get proceedToCheckout (){
        return $('#top-cart-btn-checkout');
    }
     
    //redirected url link
    get redirectedUrl (){
        return 'https://magento.softwaretestingboard.com/checkout/#shipping';
    }

    //email selector
    get inputEmail (){
        return $('#customer-email-fieldset #customer-email');
    }

    //password selector
    get inputPassword (){
        return $('#customer-password');
    }

    // //invalid email / password selector
    // get inputEmailPasswordError (){
    //     return $('div[role="alert"] div');
    // }

    //login button selector
    get btnLogin (){
        return $('button.action.login');
    }

    //street address selector
    get inputStreetAddress (){
        return $('input[name="street[0]"');
    }
    //street address error
    get inputStreetAddressError (){
        return $('input[name="street[0]"] + .field-error');
    }

    //city selector
    get inputCity (){
        return $('input[name="city"]');
    }

    //city error
    get inputCityError (){
        return $('input[name="city"] + .field-error');
    }

    //state/province selector
    get inputState (){
        return $('input[name="region"]');
    }
    
    //zip code selector
    get inputZipCode (){
        return $('input[name="postcode"]');
    }
    
    //zip code error
    get inputZipCodeError (){
        return $('input[name="postcode"] + .field-error');
    }

    //country selector
    get inputCountry (){
        return $('select[name=country_id] ');
    }

    //number selector
    get inputNumber (){
        return $('input[name=telephone] ');
    }

    //number error
    get inputNumberError (){
        return $('input[name=telephone] + .field-error');
    }

    // get selectShippingMethod (){
    //     return $('.row .radio');
    // }

    //Next button selector
    get btnNext (){
        return $('button.continue');
    }

    //redirected page link
    get nextRedirectedUrl (){
        return 'https://magento.softwaretestingboard.com/checkout/#payment';
    }

    //place order button selector
    get btnPlaceOrder (){
        return $('.action.primary.checkout[title="Place Order"] span');
    }

    //redirected page link
    get orderRedirectedUrl (){
        return 'https://magento.softwaretestingboard.com/checkout/onepage/success/';
    }

    get thankYouForYourPurchase(){
        return $('.base');
    }

    //continue shopping button selector
    get btnContinueShopping (){
        return $('.actions-toolbar .action.primary.continue span');
    }

    // //continue shopping redirected link selector
    // get continueShoppingRedirectedUrl (){
    //     return $('');
    // }

    async goToCheckout(){
        await this.cartIcon.click();
        await this.proceedToCheckout.click();
    }
    async fillOrderForm (email, password, streetAddress, city, state, zip, country, number) {
        await this.inputEmail.setValue(email);
        await this.inputStreetAddress.setValue(streetAddress);
        await this.inputCountry.selectByAttribute('value', country);
        await this.inputCity.setValue(city);
        await this.inputZipCode.setValue(zip);
        await this.inputNumber.setValue(number);
        await this.inputState.waitForDisplayed({timeout: 3000});
        await this.inputState.setValue(state);
        await this.inputPassword.waitForDisplayed({timeout: 5000});
        await this.inputPassword.setValue(password);
        await this.btnLogin.waitForDisplayed({timeout: 5000});
        await this.btnLogin.click();
        // await this.selectShippingMethod.click();
        await this.btnNext.click();
    }
    
    async placeOrder(){
        await this.btnPlaceOrder.click();
        await this.btnContinueShopping.click();
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('checkout/#shipping');
    }
}

module.exports = new PurchaseProductPage();
