import { useState, useEffect } from "react";
import { formatDate, truncate } from "../utils";
import Calender from "../assets/Calender";

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
  return (
    <>
      <div
        className="relative bg-cover bg-center text-white flex flex-col justify-center py-8 px-4 rounded-lg"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${backdrop_path}")`,
          width: cardWidth,
          height: "200px",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg" />
        <div className="relative z-10">
          <h1 className="text-sm font-bold absolute top-[45px]">
            {truncate(title || name || original_name, 35)}
          </h1>
          <div className="flex absolute top-[70px] items-center">
            <Calender />
            <h1 className="text-xs ml-2">{formatDate(release_date)}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
