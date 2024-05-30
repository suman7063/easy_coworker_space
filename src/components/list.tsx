import React from "react";
import MovieCard from "./MovieCard";

const List = ({ movies }: { movies: any }) => {
  return (
    <div className="movie-list">
      {movies.map((movie: any) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default List;
