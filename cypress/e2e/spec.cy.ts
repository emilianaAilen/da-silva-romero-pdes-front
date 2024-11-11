describe('Integration test for Login flow', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should redirect to /login when an user is not authenticated and intends to access the main page', () => {
    cy.url().should('include', '/login');
  });

  it('should show a failed message if credentials are wrong', () => {
    cy.get('input[name="email"]').type('fail@example.com');
    cy.get('input[name="password"]').type('Fail');
    cy.get('button[type="submit"]').click();

    cy.get('.MuiAlert-message').should('be.visible');
    cy.get('.MuiAlert-message').should('contain.text', 'Failed to fetch');
  });

  it('should redirect to register page if the user clicks on "Registrate"', () => {
    cy.contains('a', 'Regístrate').click();
    
    cy.url().should('include', '/register');
  });
});
