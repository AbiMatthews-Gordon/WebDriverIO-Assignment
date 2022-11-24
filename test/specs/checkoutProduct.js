const checkoutProductPage = require('../pageobjects/checkoutProduct.page');
const addToCartPage = require('../pageobjects/addToCart.page');
const loginPage = require('../pageobjects/login.page');

describe("The user" , () => {

    // //opening page before each test 
    beforeEach(async () => {

        //open purchase product page
        //await purchaseProductPage.open();
        await loginPage.open();
        await loginPage.login("reuse@reuse.com","p@ssword1");
    });

    it('should check that error message is on all fields before completing form', async () => {
        await addToCartPage.open();

        await addToCartPage.addToCart();
        await addToCartPage.miniCartProductName.waitForExist({timeout:5000});
        await checkoutProductPage.goToCheckout();

        //check that the street address error is visible
        //check that street address error contians text "This is a required field."
        await expect(checkoutProductPage.streetAddressError).toBeExisting();
        await expect(checkoutProductPage.streetAddressError).toHaveTextContaining(
            "This is a required field.");

        //check that the city error is visible
        //check that city error contians text "This is a required field."
        await expect(checkoutProductPage.cityError).toBeExisting();
        await expect(checkoutProductPage.cityError).toHaveTextContaining(
            "This is a required field.");

        //check that the zip error is visible
        //check that zip error contians text "This is a required field."
        await expect(checkoutProductPage.zipCodeError).toBeExisting();
        await expect(checkoutProductPage.zipCodeError).toHaveTextContaining(
            "This is a required field.");

        //check that the zip error is visible
        //check that zip error contians text "This is a required field."
        await expect(checkoutProductPage.numberError).toBeExisting();
        await expect(checkoutProductPage.numberError).toHaveTextContaining(
            "This is a required field.");
    });

    it('should be able to checkout', async () => {

        await addToCartPage.open();

        await addToCartPage.addToCart();
        await addToCartPage.miniCartProductName.waitForExist({timeout:5000});
        await checkoutProductPage.goToCheckout();
        // await purchaseProductPage.open();
        await checkoutProductPage.fillOrderForm("reuse@reuse.com", "p@ssword1", "3 flowers road, streety", "flowers", "St Andrew", 0000, "JM", "(876)123-45678");

        await expect(browser).toHaveUrl(checkoutProductPage.reviewPaymentsUrl);
        await checkoutProductPage.btnPlaceOrder.waitForClickable();
        await checkoutProductPage.btnPlaceOrder.click();

        // await expect(browser).toHaveUrl(checkoutProductPage.reviewPaymentsUrl);
        // await checkoutProductPage.btnPlaceOrder.click();

        // await checkoutProductPage.btnContinueShopping.click();
    });
});