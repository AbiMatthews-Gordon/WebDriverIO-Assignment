const verifyPurchasePage = require('../pageobjects/verifyPurchase.page');
const checkoutProductPage = require('../pageobjects/checkoutProduct.page');
const addToCartPage = require('../pageobjects/addToCart.page');
const loginPage = require('../pageobjects/login.page');
const testUser = require('./test.data');


describe('The user', () => {

    //open login page and login
    beforeEach(async () => {
        await loginPage.open();
        await loginPage.login("reuse@reuse.com","p@ssword1");
    });

    it('should be able to verify order history', async () => { 
        // place order
        await addToCartPage.open();

        await addToCartPage.addToCart();
        await addToCartPage.miniCartProductName.waitForExist({timeout:5000});
        await checkoutProductPage.goToCheckout();
        await checkoutProductPage.fillOrderForm(testUser[0].address.street, testUser[0].address.city, 
            testUser[0].address.state, testUser[0].address.zip, testUser[0].address.country, testUser[0].address.phone);
        await expect(browser).toHaveUrl(checkoutProductPage.reviewPaymentsUrl);
        await checkoutProductPage.btnPlaceOrder.waitForClickable();
        await checkoutProductPage.btnPlaceOrder.click();
        
        //collect the order number
        await verifyPurchasePage.collectOrderNumber();
        
        //open the order history page
        await verifyPurchasePage.open();

        // verify that order number is the same as top of page
        await expect(verifyPurchasePage.myOrderNumberHistory).toBeExisting();
        await expect(verifyPurchasePage.myOrderNumberHistory).toHaveTextContaining(verifyPurchasePage.orderNumber);
    });

});