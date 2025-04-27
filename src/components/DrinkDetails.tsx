import { ICompleteDrinkInfo } from "../models/IDrink";
import { DrinkInfo } from "./DrinkInfo";

interface IFoundDrinkProps {
  foundDrink: ICompleteDrinkInfo;
  addDrink: (drink: ICompleteDrinkInfo) => void;
  isDrinkAdded: (id: string) => boolean;
}

export const DrinkDetails = ({
  foundDrink,
  addDrink,
  isDrinkAdded,
}: IFoundDrinkProps) => {
  return (
    <>
      <DrinkInfo
        drink={foundDrink}
        addDrink={addDrink}
        isDrinkAdded={isDrinkAdded}
      />
    </>
  );
};
