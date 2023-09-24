describe('Search Functionality with stubbed API calls', () => {

  beforeEach(() => {
    cy.intercept('GET', 'https://the-one-api.dev/v2/movie', { fixture: 'movies.json' }).as('getMovies');
    cy.intercept('GET', 'https://the-one-api.dev/v2/book', { fixture: 'books.json' }).as('getBooks');
    cy.intercept('GET', 'https://the-one-api.dev/v2/character', { fixture: 'characters.json' }).as('getCharacters');

    cy.visit('http://localhost:3000/');
    cy.wait(['@getMovies', '@getBooks', '@getCharacters']);
});


  it('should filter movies, books, and characters based on search input', () => {
    cy.get('input[placeholder="Search movies, books, characters..."]').type('Ring');
    cy.get('.App-body').contains('Ring').should('be.visible');
  });

  it('should show no results when entering a non-matching search term', () => {
    cy.get('input[placeholder="Search movies, books, characters..."]').type('Zzzzzzzz');
    cy.get('.App-body').should('not.contain', 'Ring');
  });

  it('should reset to show all items when clearing the search term', () => {
    cy.get('input[placeholder="Search movies, books, characters..."]').type('Ring');
    cy.get('input[placeholder="Search movies, books, characters..."]').clear();
    cy.get('.App-body').contains('Ring').should('be.visible');
  });

});
