export {};

declare global {
  interface IObjectLiteral {
    [key: string]: any;
  }

  interface IMovies {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
  }
}
