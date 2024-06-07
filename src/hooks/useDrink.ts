import { useState } from "react";
import { IDrink } from "../models/IDrink";

export const useDrink = () => {
  const [drinkList, setDrinks] = useState<IDrink[]>([]);

  const addDrinks = (drink: IDrink) => {
    setDrinks([...drinkList, drink]);
  };

  return { drinkList, addDrinks };
};
