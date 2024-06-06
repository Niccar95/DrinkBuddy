import { IDrink } from "../models/IDrink";
import { fetchData } from "./drinkBase";

export const getDrinks = async (): Promise<IDrink[]> => {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
  return fetchData<IDrink[]>(url);
};
