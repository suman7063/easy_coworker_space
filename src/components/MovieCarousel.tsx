import React, { useRef, useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import LeftArrow from "../assets/LeftArrow";
import RightArrow from "../assets/RightArrow";
import "../style/search.css";
const MovieCarousel = ({ movies }: { movies: any }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(true);
  const cardWidth = 300; // Adjust this value according to the actual width of MovieCard

  const updateButtonState = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setIsAtStart(scrollLeft === 0);
      if (scrollLeft < 1) {
        setIsAtEnd(scrollLeft + clientWidth > scrollWidth);
      } else {
        setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
      }
    }
  };

  const scrollLeftFunction = () => {
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.clientWidth;
      const scrollAmount = containerWidth * 0.8; // Scroll by 80% of container width
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
      updateButtonState();
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
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white p-2 z-20 h-[200px] bg-gradient-to-r from-transparent to-black hidden md:block"
          onClick={scrollLeftFunction}
        >
          <LeftArrow />
        </button>
      )}
      <div
        ref={carouselRef}
        className="flex overflow-x-auto space-x-1 p-4 md:overflow-x-hidden mobile-scroll-bar"
        style={{ scrollBehavior: "smooth", width: "100%" }}
      >
        {movies.map((movie: any) => (
          <div key={movie.id} style={{ width: `${cardWidth}px` }}>
            <MovieCard movie={movie} isCarousel />
          </div>
        ))}
      </div>
      {!isAtEnd && (
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white p-2 z-20 h-[200px] bg-gradient-to-l from-transparent to-black hidden md:block"
          onClick={scrollRight}
        >
          <RightArrow />
        </button>
      )}
    </div>
  );
};

export default MovieCarousel;
