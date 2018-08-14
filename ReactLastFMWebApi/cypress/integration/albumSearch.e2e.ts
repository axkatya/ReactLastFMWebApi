describe('should display album name', () => {
  it('should display album name', () => {
    cy.visit('/albums');
    cy.get('#lblAlbumNameSearch').type('love');
    cy.get('#btnAlbumNameSearch').click();
    cy.wait(8000);
    cy.get('.card__itemname').should('contain', 'LOVE')
  });
});