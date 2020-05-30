import React, { useState, FormEvent, useContext, KeyboardEvent } from "react";
import { Text, Flex, Box, Button } from "rebass";
import { Input } from "@rebass/forms";

import { CustomCard } from "../../components";
import { axiosFetcher } from "../../utils/http";
import { MovieContext } from "../../context";

export const MovieSearch = (): JSX.Element => {
  const [movie, setMovie] = useState("");
  const { setMovies } = useContext(MovieContext);
  const [axiosError, setAxiosError] = useState(false);
  const [noMovies, setNoMovies] = useState("");

  const onChange = (e: FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setMovie(e.currentTarget.value);
  };

  const noMoviesFound = (error: string): void => {
    console.log("@+++++@noMoviesFound", error);

    setNoMovies(error);
    setMovies([]);
  };

  const MoviesFound = (data: IMovies[]): void => {
    console.log("@+++++@MoviesFound");
    setNoMovies("");
    setMovies(data);
  };

  const onClick = async (): Promise<void> => {
    const params = `&s=${movie}&type=movie`;
    try {
      const result = await axiosFetcher(params, {
        method: "GET",
      });

      const { Response, Search, Error } = result;

      setAxiosError(false);
      Response === "False" ? noMoviesFound(Error) : MoviesFound(Search);
    } catch (error) {
      setAxiosError(true);
      console.log(error);
    }
  };

  return (
    <CustomCard>
      <Flex justifyContent="center" flexWrap="wrap">
        <Text
          sx={{
            fontSize: ["1", "2", "2", "3", "4", "5", "5"],
            fontWeight: "bold",
            width: "100%",
            textAlign: "center",
          }}
        >
          MOVIE SEARCH:
        </Text>
        <Flex flexWrap="wrap" width="80%">
          <Box
            sx={{
              width: ["100%", "100%", "100%", "100%", "100%", "25%", "25%"],
            }}
          >
            <Text
              sx={{
                textAlign: [
                  "center",
                  "center",
                  "center",
                  "center",
                  "center",
                  "right",
                ],
                mr: [0, 0, 0, 0, 0, 4, 4, 4],
                mb: [2, 2, 2, 2, 2, 0],
                fontSize: ["3", "4", "4", "4", "4", "5", "5", "5"],
              }}
            >
              Title:
            </Text>
          </Box>
          <Box
            sx={{
              width: ["100%", "100%", "100%", "100%", "100%", "50%", "50%"],
            }}
          >
            <Input
              id="movie"
              name="movie"
              type="movie"
              placeholder="Star Wars"
              onChange={onChange}
              onKeyDown={(e: KeyboardEvent<HTMLInputElement>): void => {
                if (e.keyCode === 13 || e.key === "Enter") {
                  onClick();
                } else {
                  setNoMovies("");
                }
              }}
            />
          </Box>
          <Box
            sx={{
              width: ["100%", "100%", "100%", "100%", "100%", "25%", "25%"],
            }}
          >
            <Flex
              sx={{
                justifyContent: [
                  "center",
                  "center",
                  "center",
                  "center",
                  "center",
                  "left",
                ],
                ml: [0, 0, 0, 0, 0, 4, 4, 4],
                mt: [3, 3, 3, 3, 3, 0, 0, 0],
              }}
            >
              <Button height="100%" onClick={onClick}>
                SEARCH
              </Button>
            </Flex>
          </Box>
        </Flex>
        {axiosError && (
          <Flex justifyContent="center">
            <Text
              variant="osquitar.secondary"
              sx={{
                fontSize: ["1", "2", "2", "3", "4", "5", "5"],
                fontWeight: "bold",
                width: "100%",
                textAlign: "center",
              }}
            >
              There was an error fetching the movies, please check console
            </Text>
          </Flex>
        )}
        {noMovies && (
          <Flex justifyContent="center" flexWrap="wrap">
            <Text
              variant="osquitar.primary"
              sx={{
                fontSize: ["1", "2", "2", "3", "4", "5", "5"],
                width: "100%",
                textAlign: "center",
              }}
            >
              Search for {`"${movie}"`} returned this error: {noMovies}...
            </Text>
            <Text
              sx={{
                fontSize: ["1", "2", "2", "3", "4", "5", "5"],
                width: "100%",
                textAlign: "center",
                color: "red",
                fontWeight: "bold",
              }}
            >
              Please redefine your search
            </Text>
          </Flex>
        )}
      </Flex>
    </CustomCard>
  );
};
