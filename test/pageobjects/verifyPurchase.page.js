const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class VerifyPurchasePage extends Page {
    //orderNumber;

    //my order page link
    get myOrderUrl() {
        return $('https://magento.softwaretestingboard.com/sales/order/history/');
    }

    //thank you message for purchase
    get thankYouForYourPurchase() {
        return $('.base');
    }
   
    get myOrderNumberCheckout() {
        return $('.order-number');
    }

    get myOrderNumberHistory() {
        return $('.history tbody tr:nth-child(1) .col.id');
    }

    //verifying the number on the or placed
    get orderPlaced() {
        return $('.history tbody tr:nth-child(1) .col.id');
    }

    //function to collect order #
    async collectOrderNumber() {

        //save order number in a variable
        this.orderNumber = await this.myOrderNumberCheckout.getText();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('sales/order/history/');
    }
}

module.exports = new VerifyPurchasePage();