import { createContext, Dispatch, SetStateAction } from "react";

export interface IMoviesProvider {
  movies: IMovies[];
  setMovies: Dispatch<SetStateAction<IMovies[]>>;
}

export const initialState: IMovies[] = [];

export const MovieContext = createContext<IMoviesProvider>({
  movies: initialState,
  setMovies: () => [],
});
