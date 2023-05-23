describe("Calculator", () => {


  beforeEach(() => {
    cy.visit("http://localhost:3000");


  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('Should update the display of the running total', () => {
    cy.get('#number4').click()
    cy.get('#number4').click()
    cy.get('.display').should('contain', '44')
  })

  it('Should display result of arithmetical calculation', () => {
    cy.get('#number4').click()
    cy.get('#operator_add').click()
    cy.get('#number4').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '8')
  })

  it('Should chain multiple operations together', () => {
    cy.get('#number4').click()
    cy.get('#operator_add').click()
    cy.get('#number4').click()
    cy.get('#operator_add').click()
    cy.get('#number4').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '12')
  })

  it('Should show a positive number', () => {
    cy.get('#number4').click()
    cy.get('.display').should('contain', '4')
  })

  it('Should show a negative number', () => {
    cy.get('#number4').click()
    cy.get('#operator-subtract').click()
    cy.get('#number6').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '-2')
  })

  it('Should show a decimal number', () => {
    cy.get('#number4').click()
    cy.get('#decimal').click()
    cy.get('#number6').click()
    // cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '4.6')
  })

  it('Should show a very large number', () => {
    cy.get('#number4').click()
    cy.get('#number6').click()
    cy.get('#number4').click()
    cy.get('#number6').click()
    cy.get('#number6').click()
    cy.get('#number6').click()
    // cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '464666')
  })


  //git inithad some help with amending the calc.js code in this one
  it('Should show desired outcome if divided by 0', () => {
    cy.get('#number4').click()
    cy.get('#operator-divide').click()
    cy.get('#number0').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', 'Error')
  })





})  
