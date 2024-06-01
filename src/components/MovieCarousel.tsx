import React, { useRef, useState, useEffect } from "react";
import { Movie } from "../types/movie";
import MovieCard from "./MovieCard";

interface MovieCarouselProps {
  movies: Movie[];
}

const MovieCarousel = ({ movies }: { movies: any }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(true);
  const cardWidth = 300; // Adjust this value according to the actual width of MovieCard
  const updateButtonState = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
    }
  };
  const updateButtonStateFirst = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft + clientWidth > scrollWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.clientWidth;
      const scrollAmount = containerWidth * 0.8; // Example: Scroll by 80% of container width
      const newScrollLeft = Math.max(
        carouselRef.current.scrollLeft - scrollAmount,
        0
      );
      carouselRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
      updateButtonState();
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.clientWidth;
      const scrollAmount = containerWidth * 0.8; // Example: Scroll by 80% of container width
      const newScrollLeft = Math.min(
        carouselRef.current.scrollLeft + scrollAmount,
        carouselRef.current.scrollWidth - containerWidth
      );
      carouselRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
      updateButtonState();
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.addEventListener("scroll", updateButtonState);
      updateButtonStateFirst(); // Initial check
    }

    return () => {
      if (carouselRef.current) {
        carouselRef.current.removeEventListener("scroll", updateButtonState);
      }
    };
  }, []);

  return (
    <div className="relative">
      {!isAtStart && (
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white p-2 z-20 h-[200px] bg-gradient-to-r from-transparent  to-black"
          onClick={scrollLeft}
        >
          <svg
            className="w-10 h-10 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 8 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
            />
          </svg>
        </button>
      )}
      <div
        ref={carouselRef}
        className="flex overflow-x-hidden space-x-4 p-4"
        style={{ scrollBehavior: "smooth", width: "100%" }}
      >
        {movies.map((movie: any, index: number) => (
          <div key={movie.id} style={{ width: `${cardWidth}px` }}>
            <MovieCard movie={movie} cardWidth={cardWidth} />
          </div>
        ))}
      </div>
      {!isAtEnd && (
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2  text-white p-2 z-20  h-[200px] bg-gradient-to-l from-transparent  to-black"
          onClick={scrollRight}
        >
          <svg
            className="w-10 h-10 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 8 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default MovieCarousel;
