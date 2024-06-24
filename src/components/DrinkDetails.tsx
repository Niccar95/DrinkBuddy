import { IDrink } from "../models/IDrink";

interface IFoundDrinkProps {
  foundDrink: IDrink | undefined;
}

export const DrinkDetails = ({ foundDrink }: IFoundDrinkProps) => {
  console.log("Found Drink:", foundDrink); // Log to check the foundDrink object
  console.log("Drink Name:", foundDrink?.strDrink); // Log to check the drink's name
  return (
    <>
      <h1>{foundDrink?.strDrink}</h1>
    </>
  );
};
