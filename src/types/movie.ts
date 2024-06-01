// src/types/movie.ts

export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
}

export interface Genre {
    id: number;
    name: string;
}