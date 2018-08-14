describe('should display artist name', () => {
  it('should display artist name', () => {
    cy.visit('/artists');
    cy.get('#lblArtistNameSearch').type('Cher');
    cy.get('#btnArtistNameSearch').click();
    cy.wait(8000);
    cy.get('.card__itemname').first().should('contain', 'Cher')
  });
});