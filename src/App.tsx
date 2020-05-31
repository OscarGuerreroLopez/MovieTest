import React, { useState, useMemo, FC } from "react";

import { ThemeProvider } from "theme-ui";
import { theme } from "./styles";

import Router from "./router";
import {
  MovieContext,
  MovieCountContext,
  initialState,
  initialMoviesCount,
  IMoviesProvider,
  IMoviesCountProvider,
  ILastSearch,
  initialSearch,
  LastSearchContext,
} from "./context";

const App: FC = () => {
  const [movies, setMovies] = useState<IMovies[]>(initialState);
  const [moviesCount, setMoviesCount] = useState<string>(initialMoviesCount);
  const [lastSearch, setLastSearch] = useState<string>(initialSearch);
  const [lastPage, setLastPage] = useState<string>(initialSearch);

  const providerMoviesValue: IMoviesProvider = useMemo(
    () => ({ movies, setMovies }),
    [movies, setMovies],
  );

  const providerMoviesCountValue: IMoviesCountProvider = useMemo(
    () => ({ moviesCount, setMoviesCount }),
    [moviesCount, setMoviesCount],
  );

  const providerLastSearch: ILastSearch = useMemo(
    () => ({ lastSearch, setLastSearch, lastPage, setLastPage }),
    [lastSearch, setLastSearch, lastPage, setLastPage],
  );

  return (
    <ThemeProvider theme={theme}>
      <MovieContext.Provider value={providerMoviesValue}>
        <MovieCountContext.Provider value={providerMoviesCountValue}>
          <LastSearchContext.Provider value={providerLastSearch}>
            <Router />
          </LastSearchContext.Provider>
        </MovieCountContext.Provider>
      </MovieContext.Provider>
    </ThemeProvider>
  );
};

export default App;
