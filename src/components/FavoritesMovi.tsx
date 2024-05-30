// src/components/Favorites.js
import React, { useState, useEffect } from "react";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites =
      JSON.parse(localStorage.getItem("favorites") || "") || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFavorite = (movieId: any) => {
    const updatedFavorites = favorites.filter(
      ({ movie }: { movie: any }) => movie.id !== movieId
    );
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="favorites">
      <h2>Favorite Movies</h2>
      <ul>
        {favorites.map(({ movie }: { movie: any }) => (
          <li key={movie.id}>
            {movie.title}
            <button onClick={() => removeFavorite(movie.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
