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
  const handleAddDrink = () => {
    addDrink(foundDrink);
  };
  return (
    <>
      <DrinkInfo drink={foundDrink} />
      <button
        onClick={handleAddDrink}
        disabled={isDrinkAdded(foundDrink.idDrink)}
      >
        {isDrinkAdded(foundDrink.idDrink)
          ? "Added to Favourites"
          : "Add to Favourites"}
      </button>
    </>
  );
};
