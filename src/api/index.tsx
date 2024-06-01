// src/services/movieService.js
import axios from "axios";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMoviesByFilter = async (query: any, page = 1) => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query,
    },
  });
  return response.data;
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
