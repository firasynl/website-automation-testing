const signupLocators = require("./signupLocators");

class SignupPage{
    inputSignupUsername(username){
        cy.xpath(signupLocators.datatestid.inputUsername).type(username)
        cy.wait(2000)
    }
    inputSignupPassword(password){
        cy.xpath(signupLocators.datatestid.inputPassword).type(password)
        cy.wait(2000)
    }
    clickSignupButton(){
        cy.xpath(signupLocators.datatestid.signupButton).click()
       
    }
}

module.exports = new SignupPage();