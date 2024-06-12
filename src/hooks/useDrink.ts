import { useState, useEffect } from "react";
import { IDrink } from "../models/IDrink";

export const useDrink = () => {
  const [favouriteList, setDrinkList] = useState<IDrink[]>([]);

  useEffect(() => {
    const storedDrinkList = localStorage.getItem("favouriteList");
    if (storedDrinkList) {
      setDrinkList(JSON.parse(storedDrinkList));
    }
  }, []);

  const addDrinks = (drink: IDrink) => {
    const addedDrink = favouriteList.find((d) => d.idDrink === drink.idDrink);

    if (!addedDrink) {
      const newDrinkList = [...favouriteList, drink];
      setDrinkList(newDrinkList);
      localStorage.setItem("favouriteList", JSON.stringify(newDrinkList));
    }
  };

  return { addDrinks, favouriteList };
};
