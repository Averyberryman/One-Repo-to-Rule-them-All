const fetchBooks = () => {
  return fetch("https://the-one-api.dev/v2/book", {
    method: "GET",
    headers: {
      Authorization: "Bearer K3m5T73Vg2q5K_ovcn6M",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => data.docs);
};

const fetchMovies = () => {
    return fetch("https://the-one-api.dev/v2/movie", {
      method: "GET",
      headers: {
        Authorization: "Bearer K3m5T73Vg2q5K_ovcn6M",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => data.docs);
  };
  
  const fetchCharacter = () => {
    return fetch("https://the-one-api.dev/v2/character", {
      method: "GET",
      headers: {
        Authorization: "Bearer K3m5T73Vg2q5K_ovcn6M",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => data.docs);
  };
  
  const fetchSingleBook = () => {
    return fetch("https://the-one-api.dev/v2//book/{id}", {
      method: "GET",
      headers: {
        Authorization: "Bearer K3m5T73Vg2q5K_ovcn6M",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => data.docs);
  };

  const fetchSingleMovie = () => {
    return fetch("https://the-one-api.dev/v2/movie/{id}", {
      method: "GET",
      headers: {
        Authorization: "Bearer K3m5T73Vg2q5K_ovcn6M",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => data.docs);
  };

  const fetchSingleCharacter = () => {
    return fetch("https://the-one-api.dev/v2/character/{id}", {
      method: "GET",
      headers: {
        Authorization: "Bearer K3m5T73Vg2q5K_ovcn6M",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => data.docs);
  }

export { fetchBooks, fetchMovies, fetchCharacter, fetchSingleBook, fetchSingleCharacter, fetchSingleMovie };
