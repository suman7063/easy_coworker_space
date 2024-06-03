import { useState, useEffect } from "react";
import { truncate } from "../utils";
import LoadingIcon from "../assets/LoadingIcon";

const Banner = ({ movie }: { movie: any }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.src = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
    image.onload = () => {
      setLoading(false);
    };
  }, [movie]);
  const { title, name, original_name, backdrop_path, overview, id } = movie;

  return (
    <>
      {loading ? (
        <div className="h-[500px] flex justify-center items-center">
          <LoadingIcon />
        </div>
      ) : (
        <div
          className="relative h-[70vh] bg-cover bg-center md:bg-top text-white flex flex-col justify-center px-4 py-8 mb-3"
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${backdrop_path}")`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          <div className="relative z-10">
            <h1 className="text-5xl font-bold mb-4">
              {title || name || original_name}
            </h1>
            <p className="max-w-md text-lg mb-4">{truncate(overview, 150)}</p>
            <div>
              <a
                className="bg-white text-black py-2 px-4 rounded mr-2"
                href={`https://www.themoviedb.org/movie/${id}`}
                target="_blank"
                rel="noreferrer"
              >
                Play
              </a>
              <button className="bg-gray-700 py-2 px-4 rounded">My List</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
