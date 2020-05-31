import React, { useState, useEffect } from "react";
import { Flex, Text, Image, Button } from "rebass";
import { withRouter } from "react-router";
import { axiosFetcher, Source } from "../../utils/http";
import { CustomCard, SearchError } from "../../components";

const Details = withRouter(
  (props): JSX.Element => {
    const [movieData, setMovieData] = useState<IObjectLiteral>({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const [errorFound, setErrorFound] = useState(false);

    const id = props.match.params.id;

    useEffect(() => {
      return (): void => {
        Source.cancel("Dont need you anymore thanks");
      };
    }, []);

    useEffect(() => {
      const searchMovie = async (): Promise<void> => {
        const searchParams = `&i=${id}`;
        try {
          const result = await axiosFetcher(searchParams, {
            method: "GET",
          });

          setMovieData(result);
        } catch (error) {
          console.log(error);
          setError("Unable to fetch the movies, try again");
          setErrorFound(true);
        }
      };
      setIsLoading(true);
      searchMovie();
      setIsLoading(false);
    }, [id]);

    return (
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
          Details page:
        </Text>
        {!isLoading && (
          <CustomCard>
            <Flex width="100" justifyContent="center">
              <Image
                src={
                  movieData.Poster !== "N/A"
                    ? movieData.Poster
                    : "https://sainfoinc.com/wp-content/uploads/2018/02/image-not-available.jpg"
                }
                sx={{
                  width: ["100%", "100%", "100%", "100%", "60%"],
                  borderRadius: 8,
                }}
              />
            </Flex>
            <Flex width="100%" justifyContent="center" flexWrap="wrap">
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
                {movieData.Title}
              </Text>

              <Text
                sx={{
                  textAlign: "center",
                  pt: 2,
                  cursor: "pointer",
                  fontSize: ["1", "2", "3", "4", "5", "5", "6"],
                  width: "100%",
                }}
              >
                Actors: {movieData.Actors}
              </Text>
              <Text
                sx={{
                  textAlign: "center",
                  pt: 2,
                  cursor: "pointer",
                  fontSize: ["1", "2", "3", "4", "5", "5", "6"],
                  width: "100%",
                }}
              >
                Director: {movieData.Director}
              </Text>
            </Flex>
            <Flex justifyContent="center" m="4">
              <Button>Add to favorites</Button>
            </Flex>
          </CustomCard>
        )}
        {errorFound && <SearchError error={error} movie={movieData.Title} />}
      </Flex>
    );
  },
);

export default Details;
