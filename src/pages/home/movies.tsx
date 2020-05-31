import React, { useContext, useEffect, useState, KeyboardEvent } from "react";

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
  const [numberPages, setNumberPages] = useState("0");
  const [pageSelected, setPageSelected] = useState("1");

  useEffect(() => {
    if (movies?.length > 0) {
      setHaveMovies(true);
    } else {
      setHaveMovies(false);
    }
  }, [movies]);

  useEffect(() => {
    moviesCount
      ? setNumberPages(Math.ceil(parseInt(moviesCount) / 10).toString())
      : 0;
  }, [moviesCount]);

  useEffect(() => {
    setPageSelected("1");
  }, [numberPages]);

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
              flexWrap="wrap"
              sx={{
                width: ["80%", "80%", "80%", "70%", "60%"],
              }}
            >
              <Text
                sx={{
                  width: ["100%", "100%", "100%", "100%", "50%"],
                  textAlign: "center",
                  mt: 2,
                  mr: 2,
                }}
              >
                Page {pageSelected} of {numberPages}
              </Text>
              <Flex
                sx={{
                  width: ["100%", "100%", "100%", "100%", "48%"],
                }}
              >
                <Text
                  sx={{
                    width: "50%",
                    textAlign: "right",
                    mt: 2,
                    mr: 2,
                  }}
                >
                  Go to page:
                </Text>
                <Input
                  sx={{
                    width: ["20%", "20%", "20%", "20%", "48%"],
                    textAlign: "left",
                  }}
                  // placeholder={pageSelected.toString()}
                  // defaultValue={pageSelected.toString()}
                  onKeyDown={(e: KeyboardEvent<HTMLInputElement>): void => {
                    if (e.keyCode === 13 || e.key === "Enter") {
                      if (e.currentTarget.value > numberPages) {
                        setPageSelected(numberPages);
                      } else {
                        setPageSelected(e.currentTarget.value);
                      }
                    }
                  }}
                />
              </Flex>

              {/* <Text
                sx={{
                  width: ["33%"],
                  textAlign: "center",
                  mt: 2,
                }}
              >
                of {numberPages}
              </Text> */}
            </Flex>
          </Flex>
        </CustomCard>
      )}
    </>
  );
};
