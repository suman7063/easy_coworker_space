import { useState, useEffect, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
import "../style/search.css";
import FilterIcon from "../assets/FilterIcon";
import HeaderNavbar from "./HeaderNav";
import { fetchMoviesBySearch, fetchGenres, fetchMoviesByFilter } from "../api";
import MovieCard from "./MovieCard";
import FilterItem from "./FilterItem";
import { language, availabilities } from "./utils";
import {
  FilterListWithCheckbox,
  FilterListWithTag,
} from "./SearchListCheckbox";

interface Item {
  // Add other properties based on your actual data structure
  title: string;
  name: string;
  original_name: string;
  backdrop_path: string;
  release_date: string;
  id: string;
}
const Search = () => {
  const [loading, setLoading] = useState(false);
  const [scrollYValue, setScrollYValue] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const [openFilterMenu, setOpenFilterMenu] = useState(false);
  const location = useLocation();
  const { id } = useParams();
  const isSearchPath = location.pathname.includes("search");
  const [filterValues, setFilterValues] = useState({
    language: "",
    availabilities: [],
    genres: [],
  });
  const [moviesData, setMoviesData] = useState<Item[]>([]);
  const [genresData, setGenresData] = useState([]);

  const getMovieDetails = async () => {
    setLoading(true);
    let movie: any;
    if (isSearchPath) {
      movie = await fetchMoviesBySearch(id, page, filterValues.language);
    } else {
      movie = await fetchMoviesByFilter(id);
    }
    setMoviesData((prevMovies) => [...prevMovies, ...movie.results]);
    setTotalResults(movie.total_results);
    setLoading(false);
  };

  const fetchGenresDetails = async () => {
    const genre = await fetchGenres();
    setGenresData(genre);
  };

  useEffect(() => {
    fetchGenresDetails();
  }, []);

  //  Handle infinite Scroll
  useEffect(() => {
    getMovieDetails();
  }, [id, page, filterValues]);

  const handleScroll = () => {
    if (loading) return;
    setScrollYValue(window.scrollY);
    if (window.innerHeight + window.scrollY > document.body.offsetHeight) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);

  return (
    <>
      <HeaderNavbar scrollYValue={scrollYValue} />
      <div
        className={`block lg:flex relative top-12 md:top-20 max-w-[1400px] m-auto px-4 md:px-16 pb-8 md:pb:0 ${
          openFilterMenu ? "h-[100vh]" : ""
        }`}
      >
        {!isSearchPath && (
          <>
            <div className="flex items-center lg:hidden md:w-10/12 mt-8">
              <div
                className="h-[40px]  w-[100px] bg-gray-200 flex items-center justify-between rounded  px-4 z-0"
                onClick={() => setOpenFilterMenu(!openFilterMenu)}
              >
                <p className="text-black text-md">Filter </p>
                <FilterIcon />
              </div>
              <p className="text-lg font-normal text-white ml-4">
                {totalResults} Result Found
              </p>
            </div>

            <div
              className={
                openFilterMenu
                  ? `w-[100%] pt-11 pb-4 z-50 px-2 md:w-[400px] h-[93vh] text-center overflow-hidden fixed bottom-0 left-0 rounded-t-lg bg-gray-100 animate-slideUp animated`
                  : "lg:w-1/4 lg:mt-0 lg:py-0 hidden lg:block"
              }
            >
              <div className="h-[40px] bg-gray-200 justify-between px-4 items-center rounded flex w-full">
                <p className="text-black text-md">Filter </p>
                <p
                  className="text-black text-sm cursor-pointer lg:hidden"
                  onClick={() => {
                    setOpenFilterMenu(!openFilterMenu);
                    setFilterValues({
                      language: "",
                      availabilities: [],
                      genres: [],
                    });
                  }}
                >
                  Reset
                </p>
                <p
                  className="text-black text-sm cursor-pointer hidden lg:block"
                  onClick={() => {
                    setFilterValues({
                      language: "",
                      availabilities: [],
                      genres: [],
                    });
                  }}
                >
                  Reset
                </p>
              </div>
              <div className="h-[70vh] md:h-[75vh] lg:h-full overflow-auto">
                <div className="p-4 bg-white rounded border mt-4w-full mt-4">
                  <FilterItem
                    items={language}
                    title="Language"
                    setFilterValues={setFilterValues}
                    filterValues={filterValues}
                    keyValue="language"
                  />
                </div>
                <div className="p-4 bg-white rounded border mt-4w-full mt-4">
                  <FilterListWithCheckbox
                    items={availabilities}
                    title="Availabilities"
                    setFilterValues={setFilterValues}
                    filterValues={filterValues}
                    keyValue="availabilities"
                  />
                </div>
                <div className="p-4 bg-white rounded border mt-4w-full mt-4">
                  <FilterListWithTag
                    items={genresData}
                    title="Genres"
                    setFilterValues={setFilterValues}
                    filterValues={filterValues}
                    keyValue="genres"
                  />
                </div>
              </div>

              <button
                onClick={() => {
                  setOpenFilterMenu(!openFilterMenu);
                }}
                type="button"
                className="text-white bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2 text-center mt-0 md:mt-4 w-[90%] max-w-[500px] absolute bottom-6 left-[5%] lg:hidden"
              >
                Search
              </button>
            </div>
          </>
        )}

        <div
          className={
            isSearchPath
              ? `w-full mx-auto`
              : `w-full md:w-10/12 lg:w-9/12 lg:pl-4 mx-auto`
          }
        >
          <div className="mt-5 lg:mt-0">
            <p className="text-lg font-normal text-white mb-4">
              {totalResults} Result Found
            </p>
          </div>
          <div
            className={
              isSearchPath
                ? `grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-4 md:mt-0`
                : `grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-3 gap-4 mt-8 md:mt-0`
            }
          >
            {moviesData.map((movie: any, index: number) => (
              <MovieCard movie={movie} cardWidth="100%" key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Search;
