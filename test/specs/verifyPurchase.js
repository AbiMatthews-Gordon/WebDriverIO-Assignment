const verifyPurchasePage = require('../pageobjects/verifyPurchase.page');
const checkoutProductPage = require('../pageobjects/checkoutProduct.page');
const addToCartPage = require('../pageobjects/addToCart.page');
const loginPage = require('../pageobjects/login.page');


describe('The user ', () => {

    //open login page and login
    beforeEach(async () => {
        await loginPage.open();
        await loginPage.login("reuse@reuse.com","p@ssword1");
    });

    it(' should be able to verify order history', async () => { 
        // place order
        await addToCartPage.open();

        await addToCartPage.addToCart();
        await addToCartPage.miniCartProductName.waitForExist({timeout:5000});
        await checkoutProductPage.goToCheckout();
        await checkoutProductPage.fillOrderForm("reuse@reuse.com", "p@ssword1", "3 flowers road, streety", "flowers", "St Andrew", 0000, "JM", "(876)123-45678");
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