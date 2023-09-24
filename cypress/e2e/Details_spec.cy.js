describe('Details Rendering', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should render book details correctly when a book card is clicked', () => {
    cy.intercept('GET', 'https://the-one-api.dev/v2/book/*', { fixture: 'books.json' });
    cy.get('.book-card:first').click();
    cy.url().should('include', '/book/');
    cy.get('.book-detail-container h2').should('contain', 'The Fellowship Of The Ring');
  });

  it('should render character details correctly when a character card is clicked', () => {
    cy.intercept('GET', 'https://the-one-api.dev/v2/character/*', { fixture: 'characters.json' });
    cy.get('.character-card:first').click();
    cy.url().should('include', '/character/');
    cy.get('.character-detail-container')
      .should('contain', 'Adanel')
      .and('contain', 'Race: Human')
      .and('contain', 'Gender: Female')
      .and('contain', 'Spouse: Belemir')
      .and('contain', 'Read more on LOTR Wiki');
  });

  it('should render movie details correctly when a movie card is clicked', () => {
    cy.intercept('GET', 'https://the-one-api.dev/v2/movie/*', { fixture: 'movies.json' });
    cy.get('.movie-card:first').click();
    cy.url().should('include', '/movie/');
    cy.get('.movie-detail-container')
      .should('contain', 'The Lord of the Rings Series')
      .and('contain', 'Runtime: 558 minutes')
      .and('contain', 'Budget: $281 million')
      .and('contain', 'Box Office Revenue: $2917 million')
      .and('contain', 'Academy Award Nominations: 30')
      .and('contain', 'Academy Award Wins: 17')
      .and('contain', 'Rotten Tomatoes Score: 94%');
  });

});
