describe('OrderedList', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should focus input field by default', () => {
    cy.focused().should('have.attr', 'class', 'input-field')
  })

  it('should allow adding items', () => {
    cy.get('.input-field').type('apple{enter}')
    cy.get('.list-item').should('contain', 'apple')
  })

  it('should refocus input field after adding item', () => {
    cy.get('.input-field').type('apple{enter}')
    cy.get('.list-item').should('contain', 'apple')
    cy.focused().should('have.attr', 'class', 'input-field')
  })

  it('should sort items ascending by default', () => {
    cy.get('.input-field').type('apple{enter}')
    cy.get('.input-field').type('banana{enter}')
    cy.get('.list-item').eq(0).should('contain', 'apple')
    cy.get('.list-item').eq(1).should('contain', 'banana')
  })

  it('should allow sorting items descending', () => {
    cy.get('.input-field').type('apple{enter}')
    cy.get('.input-field').type('banana{enter}')
    cy.get('.sort-list-button').click()
    cy.get('.list-item').eq(0).should('contain', 'banana')
    cy.get('.list-item').eq(1).should('contain', 'apple')
  })

  it('should refocus input field after resorting items', () => {
    cy.get('.input-field').type('apple{enter}')
    cy.get('.input-field').type('banana{enter}')
    cy.get('.sort-list-button').click()
    cy.focused().should('have.attr', 'class', 'input-field')
  })

  it('should allow clearing items', () => {
    cy.get('.input-field').type('apple{enter}')
    cy.get('.clear-list-button').click()
    cy.get('.list-wrapper').children().should('have.length', 0)
  })

  it('should refocus input field after clearing items', () => {
    cy.get('.input-field').type('apple{enter}')
    cy.get('.clear-list-button').click()
    cy.focused().should('have.attr', 'class', 'input-field')
  })
})