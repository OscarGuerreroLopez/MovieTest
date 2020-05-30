import React, { useContext, useEffect, useState } from "react";

import { MovieContext } from "../../context";
import { Flex, Text } from "rebass";
import { v4 as uuidv4 } from "uuid";

import { CustomCard } from "../../components";
import { MovieRows, MovieHeader } from "./movieRow";

export const Movies = (): JSX.Element => {
  const { movies } = useContext(MovieContext);
  const [haveMovies, setHaveMovies] = useState(false);

  useEffect(() => {
    if (movies?.length > 0) {
      setHaveMovies(true);
    } else {
      setHaveMovies(false);
    }
  }, [movies]);

  return (
    <>
      {haveMovies && (
        <CustomCard>
          <Flex flexWrap="wrap">
            <Text
              sx={{
                fontSize: ["1", "2", "2", "3", "4", "5", "5"],
                fontWeight: "bold",
                width: "100%",
                textAlign: "center",
              }}
            >
              Movies
            </Text>
          </Flex>

          <Flex flexWrap="wrap">
            <MovieHeader />
            {movies?.map((movie: IMovies) => {
              return <MovieRows {...movie} key={uuidv4()} />;
            })}
          </Flex>
        </CustomCard>
      )}
    </>
  );
};
