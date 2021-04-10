describe('Home', () => {
  it('should found the hello string', () => {
    cy.visit('/');

    cy.findByText('hello').should('be.visible');
  });
});
