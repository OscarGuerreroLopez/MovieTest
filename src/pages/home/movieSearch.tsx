import React, { useState, FormEvent, KeyboardEvent, FC } from "react";
import { Text, Flex, Box, Button } from "rebass";
import { Input } from "@rebass/forms";

import { CustomCard } from "../../components";

interface IProps {
  setMovieName: (name: string) => void;
  setPageNumber: (page: string) => void;
  setErrorFound: (error: boolean) => void;
}

export const MovieSearch: FC<IProps> = ({
  setMovieName,
  setPageNumber,
  setErrorFound,
}): JSX.Element => {
  const [movie, setMovie] = useState("");

  const onChange = (e: FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setMovie(e.currentTarget.value);
    setErrorFound(false);
  };

  const onClick = async (): Promise<void> => {
    setMovieName(movie);
    setPageNumber("1");
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
                  setMovieName("");
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
      </Flex>
    </CustomCard>
  );
};
