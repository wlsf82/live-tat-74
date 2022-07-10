describe('Delete note', () => {
  beforeEach(() => cy.login())

  it('successfully', () => {
    cy.task('getNoteId')
      .then(noteId => {
        cy.intercept('DELETE', `**/notes/${noteId}`)
          .as('deleteNote')

        cy.visit(`/notes/${noteId}`)
        cy.contains('button', 'Delete')
          .click()
        cy.wait('@deleteNote')
        cy.get('.list-group-item')
          .its('length')
          .should('be.equal', 6)
        cy.contains('.list-group-item', 'Live TAT 74')
          .should('not.exist')
      })
  })
})
