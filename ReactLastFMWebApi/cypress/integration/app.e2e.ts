describe('should display header', () => {
  it('should display header', () => {
    cy.visit('/');
    cy.get('h1')
          .should('contain', 'Last FM')
  });
});