describe('Create note', () => {
  beforeEach(() => cy.login())

  it('successfully', () => {
    const noteTitle = 'Live TAT 74'
    
    cy.intercept('POST', '**/notes')
      .as('createNote')

    cy.visit('/notes/new')

    cy.get('#content')
      .type(noteTitle)
    cy.contains('button', 'Create')
      .click()
    cy.wait('@createNote')
      .then(({ response }) => {
        cy.task('saveNoteId', response.body.noteId)
        cy.contains('.list-group-item', noteTitle)
          .should('be.visible')
      })
  })
})
