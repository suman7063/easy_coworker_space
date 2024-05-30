// src/components/Filters.js
import React, { useState, useEffect } from "react";
import { fetchGenres } from "../api/index";

const Filters = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [yearRange, setYearRange] = useState([2000, 2024]);
  const [ratingRange, setRatingRange] = useState([0, 10]);

  useEffect(() => {
    const getGenres = async () => {
      const genres = await fetchGenres();
      setGenres(genres);
    };
    getGenres();
  }, []);

  return (
    <div className="filters">
      <select onChange={(e) => setSelectedGenre(e.target.value)}>
        <option value="">All Genres</option>
        {genres.map(({ id, name }: { id: number; name: string }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
      <div>
        <label>Year Range:</label>
        <input
          type="range"
          min="1900"
          max="2024"
          value={yearRange as any}
          onChange={(e: any) => setYearRange([e.target.value, yearRange[1]])}
        />
        <input
          type="range"
          min="1900"
          max="2024"
          value={yearRange as any}
          onChange={(e: any) => setYearRange([yearRange[0], e.target.value])}
        />
      </div>
      <div>
        <label>Rating Range:</label>
        <input
          type="range"
          min="0"
          max="10"
          value={ratingRange as any}
          onChange={(e: any) =>
            setRatingRange([e.target.value, ratingRange[1]])
          }
        />
        <input
          type="range"
          min="0"
          max="10"
          value={ratingRange as any}
          onChange={(e: any) =>
            setRatingRange([ratingRange[0], e.target.value])
          }
        />
      </div>
    </div>
  );
};

export default Filters;
