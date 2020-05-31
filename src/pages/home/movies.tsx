import React, { useContext, useEffect, useState } from "react";

import { MovieContext, MovieCountContext } from "../../context";
import { Flex, Text } from "rebass";
import { Input } from "@rebass/forms";

import { v4 as uuidv4 } from "uuid";

import { CustomCard } from "../../components";
import { MovieRows } from "./movieRow";

export const Movies = (): JSX.Element => {
  const { movies } = useContext(MovieContext);
  const { moviesCount } = useContext(MovieCountContext);
  const [haveMovies, setHaveMovies] = useState(false);
  const [numberPages, setNumberPages] = useState(0);
  const [pageSelected, setPageSelected] = useState(1);

  useEffect(() => {
    if (movies?.length > 0) {
      setHaveMovies(true);
    } else {
      setHaveMovies(false);
    }
  }, [movies]);

  useEffect(() => {
    moviesCount ? setNumberPages(Math.ceil(parseInt(moviesCount) / 10)) : 0;
  }, [moviesCount]);

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
              Movie Result:
            </Text>
          </Flex>

          <Flex flexWrap="wrap">
            {/* <MovieHeader /> */}
            {movies?.map((movie: IMovies) => {
              return <MovieRows {...movie} key={uuidv4()} />;
            })}
          </Flex>
          <Flex justifyContent="center" flexWrap="wrap" mt="3" mb="5">
            <Flex
              sx={{
                width: ["80%", "80%", "80%", "70%", "60%", "40%"],
              }}
            >
              <Text
                sx={{
                  width: ["33%"],
                  textAlign: "center",
                  mt: 2,
                }}
              >
                Page{" "}
              </Text>
              <Input
                sx={{
                  width: ["33%"],
                  textAlign: "center",
                }}
                value={pageSelected}
              />

              <Text
                sx={{
                  width: ["33%"],
                  textAlign: "center",
                  mt: 2,
                }}
              >
                of {numberPages}
              </Text>
            </Flex>
          </Flex>
        </CustomCard>
      )}
    </>
  );
};
