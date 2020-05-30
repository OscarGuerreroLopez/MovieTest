import { cleanEnv, str } from "envalid";

interface IEnvObject {
  MOVIE_URL: string;
  API_TOKEN: string;
}

const getEnvVars = (): IEnvObject => {
  const EnvVars = cleanEnv(process.env, {
    MOVIE_URL: str(),
    API_TOKEN: str(),
  });

  return EnvVars as IEnvObject;
};

export const EnvVars = getEnvVars();
