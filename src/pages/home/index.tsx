import React from "react";
import { Flex } from "rebass";

import { Intro } from "./intro";
import { MovieSearch } from "./movieSearch";
import { Movies } from "./movies";

const Home = (): JSX.Element => {
  return (
    <Flex justifyContent="center" flexWrap="wrap">
      <Intro />
      <MovieSearch />
      <Movies />
    </Flex>
  );
};

export default Home;
