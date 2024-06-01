import { useState, useEffect } from "react";
import { fetchBannerMovieData } from "./api/index";

import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import Pagination from "./components/Pagination";
import Banner from "./components/Banner";
import MovieCarousel from "./components/MovieCarousel";
import { convertToTitleCase } from "./utils";
import HeaderNavbar from "./components/HeaderNav";
import Search from "./components/Search";

const HomePage = () => {
  const [movies, setMovies] = useState({
    popularMovies: [],
    topRatedMovies: [],
    upComingMovies: [],
    nowPlayingMovies: [],
  });
  const [bannerMovie, setBannerMovie] = useState(null);

  const fetchMovieData = async () => {
    const movies = await fetchBannerMovieData();
    setBannerMovie(
      movies.popularMovies[
        Math.floor(Math.random() * movies.popularMovies.length)
      ]
    );
    setMovies({
      popularMovies: movies.popularMovies,
      topRatedMovies: movies.topRatedMovies,
      upComingMovies: movies.upComingMovies,
      nowPlayingMovies: movies.nowPlayingMovies,
    });
  };
  useEffect(() => {
    fetchMovieData();
  }, []);
  return (
    <div>
      <HeaderNavbar />
      {bannerMovie && <Banner movie={bannerMovie} />}
      {Object.entries(movies).map(([title, movieList]) => (
        <div key={title}>
          <h2 className="text-lg font-bold px-4 text-white">
            {convertToTitleCase(title)}
          </h2>
          <div>
            <MovieCarousel movies={movieList} />
          </div>
        </div>
      ))}
      {/* <Search /> */}
      {/* <MovieCarousel movies={movies} /> */}
      {/* <SearchBar setQuery={setQuery} />
      <Filters />
      <MovieList movies={movies} />
      
      <Pagination page={page} setPage={setPage} /> */}
    </div>
  );
};

export default HomePage;
