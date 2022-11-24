// const { sizeError } = require('../pageobjects/addToCart.page');
const addToCartPage = require('../pageobjects/addToCart.page');

// see tank top for $20 so go look if its actually $20

describe('The Add to Cart application ', () => {

    //opening page before each test 
    beforeEach(() => {
        //open add to cart page
        await addToCartPage.open();
    });

    //checking that an error appears if size is not selected
    it('should not add to cart without selecting size', async () => {

        //press add to cart button
        await addToCartPage.btnAddToCart.click();

        await expect(browser).toHaveUrl(addToCartPage.sizeErrorUrl)
        await expect(addToCartPage.sizeError).toBeExisting();
        await expect(addToCartPage.sizeError).toHaveTextContaining(
            "You need to choose options for your item.");
    });

    //checking that an error appears if colour is not selected
    it('should not add to cart without selecting colour', async () => {

        //press add to cart button
        await addToCartPage.btnAddToCart.click();

        await expect(browser).toHaveUrl(addToCartPage.colourErrorUrl);
        await expect(addToCartPage.colourError).toBeExisting();
        await expect(addToCartPage.colourError).toHaveTextContaining(
            "You need to choose options for your item.");

    });
    
    //successfully adding to cart
    it('should add to cart', async () => {

        //set values in fields
        //click add to cart button
        await addToCartPage.addToCart();

        //check cart confirmation message
        await expect(addToCartPage.addToCartConfirmation).toHaveTextContaining(
        'You added Breathe-Easy Tank to your shopping cart.');
        //click cart icon
        await addToCartPage.cartIcon.click();
        //read name
        await expect(addToCartPage.miniCartProductName).toHaveTextContaining(
            'Breathe-Easy Tank');
        //read price
        await expect(addToCartPage.miniCartPrice).toHaveTextContaining(
            '$34.00');
    });
});