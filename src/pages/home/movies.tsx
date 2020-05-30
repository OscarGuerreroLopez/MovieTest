import React, { useContext, useEffect, useState } from "react";

import { MovieContext } from "../../context";
import { Flex, Text } from "rebass";

import { CustomCard } from "../../components";

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

          <Flex>
            {movies?.map((movie: IMovies) => {
              return <Text key={movie.imdbID}>{movie.Title}</Text>;
            })}
          </Flex>
        </CustomCard>
      )}
    </>
  );
};
