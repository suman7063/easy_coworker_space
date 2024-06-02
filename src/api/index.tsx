import axios from "axios";
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMoviesByCategory = async (query: any) => {
  const response = await axios.get(`${BASE_URL}/movie/${query}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};

export const fetchMoviesByFilter = async (filterValues: {
  availabilities: any;
  genres: any;
}) => {
  const response = await axios.get(`${BASE_URL}/discover/movie`, {
    params: {
      api_key: API_KEY,
      with_genres: filterValues.genres.toString(),
      with_watch_monetization_types: filterValues.availabilities.join("|"),
    },
  });
  return response.data;
};

export const fetchMoviesBySearch = async (query: any, page: number) => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query,
      page,
    },
  });
  const results = response.data.results;
  const total_results = response.data.total_results;
  return { results: results, total_results: total_results };
};

export const fetchGenres = async () => {
  const response = await axios.get(`${BASE_URL}/genre/movie/list`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.genres;
};

export const fetchBannerMovieData = async () => {
  try {
    const urls = [
      `${BASE_URL}/movie/popular`,
      `${BASE_URL}/movie/top_rated`,
      `${BASE_URL}/movie/upcoming`,
      `${BASE_URL}/movie/now_playing`,
    ];
    // Array to store the promises
    const promises = urls.map((url) =>
      axios.get(url, {
        params: {
          api_key: API_KEY,
        },
      })
    );
    // Wait for all promises to resolve using Promise.all()
    const responses = await Promise.all(promises);

    // Extract the data from each response
    const moviesData = responses.map((response) => response.data.results);

    const [popularMovies, topRatedMovies, upComingMovies, nowPlayingMovies] =
      moviesData;

    return { popularMovies, topRatedMovies, upComingMovies, nowPlayingMovies };
  } catch (error) {
    console.error("Error fetching movies:", error);
    // If there's an error, return empty arrays for each category
    return {
      popularMovies: [],
      topRatedMovies: [],
      upComingMovies: [],
      nowPlayingMovies: [],
    };
  }
};
