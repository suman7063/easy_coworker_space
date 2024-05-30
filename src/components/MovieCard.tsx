import React from "react";

const MovieCard = ({ movie }: { movie: any }) => {
  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <p>{movie.release_date}</p>
    </div>
  );
};

export default MovieCard;
