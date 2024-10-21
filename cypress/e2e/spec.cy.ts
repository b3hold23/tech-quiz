describe('Starts quiz', () => {
  it('will start the quiz by click the "Start Quiz" button', () => {
    cy.visit('/')

    cy.contains('Start Quiz').click()
  })
})