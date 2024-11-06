const locators = require('./loginLocators.js')

class LoginPage{
    inputUsername(username){
        cy.wait(1000)
        cy.xpath(locators.datatestid.inputUsername).type(username)
        cy.wait(2000)
    }
    inputPassword(password){
        cy.xpath(locators.datatestid.inputPassword).type(password)
        cy.wait(2000)
    }
    clickLoginButton(){
        cy.xpath(locators.datatestid.inputPassword).click()
    }
}

module.exports = new LoginPage();