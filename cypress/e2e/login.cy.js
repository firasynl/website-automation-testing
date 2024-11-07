const homePage = require('../support/pages/home-page/homePage.js')
const loginPage = require('../support/pages/login-page/loginPage.js')

describe('login', () => {
  it('with valid credential', () => {
    homePage.goToHomePage();
    homePage.clickLoginMenu();
    loginPage.inputUsername('defg');
    loginPage.inputPassword('abcd123');
    loginPage.clickLoginButton();
    cy.wait(5000)
    cy.xpath('//a[@id="logout2"]').should('exist')
    cy.xpath('//a[@id="nameofuser"]').should('exist')
  }),
  it('with invalid credential', () => {
    homePage.goToHomePage();
    homePage.clickLoginMenu();
    loginPage.inputUsername('defg');
    loginPage.inputPassword('abcd');
    cy.wait(2000)
    loginPage.clickLoginButton();
    cy.wait(2000)
  })
  it('empty field', () => {
    homePage.goToHomePage();
    homePage.clickLoginMenu();
    loginPage.clickLoginButton();
  })
})