import React, { FC } from "react";
import { Flex, Box, Text } from "rebass";

export const MovieRows: FC<IMovies> = (props): JSX.Element => {
  return (
    <Flex
      flexWrap="wrap"
      sx={{
        width: "100%",
        mt: 2,
      }}
    >
      <Box width="20%">
        <Text
          textAlign="center"
          onClick={(): void => {
            console.log(props.Poster);
          }}
        >
          Preview
        </Text>
      </Box>
      <Box width="40%">
        <Text>{props.Title}</Text>
      </Box>
      <Box width="10%">
        <Text textAlign="center">{props.Year}</Text>
      </Box>
      <Box width="15%">
        <Text textAlign="center">Button</Text>
      </Box>
      <Box width="15%">
        <Text textAlign="center">button</Text>
      </Box>
    </Flex>
  );
};

export const MovieHeader: FC = (): JSX.Element => {
  return (
    <Flex
      flexWrap="wrap"
      sx={{
        width: "100%",
        mt: 2,
        mb: 2,
        borderColor: "black",
        border: 3,
      }}
    >
      <Box width="20%" />
      <Box width="40%">
        <Text textAlign="center">Title</Text>
      </Box>
      <Box width="10%">
        <Text textAlign="center">Year</Text>
      </Box>
      <Box width="15%">
        <Text textAlign="center">Details</Text>
      </Box>
      <Box width="15%">
        <Text textAlign="center">Add to favorites</Text>
      </Box>
    </Flex>
  );
};
