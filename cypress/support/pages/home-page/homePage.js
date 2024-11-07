const homeLocators = require("./homeLocators");

class HomePage{
    goToHomePage(){
        cy.visit('https://www.demoblaze.com/index.html')
    }
    clickLoginMenu(){
        cy.xpath(homeLocators.datatestid.loginMenu).click()
    }
    clickSignupMenu(){
        cy.xpath(homeLocators.datatestid.signupMenu).click()
    }
    clickCartMenu(){
        cy.xpath(homeLocators.datatestid.cartMenu).click()
    }
    clickProduct(nameproduct){
        cy.xpath(homeLocators.datatestid.productDetail).contains(nameproduct).click()
        cy.wait(3000)
    }
}

module.exports = new HomePage();