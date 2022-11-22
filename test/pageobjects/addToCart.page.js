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
 * colour selector - ##option-label-color-93-item-60
 * colour error selector - .cf-tweet-this.cf-tt-target.cf-tt-enabled.cf-tt-element-attached-bottom.cf-tt-element-attached-center.cf-tt-target-attached-top.cf-tt-target-attached-center
 *                          - (You need to choose options for your item.)
 * colour error url - https://magento.softwaretestingboard.com/breathe-easy-tank.html
 * 
 * button add to cart selector - #maincontent > div.columns > div > div.widget.block.block-static-block > div.block.widget.block-products-list.grid > div > div > ol > li:nth-child(2) > div > div > div.product-item-inner > div > div.actions-primary > form > button
 * 
 * add to cart confirmation selector - .cf-tweet-this.cf-tt-target.cf-tt-enabled.cf-tt-element-attached-bottom.cf-tt-element-attached-center.cf-tt-target-attached-top.cf-tt-target-attached-center
 *  add to cart confirmation message - (You added Breathe-Easy Tank to your shopping cart.)
 * 
 * cart selector - .counter-number
 * 
 * view and edit cart selector - .action.viewcart span
 * 
 * 
 * 
 */

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert () {
        return $('#flash');
    }
}

module.exports = new SecurePage();
