import { createContext, Dispatch, SetStateAction } from "react";

export interface IMoviesProvider {
  movies: IMovies[];
  setMovies: Dispatch<SetStateAction<IMovies[]>>;
}

export interface IMoviesCountProvider {
  moviesCount: string;
  setMoviesCount: Dispatch<SetStateAction<string>>;
}

export interface IMoviesCountProvider {
  moviesCount: string;
  setMoviesCount: Dispatch<SetStateAction<string>>;
}

export const initialState: IMovies[] = [];
export const initialMoviesCount = "";

export const MovieContext = createContext<IMoviesProvider>({
  movies: initialState,
  setMovies: () => [],
});

export const MovieCountContext = createContext<IMoviesCountProvider>({
  moviesCount: initialMoviesCount,
  setMoviesCount: () => "",
});
