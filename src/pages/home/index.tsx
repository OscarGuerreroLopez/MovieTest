import React from "react";
import { Flex } from "rebass";

import { Intro } from "./intro";
import { MovieSearch } from "./movieSearch";
import { Movies } from "./movies";
import { axiosFetcher } from "../../utils/http";

const Home = (): JSX.Element => {
  const UserSearch = async (params: string): Promise<IObjectLiteral> => {
    try {
      const result = await axiosFetcher(params, {
        method: "GET",
      });

      return result;
    } catch (error) {
      throw error;
    }
  };

  return (
    <Flex justifyContent="center" flexWrap="wrap">
      <Intro />
      <MovieSearch UserSearch={UserSearch} />
      <Movies />
    </Flex>
  );
};

export default Home;
