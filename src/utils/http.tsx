// import { useContext } from "react";
import axios, { AxiosRequestConfig, CancelTokenSource } from "axios";
import { EnvVars } from "./validateEnvs";

export let Source: CancelTokenSource;

const newCancelToken = (): void => {
  Source = axios.CancelToken.source();
};

export const axiosFetcher = async (
  url: string,
  config: AxiosRequestConfig = {},
  // token?: string | undefined,
): Promise<IObjectLiteral> => {
  newCancelToken();
  try {
    config = { ...config, cancelToken: Source.token };

    const { method } = config;

    const response = await axios({
      url: `${EnvVars.MOVIE_URL}/?apikey=${EnvVars.API_TOKEN}${url}`,
      responseType: "json",
      method,
      ...config,
    });

    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log("Hola Majete, Axios se cancelo");
      // return { Search: movies, totalResults: moviesCount, Response: "True" };
      return { Response: "AxiosCancel" };
    } else {
      console.error("error in axiosFetcher", error);
      throw error;
    }
  }
};
