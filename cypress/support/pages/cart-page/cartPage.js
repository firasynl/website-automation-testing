const cartLocators = require("./cartLocators");

class CartPage{
    clickPlaceOrderButton(){
        cy.xpath(cartLocators.datatestid.palceOrderButton).click()
    }
}

module.exports = new CartPage();