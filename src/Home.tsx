import React, { useState, useEffect } from "react";
import { fetchMovies } from "./api/index";
import MovieList from "./components/list";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import Pagination from "./components/Pagination";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchMovies(query, page);
      setMovies(data.results);
    };
    getMovies();
  }, [query, page]);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <Filters />
      <MovieList movies={movies} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default HomePage;
