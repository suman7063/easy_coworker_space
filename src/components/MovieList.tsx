// import React from "react";
// import MovieCard from "./MovieCard";

// const List = ({ movies }: { movies: any }) => {
//   return (
//     <div className="movie-list">
//       {movies.map((movie: any) => (
//         <MovieCard key={movie.id} movie={movie} />
//       ))}
//     </div>
//   );
// };

// export default List;

// src/components/MovieList.js
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }: { movies: any }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Popular Movies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie: any) => (
          <MovieCard key={movie.id} movie={movie} cardWidth={300} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
