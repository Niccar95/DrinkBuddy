import { IDrink } from "../models/IDrink";

interface IFoundDrinkProps {
  foundDrink: IDrink | undefined;
}

export const DrinkDetails = ({ foundDrink }: IFoundDrinkProps) => {
  console.log("Found Drink:", foundDrink);
  console.log("Drink Name:", foundDrink?.strDrink);
  return (
    <>
      <h1>{foundDrink?.strDrink}</h1>
      <img src={foundDrink?.strDrinkThumb} alt={foundDrink?.strDrink}></img>
    </>
  );
};
