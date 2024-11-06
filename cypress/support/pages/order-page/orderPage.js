const orderLocators = require("./orderLocators");

class OrderPage{
    inputName(name){
        cy.xpath(orderLocators.datatestid.inputName).type(name)
    }
    inputCity(city){
        cy.xpath(orderLocators.datatestid.inputCity).type(city)
    }
    inputCreditCard(numbercard){
        cy.xpath(orderLocators.datatestid.inputCreditCard).type(numbercard)
    }
    inputMonth(month){
        cy.xpath(orderLocators.datatestid.inputMonth).type(month)
    }
    inputYear(year){
        cy.xpath(orderLocators.datatestid.inputYear).type(year)
    }
    clickPurchaseButton(){
        cy.xpath(orderLocators.datatestid.purchaseButton).click()
    }
}

module.exports = new OrderPage();