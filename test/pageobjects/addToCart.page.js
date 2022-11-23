const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AddToCartPage extends Page {
    /**
     * define selectors using getter methods
     */
    get lumaLogo () {
        return $('logo');
    }

    get size () {
        return $('.product-items li:nth-child(2) .size .swatch-option:nth-child(2)');
    }

    get sizeError () {
        return $('.page div[role="alert"] div[data-bind="html: $parent.prepareMessageForHtml(message.text)');
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
