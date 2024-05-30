// src/services/movieService.js
import axios from "axios";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (query: any, page = 1) => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query,
      page,
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
