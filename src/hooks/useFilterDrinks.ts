import { IDrink } from "../models/IDrink";

export const useFilterDrinks = (initialDrinks: IDrink[]) => {
  const filterDrinks = (nonAlcoholicOnly: boolean) => {
    return nonAlcoholicOnly
      ? initialDrinks.filter((drink) => drink.strAlcoholic !== "Alcoholic")
      : initialDrinks;
  };

  return { filterDrinks };
};
