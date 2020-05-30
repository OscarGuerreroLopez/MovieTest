import React from "react";
import { Text, Flex } from "rebass";

import { CustomCard } from "../../components";

const fontSize = ["1", "2", "2", "3", "4", "5"];

export const Intro = (): JSX.Element => {
  return (
    <CustomCard>
      <Flex justifyContent="center" flexWrap="wrap">
        <Text
          sx={{
            fontSize,
            fontWeight: "bold",
          }}
        >
          MOVIE VIEWER
        </Text>
        <Text
          sx={{
            fontSize,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Flex>
    </CustomCard>
  );
};
