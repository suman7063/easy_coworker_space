import { useState, useEffect } from "react";
import { fetchMovies, fetchBannerMovieData } from "./api/index";
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import Pagination from "./components/Pagination";
import Banner from "./components/Banner";
import MovieCarousel from "./components/MovieCarousel";

const HomePage = () => {
  const [movies, setMovies] = useState({
    popularMovies: [],
    topRatedMovies: [],
    upComingMovies: [],
    nowPlayingMovies: [],
  });
  const [bannerMovie, setBannerMovie] = useState(null);

  useEffect(() => {
    async function fetchBannerMovie() {
      const movies = await fetchBannerMovieData();
      console.log(movies, "movies");
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
    }

    fetchBannerMovie();
  }, []);
  // release_date
  return (
    <div>
      {bannerMovie && <Banner movie={bannerMovie} />}
      {Object.entries(movies).map(([title, movieList]) => (
        <div key={title}>
          <h2 className="text-lg font-bold px-4">{title}</h2>
          <div>
            <MovieCarousel movies={movieList} />
          </div>
        </div>
      ))}
      {/* <MovieCarousel movies={movies} /> */}
      {/* <SearchBar setQuery={setQuery} />
      <Filters />
      <MovieList movies={movies} />
      
      <Pagination page={page} setPage={setPage} /> */}
    </div>
  );
};

export default HomePage;
