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
} from "./context";

const App: FC = () => {
  const [movies, setMovies] = useState<IMovies[]>(initialState);
  const [moviesCount, setMoviesCount] = useState<string>(initialMoviesCount);

  const providerMoviesValue: IMoviesProvider = useMemo(
    () => ({ movies, setMovies }),
    [movies, setMovies],
  );

  const providerMoviesCountValue: IMoviesCountProvider = useMemo(
    () => ({ moviesCount, setMoviesCount }),
    [moviesCount, setMoviesCount],
  );

  return (
    <ThemeProvider theme={theme}>
      <MovieContext.Provider value={providerMoviesValue}>
        <MovieCountContext.Provider value={providerMoviesCountValue}>
          <Router />
        </MovieCountContext.Provider>
      </MovieContext.Provider>
    </ThemeProvider>
  );
};

export default App;
