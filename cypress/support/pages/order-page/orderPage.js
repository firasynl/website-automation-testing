const orderLocators = require("./orderLocators");

class OrderPage{
    inputName(name){
        cy.xpath(orderLocators.datatestid.inputName).type(name)
        cy.wait(1000)
    }
    inputCountry(country){
        cy.xpath(orderLocators.datatestid.inputCountry).type(country)
        cy.wait(1000)
    }
    inputCity(city){
        cy.xpath(orderLocators.datatestid.inputCity).type(city)
        cy.wait(1000)
    }
    inputCreditCard(numbercard){
        cy.xpath(orderLocators.datatestid.inputCreditCard).type(numbercard)
        cy.wait(1000)
    }
    inputMonth(month){
        cy.xpath(orderLocators.datatestid.inputMonth).type(month)
        cy.wait(1000)
    }
    inputYear(year){
        cy.xpath(orderLocators.datatestid.inputYear).type(year)
        cy.wait(1000)
    }
    clickPurchaseButton(){
        cy.xpath(orderLocators.datatestid.purchaseButton).click()
    }
    alertOrderSuccess(){
        cy.xpath(orderLocators.datatestid.alertOrderSuccess).should('exist')
    }
}

module.exports = new OrderPage();