import { useState } from "react"
import { IDrink } from "../models/IDrink";

export const useDrink = () => {
  const [drinks, setDrinks] = useState<IDrink[]>([]);

  //const findDrinks = (text: string) => {

  setDrinks([...drinks])

  }
}