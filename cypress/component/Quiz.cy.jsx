// Component tests for the Quiz component
import react from 'react';
// @ts-ignore
import Quiz from '../../component/Quiz';
import { mount } from 'Cypress/react';

describe('Quiz Component Test', () => {
    it('starts the quiz when the start button is clicked', () => {
        mount(<Quiz />);
        cy.contains('start quiz').should('be.visible').click();
        cy.contains('What is the capital of France?').should('be.visible');
    });
});

