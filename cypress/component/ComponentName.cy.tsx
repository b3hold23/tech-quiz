import React from 'react';
import Quiz from '../../client/src/components/Quiz'; // Adjust the import path as necessary
import { mount } from 'cypress/react18';
// import '@testing-library/cypress/add-commands';

describe('<Quiz />', () => {
  // Stub the API requests using intercept
  beforeEach(() => {
    // Mock the questions API call using a fixture
    cy.fixture('questions').then((questions) => {
      cy.intercept('GET', '**/getQuestions', {
        statusCode: 200,
        body: questions,
      });
    });
  });

  it('should start the quiz when the Start Quiz button is clicked', () => {
    // Mount the Quiz component
    mount(<Quiz />);

    // Check that the "Start Quiz" button exists
    cy.get('button').contains('Start Quiz').should('exist');

    // Click the "Start Quiz" button
    cy.get('button').contains('Start Quiz').click();

    // Verify that the first question is now visible
    cy.get('h2').should('be.visible');
  });

  it('should load and display the first question after the quiz starts', () => {
    // Mount the Quiz component
    mount(<Quiz />);

    // Start the quiz
    cy.get('button').contains('Start Quiz').click();

    // Ensure the first question is loaded and displayed
    cy.get('h2').should('not.be.empty');
  });

  it('should display the next question when an answer is clicked', () => {
    // Mount the Quiz component
    mount(<Quiz />);

    // Start the quiz
    cy.get('button').contains('Start Quiz').click();

    // Simulate answering the first question by clicking the first answer button
    cy.get('button').contains('1').click();

    // Ensure the next question is displayed
    cy.get('h2').should('not.be.empty');
  });

  it('should display the quiz completion screen after all questions are answered', () => {
    // Mount the Quiz component
    mount(<Quiz />);

    // Start the quiz
    cy.get('button').contains('Start Quiz').click();

    // Loop through all questions and answer them
    cy.get('button').contains('1').click(); // Answer the first question
    cy.get('button').contains('1').click(); // Answer the second question

    // After answering all questions, check if the quiz completion message is displayed
    cy.get('h2').contains('Quiz Completed').should('be.visible');
  });
});
