import { DrinkResponse } from "../models/DrinkResponse";
import { fetchData } from "./drinkBase";

export const getDrinks = async (): Promise<DrinkResponse> => {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
  return fetchData<DrinkResponse>(url);
};
