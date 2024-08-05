import { useState } from "react";
import { ICompleteDrinkInfo, IDrink } from "../models/IDrink";

export const useFindDrink = () => {
  const storedData = JSON.parse(localStorage.getItem("storedDrinks") || "{}");
  const [foundDrink, setFoundDrink] = useState<
    ICompleteDrinkInfo | undefined
  >();

  const storedDrinks = storedData.drinks || [];

  console.log("Stored Drinks:", storedDrinks);

  const findDrink = (id: string) => {
    const drink = storedDrinks.find((d: IDrink) => d.idDrink === id);

    if (drink !== undefined) {
      setFoundDrink(drink);
      console.log("Found drink:", drink);
    }
  };

  return { findDrink, foundDrink };
};
