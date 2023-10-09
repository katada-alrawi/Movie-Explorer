const searchEl = document.querySelector("#search");

searchEl.addEventListener("keyup", async () => {
  const query = searchEl.value;

  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
  );
  const data = await response.json();

  // Display the search results
  const moviesEl = document.querySelector("#movies");
  moviesEl.innerHTML = "";

  for (const movie of data.results) {
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    const imgEl = document.createElement("img");
    imgEl.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    movieEl.appendChild(imgEl);

    const titleEl = document.createElement("h3");
    titleEl.textContent = movie.title;
    movieEl.appendChild(titleEl);

    moviesEl.appendChild(movieEl);
  }
});
