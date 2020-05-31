import React, { useState, useContext, useEffect } from "react";
import { Flex } from "rebass";

import { Intro } from "./intro";
import { MovieSearch } from "./movieSearch";
import { Movies } from "./movies";
import { SearchError } from "./searchError";
import { axiosFetcher, Source } from "../../utils/http";
import { MovieContext, MovieCountContext } from "../../context";

const Home = (): JSX.Element => {
  const [error, setError] = useState("");
  const [movieName, setMovieName] = useState("");
  const [pageNumber, setPageNumber] = useState("1");
  const [errorFound, setErrorFound] = useState(false);

  const { setMovies } = useContext(MovieContext);
  const { setMoviesCount } = useContext(MovieCountContext);

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
    if (movieName) {
      userSearch(movieName, pageNumber);
    }
  }, [movieName, pageNumber]);

  useEffect(() => {
    return (): void => {
      Source.cancel("Dont need you anymore thanks");
    };
  }, []);

  return (
    <Flex justifyContent="center" flexWrap="wrap">
      <Intro />
      <MovieSearch
        setMovieName={setMovieName}
        setPageNumber={setPageNumber}
        setErrorFound={setErrorFound}
      />
      <Movies setPageNumber={setPageNumber} />
      {errorFound && <SearchError error={error} movie={movieName} />}
    </Flex>
  );
};

export default Home;
