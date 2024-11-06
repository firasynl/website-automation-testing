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
}

module.exports = new HomePage();