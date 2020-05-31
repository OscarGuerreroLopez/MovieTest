import React, { useState, useContext, useEffect } from "react";
import { Flex } from "rebass";

import { Intro } from "./intro";
import { MovieSearch } from "./movieSearch";
import { Movies } from "./movies";
import { SearchError } from "../../components";
import { axiosFetcher, Source } from "../../utils/http";
import { MovieSearchContext } from "../../context";

const Home = (): JSX.Element => {
  const [error, setError] = useState("");
  const [errorFound, setErrorFound] = useState(false);
  const [errorString, setErrorString] = useState("");

  const {
    setMovies,
    setMoviesCount,
    setLastSearch,
    lastSearch,
    lastPage,
    setLastPage,
  } = useContext(MovieSearchContext);

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
        setErrorString(lastSearch);
        setLastPage("1");
        setLastSearch("");
        setMoviesCount("0");
        setMovies([]);
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
      {errorFound && <SearchError error={error} movie={errorString} />}
    </Flex>
  );
};

export default Home;
