import { useState, useEffect } from "react";
import { fetchBannerMovieData } from "../api/index";
import Banner from "./Banner";
import MovieCarousel from "./MovieCarousel";
import { convertToTitleCase } from "../utils";
import HeaderNavbar from "./HeaderNav";

const HomePage = () => {
  const [movies, setMovies] = useState({
    popularMovies: [],
    topRatedMovies: [],
    upComingMovies: [],
    nowPlayingMovies: [],
  });
  const [scrollYValue, setScrollYValue] = useState(0);
  const [bannerMovie, setBannerMovie] = useState(null);

  const fetchMovieData = async () => {
    const movies = await fetchBannerMovieData();
    setBannerMovie(movies.popularMovies[10]);
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
  const handleScroll = () => {
    setScrollYValue(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <HeaderNavbar scrollYValue={scrollYValue} />
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
    </div>
  );
};

export default HomePage;
