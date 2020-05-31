import React, { FC } from "react";
import { Flex, Box, Text, Button, Image } from "rebass";
import { useHistory } from "react-router-dom";

import { FavMovies } from "../../utils/favMovies";

export const MovieRows: FC<IMovies> = (props): JSX.Element => {
  const history = useHistory();

  const clickedDetails = (id: string): void => {
    history.push(`/details/${id}`);
  };

  const clickedFav = (item: string, title: string): void => {
    FavMovies({ item, title });
  };

  return (
    <Flex
      sx={{
        flexWrap: "wrap",
        mt: 2,
        borderRadius: 2,
        boxShadow: "0 0 16px rgba(0, 0, 0, .25)",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Text
        sx={{
          textAlign: "center",
          pt: 2,
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: ["1", "2", "3", "4", "5", "5", "6"],
          width: "100%",
        }}
      >
        {props.Title}
      </Text>
      <Flex
        sx={{
          width: ["100%"],
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: ["100%", "100%", "100%", "100%", "100%", "25%"],
          }}
        >
          <Image
            src={
              props.Poster !== "N/A"
                ? props.Poster
                : "https://sainfoinc.com/wp-content/uploads/2018/02/image-not-available.jpg"
            }
            sx={{
              width: ["100%"],
              borderRadius: 8,
              alignItems: "center",
            }}
          />
        </Box>
      </Flex>
      <Flex justifyContent="center" flexWrap="wrap">
        <Text
          sx={{
            textAlign: "center",
            pt: 2,
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: ["1", "2", "3", "4", "5", "5", "6"],
            width: "100%",
          }}
        >
          {props.Year}
        </Text>
      </Flex>
      <Flex justifyContent="center" width="100%" flexWrap="wrap">
        <Flex
          sx={{
            width: ["100%", "100%", "100%", "100%", "50%"],
            justifyContent: "center",
          }}
        >
          <Button onClick={(): void => clickedDetails(props.imdbID)}>
            Details
          </Button>
        </Flex>
        <Flex
          sx={{
            width: ["100%", "100%", "100%", "100%", "50%"],
            justifyContent: "center",
            mt: [3, 3, 3, 3, 0],
          }}
        >
          <Button onClick={(): void => clickedFav(props.imdbID, props.Title)}>
            Add to Favorites
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
