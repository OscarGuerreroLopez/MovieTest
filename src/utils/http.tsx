import axios, { AxiosRequestConfig } from "axios";
import { EnvVars } from "./validateEnvs";

const headerConfig = (token: string, cancelToken = null): {} =>
  cancelToken
    ? { headers: { Authorization: `Bearer ${token}` }, cancelToken }
    : { headers: { Authorization: `Bearer ${token}` } };

export const axiosFetcher = async (
  url: string,
  config: AxiosRequestConfig = {},
  token?: string | undefined,
): Promise<IObjectLiteral> => {
  try {
    token && Object.assign(config, headerConfig(token));
    const { method } = config;

    const response = await axios({
      url: `${EnvVars.MOVIE_URL}/?apikey=${EnvVars.API_TOKEN}${url}`,
      responseType: "json",
      method,
      ...config,
    });

    console.log("CALL MADE!+++++++++++++++++", url);
    return response.data;
  } catch (error) {
    console.error("error in axiosFetcher", error);
    throw error;
  }
};
