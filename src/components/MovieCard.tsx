import { useState, useEffect } from "react";
import { formatDate, truncate } from "../utils";

const MovieCard = ({ movie, cardWidth }: { movie: any; cardWidth: number }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const image = new Image();
    image.src = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
    image.onload = () => {
      setLoading(false);
    };
  }, [movie]);
  const { title, name, original_name, backdrop_path, release_date } = movie;
  //
  return (
    <>
      <div
        className="relative bg-cover bg-center text-white flex flex-col justify-center p-8 rounded-lg"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${backdrop_path}")`,
          width: cardWidth,
          height: "200px",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg" />
        <div className="relative z-10">
          <h1 className="text-md font-bold absolute top-[45px]">
            {truncate(title || name || original_name, 25)}
          </h1>
          <h1 className="text-xs absolute top-[70px]">
            {formatDate(release_date)}
          </h1>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
