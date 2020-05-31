import { createContext, Dispatch, SetStateAction } from "react";

export interface IMovieSearchProvider {
  movies: IMovies[];
  setMovies: Dispatch<SetStateAction<IMovies[]>>;
  moviesCount: string;
  setMoviesCount: Dispatch<SetStateAction<string>>;
  lastSearch: string;
  lastPage: string;
  setLastSearch: Dispatch<SetStateAction<string>>;
  setLastPage: Dispatch<SetStateAction<string>>;
}

export const initialState: IMovies[] = [];
export const initialMoviesCount = "";
export const initialSearch = "";
export const initialPage = "1";

export const MovieSearchContext = createContext<IMovieSearchProvider>({
  movies: initialState,
  setMovies: () => [],
  moviesCount: initialMoviesCount,
  setMoviesCount: () => "",
  lastSearch: initialSearch,
  setLastSearch: () => "",
  lastPage: initialPage,
  setLastPage: () => "",
});
