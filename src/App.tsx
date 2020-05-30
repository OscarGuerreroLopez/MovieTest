import React, { useState, useMemo, FC } from "react";

import { ThemeProvider } from "theme-ui";
import { theme } from "./styles";

import Router from "./router";
import { MovieContext, initialState, IMoviesProvider } from "./context";

const App: FC = () => {
  const [movies, setMovies] = useState<IMovies[]>(initialState);

  const providerMoviesValue: IMoviesProvider = useMemo(
    () => ({ movies, setMovies }),
    [movies, setMovies],
  );

  return (
    <ThemeProvider theme={theme}>
      <MovieContext.Provider value={providerMoviesValue}>
        <Router />
      </MovieContext.Provider>
    </ThemeProvider>
  );
};

export default App;
