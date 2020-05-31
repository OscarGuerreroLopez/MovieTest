import React, { useState, useContext, useEffect } from "react";
import { Flex } from "rebass";

import { Intro } from "./intro";
import { MovieSearch } from "./movieSearch";
import { Movies } from "./movies";
import { SearchError } from "./searchError";
import { axiosFetcher, Source } from "../../utils/http";
import {
  MovieContext,
  MovieCountContext,
  LastSearchContext,
} from "../../context";

const Home = (): JSX.Element => {
  const [error, setError] = useState("");

  const [errorFound, setErrorFound] = useState(false);

  const { setMovies, movies } = useContext(MovieContext);
  const { setMoviesCount } = useContext(MovieCountContext);
  const { setLastSearch, lastSearch, lastPage, setLastPage } = useContext(
    LastSearchContext,
  );

  const userSearch = async (name: string, page = "1"): Promise<undefined> => {
    const searchParams = `&s=${name}&type=movie&page=${page}`;
    try {
      const result = await axiosFetcher(searchParams, {
        method: "GET",
      });

      const { Search, totalResults, Response, Error } = result;

      if (Response !== "False") {
        setMovies(Search);
        setMoviesCount(totalResults);
        setErrorFound(false);
      } else {
        setError(Error);
        setErrorFound(true);
      }

      return;
    } catch (error) {
      console.log(error);
      setError("Unable to fetch the movies, try again");
      setErrorFound(true);
      return;
    }
  };

  useEffect(() => {
    console.log("@@@@@1111", lastPage);
    console.log("@@@@2222", movies);
    console.log("@@@@@33333", lastSearch);

    if (lastSearch) {
      userSearch(lastSearch, lastPage);
    }
  }, [lastPage, lastSearch]);

  useEffect(() => {
    return (): void => {
      Source.cancel("Dont need you anymore thanks");
    };
  }, []);

  return (
    <Flex justifyContent="center" flexWrap="wrap">
      <Intro />
      <MovieSearch
        setMovieName={setLastSearch}
        setPageNumber={setLastPage}
        setErrorFound={setErrorFound}
      />
      <Movies setPageNumber={setLastPage} />
      {errorFound && <SearchError error={error} movie={lastSearch} />}
    </Flex>
  );
};

export default Home;
