describe('login', () => {
  it('with valid credential', () => {
    cy.visit('https://www.demoblaze.com/index.html')
    cy.xpath('//a[@id="login2"]').click()
    cy.xpath('//input[@id="loginusername"]').type('defg')
    cy.wait(2000)
    cy.xpath('//input[@id="loginpassword"]').type('abcd123')
    cy.wait(2000)
    cy.xpath('//button[text()="Log in"]').click()
    cy.wait(5000)
    cy.xpath('//a[@id="logout2"]').should('exist')
    cy.xpath('//a[@id="nameofuser"]').should('contain', 'Welcome defg')
  }),
  it('with invalid credential', () => {
    cy.visit('https://www.demoblaze.com/index.html')
    cy.xpath('//a[@id="login2"]').click()
    cy.xpath('//input[@id="loginusername"]').type('defg')
    cy.wait(2000)
    cy.xpath('//input[@id="loginpassword"]').type('abcd')
    cy.wait(2000)
    cy.xpath('//button[text()="Log in"]').click()
    cy.wait(2000)
  })
  it('empty field', () => {
    cy.visit('https://www.demoblaze.com/index.html')
    cy.xpath('//a[@id="login2"]').click()
    cy.xpath('//button[text()="Log in"]').click()
  })
})