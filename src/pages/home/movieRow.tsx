import React, { FC } from "react";
import { Flex, Box, Text } from "rebass";

interface IProps extends IMovies {
  key: string;
}

export const MovieRows: FC<IProps> = (props): JSX.Element => {
  return (
    <Flex
      flexWrap="wrap"
      key={props.key}
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
      <Box width="20%">
        <Text textAlign="center">{props.Title}</Text>
      </Box>
      <Box width="20%">
        <Text textAlign="center">{props.Year}</Text>
      </Box>
      <Box width="20%">
        <Text textAlign="center">Button</Text>
      </Box>
      <Box width="20%">
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
      }}
    >
      <Box width="20%">
        <Text textAlign="center"></Text>
      </Box>
      <Box width="20%">
        <Text textAlign="center">Title</Text>
      </Box>
      <Box width="20%">
        <Text textAlign="center">Year</Text>
      </Box>
      <Box width="20%">
        <Text textAlign="center">Details</Text>
      </Box>
      <Box width="20%">
        <Text textAlign="center">Add to favorite</Text>
      </Box>
    </Flex>
  );
};
