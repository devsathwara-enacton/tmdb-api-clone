const axios = require("axios");
const TMDB_API_KEY = "e84a72fca7815b41c03fe50eacfa8df6";
let allMovies = [];

async function getAllMovies() {
  let currentPage = 1;

  while (true) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?page=${currentPage}&api_key=${TMDB_API_KEY}`
      );

      const pageMovies = response.data.results;

      if (pageMovies.length === 0) {
        // No more data, exit the loop
        break;
      }

      allMovies = [...allMovies, ...pageMovies];
      currentPage++;

      console.log(`Fetched data from page ${currentPage}`);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      break;
    }
  }

  console.log(`Fetched data from all pages. Total movies: ${allMovies.length}`);
}

// Call the function to get data from all pages
getAllMovies();
