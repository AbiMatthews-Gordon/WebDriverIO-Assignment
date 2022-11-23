const purchaseProductPage = require('../pageobjects/purchaseProduct.page');
const addToCartPage = require('../pageobjects/addToCart.page');

describe("The user " , () => {

    //opening page before each test 
    // beforeEach(() => {
    //     //open purchase product page
    //     await purchaseProductPage.open();
    // });

    //checking allowing the user to login
    it('should be able to checkout', async () => {
        await addToCartPage.open();

        await addToCartPage.addToCart();
        await addToCartPage.miniCartProductName.waitForExist({timeout:5000});
        await purchaseProductPage.goToCheckout();
        // await purchaseProductPage.open();
        await purchaseProductPage.fillOrderForm("reuse@reuse.com", "p@ssword1", "3 flowers road, streety", "flowers", "St Andrew", 0000, "JM", "(876)123-45678");

        await expect(browser).toHaveUrl(purchaseProductPage.redirectedUrl);
        await purchaseProductPage.btnNext.click();

        await expect(browser).toHaveUrl(purchaseProductPage.nextRedirectedUrl);
        // await purchaseProductPage.btnPlaceOrder.click();

        // await purchaseProductPage.btnContinueShopping.click();


    });



    // should check that error message is on all fields before completing form









});