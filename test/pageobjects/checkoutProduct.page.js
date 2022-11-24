const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckoutProductPage extends Page {
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
    get streetAddressError (){
        return $('input[name="street[0]"] + .field-error');
    }

    //city selector
    get inputCity (){
        return $('input[name="city"]');
    }

    //city error
    get cityError (){
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
    get zipCodeError (){
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
    get numberError (){
        return $('input[name=telephone] + .field-error');
    }

    // get selectShippingMethod (){
    //     return $('.row .radio');
    // }

    //Next button selector
    get btnNext (){
        return $('button.continue');
    }

    
    //place order button selector
    get btnPlaceOrder (){
        return $('.action.primary.checkout[title="Place Order"]');
    }

    //shipping url link
    get shippingFormUrl (){
        return 'https://magento.softwaretestingboard.com/checkout/#shipping';
    }
    
    //review payments link
    get reviewPaymentsUrl (){
        return 'https://magento.softwaretestingboard.com/checkout/#payment';
    }

    //finalize payment link
    get finalizePaymentUrl (){
        return 'https://magento.softwaretestingboard.com/checkout/onepage/success/';
    }

    get thankYouForYourPurchase(){
        return $('.base');
    }

    //continue shopping button selector
    get btnContinueShopping (){
        return $('.actions-toolbar .action.primary.continue span');
    }

    get checkoutLoader (){
        return $('#checkout-loader');
    }

    get shippingAddressContainer(){
        return $('.shipping-address-items');
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

        let inputCountryExists = await this.inputCountry.isExisting();
        console.log("--------------------------------------------\n\n");
        console.log(inputCountryExists);
        console.log("--------------------------------------------\n\n");
        if(inputCountryExists){
            await this.inputCountry.waitForClickable({timeout: 5000});
            await this.inputCountry.selectByAttribute('value', country);
            await this.inputZipCode.setValue(zip);
            await this.inputState.waitForClickable({timeout: 5000});
            await this.inputNumber.setValue(number);
            await this.inputState.setValue(state);
            await this.inputStreetAddress.setValue(streetAddress);
            await this.inputCity.setValue(city);
            // await this.selectShippingMethod.click();
        }
        await this.btnNext.waitForClickable({timeout: 10000});
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

module.exports = new CheckoutProductPage();
