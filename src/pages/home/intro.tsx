import React from "react";
import { Text, Flex } from "rebass";

import { CustomCard } from "../../components";

const fontSize = ["1", "2", "2", "3", "3", "4"];

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
          Bienvenido a la prueba de buscador de películas. To start searching
          for movies, please enter the title in the input box below and hit
          enter or the Search button.
        </Text>
        <br />
        <Text
          sx={{
            fontSize,
          }}
        >
          Once you get the results, you can scroll all the way down to keep on
          searching for more movies. Just enter the page number you want and hit
          enter, the app will display the new search results.
        </Text>
        <Text
          sx={{
            fontSize,
          }}
        >
          You can add favourite movies to the local storage or see more details
          about a movie. Unfortunately I didn’t have a lot of time to work on
          this, but I have tried to make the site as responsive as I could for
          the amount of time I was able to dedicate. I used theme-ui and rebass
        </Text>
        <br />
        <Text
          sx={{
            fontSize,
          }}
        >
          For the requests I used Axios, with a cancel token in case that the
          user changes pages before the axios response arrives. Please don’t
          forget to add the .env file following the .env.example
        </Text>
        <Text
          sx={{
            fontSize,
          }}
        >
          Also, instead of using redux or mobx to store the data I decided to go
          with the context instead, basically to try to finish it on time.
          Everything I did is arguable, of course, and always eager to get
          feedback, just bear in mind that this is was done over this weekend
          whenever I was able to scape from other tasks I have :-) Please feel
          free to contact me if you have any questions
        </Text>
      </Flex>
    </CustomCard>
  );
};
