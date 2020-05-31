import React, { useState, useMemo, FC } from "react";

import { ThemeProvider } from "theme-ui";
import { theme } from "./styles";

import Router from "./router";

import {
  initialState,
  initialMoviesCount,
  initialSearch,
  initialPage,
  IMovieSearchProvider,
  MovieSearchContext,
} from "./context";

const App: FC = () => {
  const [movies, setMovies] = useState<IMovies[]>(initialState);
  const [moviesCount, setMoviesCount] = useState<string>(initialMoviesCount);
  const [lastSearch, setLastSearch] = useState<string>(initialSearch);
  const [lastPage, setLastPage] = useState<string>(initialPage);

  const providerMovieSearch: IMovieSearchProvider = useMemo(
    () => ({
      lastSearch,
      setLastSearch,
      lastPage,
      setLastPage,
      moviesCount,
      setMoviesCount,
      movies,
      setMovies,
    }),
    [
      lastSearch,
      setLastSearch,
      lastPage,
      setLastPage,
      moviesCount,
      setMoviesCount,
      movies,
      setMovies,
    ],
  );

  return (
    <ThemeProvider theme={theme}>
      <MovieSearchContext.Provider value={providerMovieSearch}>
        <Router />
      </MovieSearchContext.Provider>
    </ThemeProvider>
  );
};

export default App;
