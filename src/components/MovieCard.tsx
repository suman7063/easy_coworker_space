import { useState, useEffect } from "react";
import { formatDate, truncate } from "../utils";
import Calender from "../assets/Calender";
import FavouriteIcon from "../assets/FavouriteIcon";
import SolidFavouriteIcon from "../assets/SolidFavouriteIcon";

const MovieCard = ({
  movie,
  isCarousel,
}: {
  movie: any;
  isCarousel?: boolean;
}) => {
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const favoriteMovies = JSON.parse(localStorage.getItem("favorites") || "[]");
  useEffect(() => {
    const image = new Image();
    image.src = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
    image.onload = () => {
      setLoading(false);
    };
  }, [movie]);

  useEffect(() => {
    setIsFavorite(favoriteMovies.some((fav: any) => fav.id === movie.id));
  }, [favoriteMovies, movie.id]);

  const toggleFavorite = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    let newFavorites;
    if (isFavorite) {
      newFavorites = favorites.filter((fav: any) => fav.id !== movie.id);
    } else {
      newFavorites = [...favorites, movie];
    }
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
  };
  const { title, name, original_name, backdrop_path, release_date, id } = movie;
  return (
    <>
      <a
        className={`relative  ${
          isCarousel ? "w-[150px] lg:w-[300px]" : "w-[100%]"
        } h-[120px] lg:h-[200px] bg-cover bg-center text-white flex flex-col justify-center py-8 px-4 rounded-lg`}
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${backdrop_path}")`,
          backgroundColor: "#fff",
        }}
        href={`https://www.themoviedb.org/movie/${id}`}
        target="_blank"
        rel="noreferrer"
      >
        <div
          className="absolute top-0 right-0 z-40 cursor-pointer"
          onClick={toggleFavorite}
        >
          {isFavorite ? <SolidFavouriteIcon /> : <FavouriteIcon />}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg" />
        <div className="relative z-10 top-[30px] left-[-10px] lg:left-0 lg:top-[60px]">
          <h1
            className={`text-xs lg:text-sm font-normal lg:font-bold w-[150px] lg:w-[100%] truncate `}
          >
            {title || name || original_name}
          </h1>
          <div className="flex items-center">
            <Calender />
            <h1 className="text-xs ml-2">{formatDate(release_date)}</h1>
          </div>
        </div>
      </a>
    </>
  );
};

export default MovieCard;
