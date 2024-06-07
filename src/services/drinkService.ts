import { DrinkResponse } from "../models/DrinkResponse";
import { fetchData } from "./drinkBase";

export const getDrinks = async (text: string): Promise<DrinkResponse> => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`;
  return fetchData<DrinkResponse>(url);
};
