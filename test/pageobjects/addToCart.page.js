/**
 * PRODUCT
 * -------
 * 
 * icon selector - [src = "https://magento.softwaretestingboard.com/pub/static/version1666447838/frontend/Magento/luma/en_US/images/logo.svg"]
 * 
 * 
 * size selector - ????
 * size error selector - .cf-tweet-this.cf-tt-target.cf-tt-enabled.cf-tt-element-attached-bottom.cf-tt-element-attached-center.cf-tt-target-attached-top.cf-tt-target-attached-center 
 *                        - (You need to choose options for your item.)
 * size error url - https://magento.softwaretestingboard.com/breathe-easy-tank.html
 * 
 * 
 * colour selector - #option-label-color-93-item-60
 * colour error selector - .cf-tweet-this.cf-tt-target.cf-tt-enabled.cf-tt-element-attached-bottom.cf-tt-element-attached-center.cf-tt-target-attached-top.cf-tt-target-attached-center
 *                          - (You need to choose options for your item.)
 * colour error url - https://magento.softwaretestingboard.com/breathe-easy-tank.html
 * 
 * button add to cart selector - #maincontent > div.columns > div > div.widget.block.block-static-block > div.block.widget.block-products-list.grid > div > div > ol > li:nth-child(2) > div > div > div.product-item-inner > div > div.actions-primary > form > button
 * 
 * add to cart confirmation selector - .cf-tweet-this.cf-tt-target.cf-tt-enabled.cf-tt-element-attached-bottom.cf-tt-element-attached-center.cf-tt-target-attached-top.cf-tt-target-attached-center
 * add to cart confirmation message - (You added Breathe-Easy Tank to your shopping cart.)
 * 
 * cart icon selector - .counter-number
 * 
 * view and edit cart selector - .action.viewcart span
 * 
 * mini product name selctor - #mini-cart .product-item:nth-child(1) .product-item-name
 * 
 * mini price name selector - #mini-cart .product-item:nth-child(1) .minicart-price
 ******************************************************************************************************** 
 */

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AddToCartPage extends Page {
    /**
     * define selectors using getter methods
     */
    get lumaLogo () {
        return $('[src = "https://magento.softwaretestingboard.com/pub/static/version1666447838/frontend/Magento/luma/en_US/images/logo.svg"]');
    }

    get size () {
        return $('.product-items li:nth-child(2) .size .swatch-option:nth-child(2)');
    }

    get sizeError () {
        return $('.cf-tweet-this.cf-tt-target.cf-tt-enabled.cf-tt-element-attached-bottom.cf-tt-element-attached-center.cf-tt-target-attached-top.cf-tt-target-attached-center');
    }

    get sizeErrorUrl () {
        return $('https://magento.softwaretestingboard.com/breathe-easy-tank.html');
    }

    get colour () {
        return $('#option-label-color-93-item-60');
    }

    get colourError () {
        return $('.cf-tweet-this.cf-tt-target.cf-tt-enabled.cf-tt-element-attached-bottom.cf-tt-element-attached-center.cf-tt-target-attached-top.cf-tt-target-attached-center');
    }

    get colourErrorUrl () {
        return 'https://magento.softwaretestingboard.com/breathe-easy-tank.html';
    }

    get btnAddToCart () {
        return $('.product-items li:nth-child(2) button[type=submit]');
    }

    get addToCartConfirmation () {
        return $('div[role="alert"]');
    }

    get cartIcon () {
        return $('.counter-number');
    }

    get miniCartProductName () {
        return $('#mini-cart .product-item:nth-child(1) .product-item-name');
    }

    get miniCartPrice () {
        return $('#mini-cart .product-item:nth-child(1) .minicart-price');
    }


    async addToCart () {
        // await this.lumaLogo.click();
        await this.size.isClickable();
        await this.size.click();
        await this.colour.click()
        await this.btnAddToCart.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
     open () {
        return super.open('');
    }
}

module.exports = new AddToCartPage();
