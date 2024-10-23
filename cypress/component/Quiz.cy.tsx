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

  it('should display the next question until the quiz is over', () => {
    // Define the number of questions in the quiz
    const totalQuestions = 10; // Replace with the actual number of questions in your quiz
  
    // Mount the Quiz component
    mount(<Quiz />);
  
    // Start the quiz
    cy.get('button').contains('Start Quiz').click();
  
    // Loop through all the questions
    for (let i = 0; i < totalQuestions; i++) {
      // Simulate answering the question by clicking the first answer button
      cy.get('button').contains('1').click();
  
      // Ensure the next question is displayed or the quiz ends
      if (i < totalQuestions - 1) {
        cy.get('h2').should('not.be.empty'); // Check if a new question is displayed
      } else {
        cy.get('h2').contains('Quiz Completed').should('be.visible'); // Check if the quiz completion message is displayed
      }
    }
  });
  
});
