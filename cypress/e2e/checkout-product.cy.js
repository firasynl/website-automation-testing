const cartPage = require("../support/pages/cart-page/cartPage");
const homePage = require("../support/pages/home-page/homePage");
const orderPage = require("../support/pages/order-page/orderPage");
const productPage = require("../support/pages/product-page/productPage");

describe('checkout product', () => {
  it('have item in cart', () => {
    homePage.goToHomePage();
    homePage.clickProduct('Samsung galaxy s6');
    productPage.clickCartButton();
    homePage.clickCartMenu();
    cartPage.clickPlaceOrderButton();
    orderPage.inputName('defg');
    orderPage.inputCountry('indonesia');
    orderPage.inputCity('jakarta');
    orderPage.inputCreditCard('1234509876');
    orderPage.inputMonth('january');
    orderPage.inputYear('2026');
    orderPage.clickPurchaseButton();
    orderPage.alertOrderSuccess();
  })
  it('no item in cart', () => {
    homePage.goToHomePage();
    homePage.clickCartMenu();
    cartPage.clickPlaceOrderButton();
    orderPage.inputName('defg');
    orderPage.inputCountry('indonesia');
    orderPage.inputCity('jakarta');
    orderPage.inputCreditCard('1234509876');
    orderPage.inputMonth('january');
    orderPage.inputYear('2026');
    orderPage.clickPurchaseButton();
  })
})