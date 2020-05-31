export const FavMovies = (itemx: IObjectLiteral): void => {
  const localStorageValue: IObjectLiteral[] = JSON.parse(
    localStorage.getItem("movies")!,
  );

  if (itemx) {
    const { item, title } = itemx;

    const newItem: IObjectLiteral = {
      ...localStorageValue,
      ...{ [item]: title },
    };

    localStorage.setItem("movies", JSON.stringify(newItem));
  }
};
