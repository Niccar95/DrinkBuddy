import { DrinkResponse } from "../models/DrinkResponse";
import { IDrink } from "../models/IDrink";

export interface IDrinkLoader {
  loadedDrinks: IDrink[];
}

export const drinkLoader = async (): Promise<IDrinkLoader> => {
  const response = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=gin"
  );

  const data: DrinkResponse = await response.json();

  const drinkData: IDrinkLoader = { loadedDrinks: data.drinks };

  localStorage.setItem("storedDrinks", JSON.stringify(data));

  return drinkData;
};
