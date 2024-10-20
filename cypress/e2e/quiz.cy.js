// End-to-end tests for the Tech Quiz
describe('Tech Quiz E2E Test', () => {
    it('starts the quiz when the start button is clicked', () => {
        cy.visit('/');

        cy.contains('start quiz').should('be.visible').click();

        cy.contains('What is the capital of France?').should('be.visible');
    });
});