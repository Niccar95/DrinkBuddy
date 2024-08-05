import { ICompleteDrinkInfo } from "../models/IDrink";
import { DrinkInfo } from "./DrinkInfo";

interface IRandomDrinkProps {
  randomDrink: ICompleteDrinkInfo[];
}

export const RandomDrink = ({ randomDrink }: IRandomDrinkProps) => {
  return (
    <>
      {randomDrink.length > 0 &&
        randomDrink.map((drink) => (
          <DrinkInfo key={drink.idDrink} drink={drink} />
        ))}
    </>
  );
};
