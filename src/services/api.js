const API_KEY = ""
const BASE_URL ="https://api.themoviedb.org/3"

export const getPopularMovies = async (page = 1) => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`);
  const data = await response.json();
  return {
    results: data.results,
    totalPages: data.total_pages,
    currentPage: data.page
  };
};

export const searchMovies = async (query, page = 1) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}`
  );
  const data = await response.json();
  return {
    results: data.results,
    totalPages: data.total_pages,
    currentPage: data.page
  };
};

