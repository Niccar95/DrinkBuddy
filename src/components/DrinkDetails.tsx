import { IDrink } from "../models/IDrink";

interface IFoundDrinkProps {
  foundDrink: IDrink;
  addDrink: (drink: IDrink) => void;
  isDrinkAdded: (id: string) => boolean;
}

export const DrinkDetails = ({
  foundDrink,
  addDrink,
  isDrinkAdded,
}: IFoundDrinkProps) => {
  console.log("Found Drink:", foundDrink);
  console.log("Drink Name:", foundDrink?.strDrink);

  const handleAddDrink = () => {
    addDrink(foundDrink);
  };
  return (
    <>
      <h1>{foundDrink?.strDrink}</h1>
      <img src={foundDrink.strDrinkThumb} alt={foundDrink.strDrink}></img>
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
