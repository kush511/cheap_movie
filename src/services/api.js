const API_KEY = "dfaf05522f000bb6acb23fa5f159ee9e"
const BASE_URL =" https://api.themoviedb.org/3"



export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;  // Return the list of popular movies
};

export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
  const data = await response.json();
  return data.results;  // Return the search results
};

