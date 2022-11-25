# LUMA Website Test Automation

This is a WebDriverIO Test Automation project for the LUMA website, which can be found at https://magento.softwaretestingboard.com/. It carries out the following workflows:

* Signup 
* Adding a Product to your Cart
* Purchasing a Product
* Verify Purchase in Order History

Along with Data-Driven Tests, Negative Test/Unhappy Paths are included. It is also set up for testing across multiple browsers.

---

## Instructions

1. Clone the repository
2. Navigate to the project's root directory in your Terminal.
3. Enter the command **npm install** to install the ***dependencies***.
4. Enter the given command below to run tests.
---

## Commands

* To execute individual test, use 
```bash
npm run test --spec < path > 
```
Examples
```bash
    npm run test --spec.\test\specs\addToCart.js
```
```bash
    npm run test --spec.\test\specs\checkoutProduct.js
```
```bash
    npm run test --spec.\test\specs\signup.js
```
```bash
    npm run test --spec.\test\specs\verifyPurchase.js
```
* To execute all test, use 
```bash
npm run test
```
---

## Cross Browser Testing

All tests are run in Chrome by default, but they can be configured to run in other browsers such as Firefox. Here's how to do it:

* Open the ***wdio.conf.js file***.
* Go to line 52 - the capabilities section
* Comment line 59 that has "browserName: 'chrome'," and
* Uncomment line 60 that has "browserName: 'firefox',"
* Save the file and execute it once more for it to run in the Firefox browser.

Do this interchangeably for preferred browser.