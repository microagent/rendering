function renderMovies(movies) {
  resultHtml = movies.map(renderMovie).join("");
  return `
        <div class="justify-content-center">
            ${resultHtml}
        </div>
    `;
}

function renderMovie(movie) {
  return `
  <div class="border border-primary p-4 rounded bg-light d-flex justify-content-left align-items-start m-4 w-50">
    <div>
    <img src=${movie.poster} style="width:250px">
  </div>
  <div class="m-3 p-2 bg-white rounded">
  <h3>${movie.title}</h3>
  <h6>${movie.year}</h6>
  <br>
  <h4>IMDB:</h4>
  <h4>${movie.imdbRating} / 10</h4>
  <br>
  <h4>Rotten Tomatoes:</h4>
  <h4>${movie.rottenTomatoesRating * 100}%</h4>
</div>
</div>
  `;
}

function movies() {
  var content = document.getElementById("content");

  var moviesAbstraction = [
    {
      title: "The Dark Knight",
      year: 2008,
      imdbID: "tt0468569",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      imdbRating: 9,
      rottenTomatoesRating: 0.94
    },
    {
      title: "The Dark Knight Rises",
      year: 2012,
      imdbID: "tt1345836",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg",
      imdbRating: 8,
      rottenTomatoesRating: 0.82
    },
    {
      title: "The Incredibles",
      year: 2004,
      imdbID: "tt0317705",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg",
      imdbRating: 9,
      rottenTomatoesRating: 0.91
    }
  ];

  content.innerHTML = renderMovies(moviesAbstraction);
}
