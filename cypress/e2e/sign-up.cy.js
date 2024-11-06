describe('sign-up', () => {
  it('with valid credential', () => {
    cy.visit('https://www.demoblaze.com/index.html')
    cy.xpath('//a[@id="signin2"]').click()
    cy.xpath('//input[@id="sign-username"]').type('abcd@test.com')
    cy.wait(2000)
    cy.xpath('//input[@id="sign-password"]').type('abc123')
    cy.wait(2000)
    cy.xpath('//button[text()="Sign up"]').click()
    cy.wait(2000)
  })
  it('empty field', () => {
    cy.visit('https://www.demoblaze.com/index.html')
    cy.xpath('//a[@id="signin2"]').click()
    cy.xpath('//button[text()="Sign up"]').click()
  })
})