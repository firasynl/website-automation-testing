const homePage = require('../support/pages/home-page/homePage.js');
const signupPage = require('../support/pages/signup-page/signupPage.js');

describe('sign-up', () => {
  it('with valid credential', () => {
    homePage.goToHomePage();
    homePage.clickSignupMenu();
    signupPage.inputSignupUsername('defgh');
    signupPage.inputSignupPassword('abc123');
    signupPage.clickSignupButton();
    cy.wait(2000)
  })
  it('empty field', () => {
    homePage.goToHomePage();
    homePage.clickSignupMenu();
    signupPage.clickSignupButton();
  })
})