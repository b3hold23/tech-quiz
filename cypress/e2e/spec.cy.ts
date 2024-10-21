describe('Quiz Functionality', () => {
  beforeEach(() => {
    cy.visit('/'); 
  });

  it('should start the quiz when clicking the Start Quiz button', () => {
    cy.contains('Start Quiz').click();

    
    cy.get('.card h2').should('exist');
  });

  it('should present a new question when an answer is selected', () => {
    cy.contains('Start Quiz').click();

   
    cy.get('.card h2').invoke('text').as('firstQuestion');

   
    cy.get('.btn-primary').first().click();

  
    cy.get('.card h2').should(($newQuestion) => {
      expect($newQuestion.text()).not.to.eq(this.firstQuestion);
    });
  });

  it('should complete the quiz and show the score when all questions are answered', () => {
    
    cy.contains('Start Quiz').click();
  
    
    function answerNextQuestion() {
      
      cy.get('.card h2').should('exist');
  
      
      cy.get('.btn-primary').first().click();
  
      
      cy.get('body').then(($body) => {
        if ($body.find('h2:contains("Quiz Completed")').length === 0) {
          
          cy.wait(500); 
          answerNextQuestion();
        }
      });
    }
  
    
    answerNextQuestion();
  
    
    cy.contains('Quiz Completed').should('exist');
    cy.get('.alert-success').should('contain', 'Your score');
  });
  
}); 
