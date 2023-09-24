describe("Favorites Functionality", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should be able to add items to favorites and view them on the favorites page", () => {
    cy.intercept("GET", "https://the-one-api.dev/v2/movie", {
      fixture: "movies.json",
    });
    cy.intercept("GET", "https://the-one-api.dev/v2/book", {
      fixture: "books.json",
    });
    cy.intercept("GET", "https://the-one-api.dev/v2/character", {
      fixture: "characters.json",
    });

    cy.get(".movie-card:first .favorite-button").click();
    cy.get(".book-card:first .favorite-button").click();
    cy.get(".character-card:first .favorite-button").click();

    cy.contains("nav.navbar a", "Favorites").click();
    cy.get(".favorites-grid .movie-card").should("exist");
    cy.get(".favorites-grid .book-card").should("exist");
    cy.get(".favorites-grid .character-card").should("exist");
  });
});
