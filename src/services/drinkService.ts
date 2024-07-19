import { DrinkResponse } from "../models/DrinkResponse";
import { ICompleteDrinkInfo } from "../models/IDrink";

import { fetchData } from "./drinkBase";

export const getDrinks = async (text: string): Promise<DrinkResponse> => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`;
  return fetchData<DrinkResponse>(url);
};

//export const getDrink = async (): Promise<DrinkInfoResponse> => {
//const url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;

// return fetchData<DrinkInfoResponse>(url);
//};

export const getRandom = async (): Promise<ICompleteDrinkInfo[]> => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;

  const response = await fetchData<{ drinks: ICompleteDrinkInfo[] }>(url);

  return response.drinks;
};
