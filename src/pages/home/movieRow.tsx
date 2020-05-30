import React, { FC } from "react";
import { Flex, Box, Text, Button } from "rebass";

export const MovieRows: FC<IMovies> = (props): JSX.Element => {
  return (
    <Flex
      flexWrap="wrap"
      sx={{
        width: "100%",
        mt: 2,
        borderRadius: 2,
        boxShadow: "0 0 16px rgba(0, 0, 0, .25)",
      }}
    >
      <Box
        sx={{
          width: ["100%", "100%", "100%", "100%", "100%", "20%"],
        }}
      >
        <Text
          sx={{
            textAlign: "center",
            pt: 2,
            cursor: "pointer",
            fontSize: ["1", "2", "3", "4", "5", "3", "4"],
          }}
          onClick={(): void => {
            console.log(props.Poster);
          }}
        >
          Preview
        </Text>
      </Box>
      <Box
        sx={{
          width: ["80%", "80%", "80%", "80%", "70%", "45%"],
          justifyContent: "center",
        }}
      >
        <Text
          sx={{
            pt: "2",
            textAlign: [
              "center",
              "center",
              "center",
              "center",
              "center",
              "left",
            ],
            fontSize: ["1", "1", "1", "2", "2", "2", "3"],
          }}
        >
          {props.Title}
        </Text>
      </Box>
      <Box
        sx={{
          width: ["20%", "20%", "20%", "20%", "30%", "5%"],
        }}
      >
        <Text
          sx={{
            pt: "2",
            textAlign: [
              "center",
              "center",
              "center",
              "center",
              "center",
              "left",
            ],
            fontSize: ["1", "1", "1", "2", "2", "3", "4"],
          }}
        >
          {props.Year}
        </Text>
      </Box>

      <Flex
        sx={{
          width: ["50%", "50%", "50%", "50%", "50%", "15%"],
          justifyContent: "center",
          mt: [4, 4, 4, 4, 4, 0],
          mb: [4, 4, 4, 4, 4, 0],
        }}
      >
        <Button>Details</Button>
      </Flex>
      <Flex
        sx={{
          width: ["50%", "50%", "50%", "50%", "50%", "15%"],
          justifyContent: "center",
          mt: [4, 4, 4, 4, 4, 0],
          mb: [4, 4, 4, 4, 4, 0],
        }}
      >
        <Button>Add Favorite</Button>
      </Flex>
    </Flex>
  );
};

// export const MovieHeader: FC = (): JSX.Element => {
//   return (
//     <Flex
//       flexWrap="wrap"
//       sx={{
//         width: "100%",
//         mt: 2,
//         mb: 2,
//         borderColor: "black",
//         border: 3,
//       }}
//     >
//       <Box width="20%" />
//       <Box width="40%">
//         <Text textAlign="center">Title</Text>
//       </Box>
//       <Box width="10%">
//         <Text textAlign="center">Year</Text>
//       </Box>
//       <Box width="15%">
//         <Text textAlign="center">Details</Text>
//       </Box>
//       <Box width="15%">
//         <Text textAlign="center">Add to favorites</Text>
//       </Box>
//     </Flex>
//   );
// };
