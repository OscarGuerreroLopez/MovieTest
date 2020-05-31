import React, { useState, useContext, useEffect } from "react";
import { Flex } from "rebass";

import { Intro } from "./intro";
import { MovieSearch } from "./movieSearch";
import { Movies } from "./movies";
import { axiosFetcher } from "../../utils/http";
import { MovieContext, MovieCountContext } from "../../context";

const Home = (): JSX.Element => {
  // const [params, setParams] = useState("");
  const [movieName, setMovieName] = useState("");
  const [pageNumber, setPageNumber] = useState("1");

  const { setMovies } = useContext(MovieContext);
  const { setMoviesCount } = useContext(MovieCountContext);

  const userSearch = async (
    name: string,
    page = "1",
  ): Promise<IObjectLiteral> => {
    const searchParams = `&s=${name}&type=movie&page=${page}`;
    try {
      const result = await axiosFetcher(searchParams, {
        method: "GET",
      });
      console.log("22222", result);

      const { Search, totalResults } = result;
      setMovies(Search);
      setMoviesCount(totalResults);

      return result;
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    console.log("11111", movieName);
    if (movieName) {
      userSearch(movieName, pageNumber);
    }
  }, [movieName, pageNumber]);

  return (
    <Flex justifyContent="center" flexWrap="wrap">
      <Intro />
      <MovieSearch setMovieName={setMovieName} setPageNumber={setPageNumber} />
      <Movies setPageNumber={setPageNumber} />
    </Flex>
  );
};

export default Home;
