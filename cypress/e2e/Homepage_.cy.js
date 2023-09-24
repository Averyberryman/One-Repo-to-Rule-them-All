describe('LOTR Application', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://the-one-api.dev/v2/book', { fixture: 'books.json' }).as('getBooks');
    cy.intercept('GET', 'https://the-one-api.dev/v2/character', { fixture: 'characters.json' }).as('getCharacters');
    cy.intercept('GET', 'https://the-one-api.dev/v2/movie', { fixture: 'movies.json' }).as('getMovies');
    cy.visit('http://localhost:3000/');
  });

  it('loads books correctly', () => {
    cy.wait('@getBooks');
    cy.contains('The Fellowship Of The Ring');
    cy.contains('The Two Towers');
    cy.contains('The Return Of The King');
  });

  it('loads characters correctly', () => {
    cy.wait('@getCharacters');
    cy.contains('Adanel');
    cy.contains('Adrahil I');
    cy.contains('Adrahil II');
  });

  it('loads movies correctly', () => {
    cy.wait('@getMovies');
    cy.contains('The Lord of the Rings Series');
    cy.contains('The Hobbit Series');
    cy.contains('The Unexpected Journey');
  });

  it('displays movie details correctly', () => {
    cy.wait('@getMovies');
    cy.contains('The Lord of the Rings Series').parent().within(() => {
      cy.contains('Runtime: 558 minutes');
    });
  });
});
