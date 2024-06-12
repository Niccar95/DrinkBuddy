import { IDrink } from "../models/IDrink";
import { Drink } from "./Drink";

interface IDrinksProps {
  drinks: IDrink[];
  addDrink: (drink: IDrink) => void;
}

export const Drinks = ({ drinks, addDrink }: IDrinksProps) => {
  return (
    <>
      <section id="drinkSection">
        {drinks.length > 0 &&
          drinks.map((drink) => (
            <Drink
              drink={drink}
              key={drink.idDrink}
              addDrink={addDrink}
            ></Drink>
          ))}
      </section>
    </>
  );
};
