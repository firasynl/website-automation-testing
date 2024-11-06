const cartPage = require("../support/pages/cart-page/cartPage");
const homePage = require("../support/pages/home-page/homePage");
const orderPage = require("../support/pages/order-page/orderPage");

describe('checkout product', () => {
  it('have item in cart', () => {
    homePage.goToHomePage();
    homePage.clickCartMenu();
    cartPage.clickPlaceOrderButton();
    orderPage.inputName('defg');
    orderPage.inputCity('jakarta');
    orderPage.inputCreditCard('1234509876');
    orderPage.inputMonth('january');
    orderPage.inputYear('2026');
    orderPage.clickPurchaseButton();
  })
  it('no item in cart', () => {
    homePage.goToHomePage();
    homePage.clickCartMenu();
    cartPage.clickPlaceOrderButton();
  })
})