const productLocators = require("./productLocators");

class ProductPage{
    clickCartButton(){
        cy.xpath(productLocators.datatestid.addToCartButton).click()
    }
}

module.exports = new ProductPage();