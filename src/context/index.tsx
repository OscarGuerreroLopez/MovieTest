import { createContext, Dispatch, SetStateAction } from "react";

export interface IMoviesProvider {
  movies: IMovies[];
  setMovies: Dispatch<SetStateAction<IMovies[]>>;
}

export interface IMoviesCountProvider {
  moviesCount: string;
  setMoviesCount: Dispatch<SetStateAction<string>>;
}

export interface ILastSearch {
  lastSearch: string;
  lastPage: string;
  setLastSearch: Dispatch<SetStateAction<string>>;
  setLastPage: Dispatch<SetStateAction<string>>;
}

// export interface IMoviesCountProvider {
//   moviesCount: string;
//   setMoviesCount: Dispatch<SetStateAction<string>>;
// }

export const initialState: IMovies[] = [];
export const initialMoviesCount = "";
export const initialSearch = "";
export const initialPage = "1";

export const MovieContext = createContext<IMoviesProvider>({
  movies: initialState,
  setMovies: () => [],
});

export const MovieCountContext = createContext<IMoviesCountProvider>({
  moviesCount: initialMoviesCount,
  setMoviesCount: () => "",
});

export const LastSearchContext = createContext<ILastSearch>({
  lastSearch: initialSearch,
  lastPage: initialPage,
  setLastPage: () => "",
  setLastSearch: () => "",
});
