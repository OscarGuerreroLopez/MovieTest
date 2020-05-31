import React, { FC } from "react";
import { Text, Flex } from "rebass";

import { CustomCard } from "../../components";

interface IProps {
  error: string;
  movie: string;
}
export const SearchError: FC<IProps> = ({ error, movie }): JSX.Element => {
  return (
    <CustomCard>
      <Flex justifyContent="center">
        <Text
          variant="osquitar.primary"
          sx={{
            fontSize: ["1", "2", "2", "3", "4", "5", "5"],
            fontWeight: "bold",
            width: "100%",
            textAlign: "center",
          }}
        >
          Search for {`"${movie}"`} returned this error: {error}...
        </Text>
      </Flex>
    </CustomCard>
  );
};
