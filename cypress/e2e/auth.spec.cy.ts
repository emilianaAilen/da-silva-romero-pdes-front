describe('Integration test for Login/Register flow', () => {
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
    cy.get('.MuiAlert-message').should('contain.text', 'Wrong credentials');
  });

  it('should redirect to register page if the user clicks on "Registrate"', () => {
    cy.contains('a', 'Regístrate').click();

    cy.url().should('include', '/register');
  });

  it('should register new user and show success message', () => {
    cy.contains('a', 'Regístrate').click();

    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="username"]').type('test-example');
    cy.get('input[name="password"]').type('Test1234');
    cy.get('input[name="confirmPassword"]').type('Test1234');
    cy.get('button[type="submit"]').click();

    cy.get('.MuiAlert-message').should('contain.text', 'User registered successfully');
  });

  describe('success login case', () => {
    beforeEach(() => {
      cy.get('input[name="email"]').type('test@example.com');
      cy.get('input[name="password"]').type('Test1234');
      cy.get('button[type="submit"]').click();
    });

    it('should login with new user and show home', () => {
      cy.get('.MuiAlert-message').should('contain.text', 'User Logged successfully');
      cy.url().should('include', '/home');
    });
  
    it('should show menu for common user role', () => {
      cy.contains('¡Hola!');
      cy.contains('Home');
      cy.contains('Mis Compras');
      cy.contains('Mis Favoritos');
    });
  });

  after(() => {
    cy.request('DELETE',  `${Cypress.env('apiBaseUrl')}/user/delete/test@example.com`);
  });
});
