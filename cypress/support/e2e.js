Cypress.Commands.add('login', () => {
  cy.intercept('**/notes')
    .as('getNotes')
  cy.visit('/login')
  cy.get('#email')
    .type(Cypress.env('user_email'))
  cy.get('#password')
    .type(Cypress.env('user_pwd'), { log: false })
  cy.contains('button', 'Login')
    .click()
  cy.wait('@getNotes')
})
