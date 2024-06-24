import { IDrink } from "../models/IDrink";
import { Drink } from "./Drink";

interface IDrinksProps {
  drinks: IDrink[];
  addDrink: (drink: IDrink) => void;
  findDrink: (id: string) => void;
}

export const Drinks = ({ drinks, addDrink, findDrink }: IDrinksProps) => {
  return (
    <>
      <section id="drinkSection">
        {drinks.length > 0 &&
          drinks.map((drink) => (
            <Drink
              drink={drink}
              key={drink.idDrink}
              addDrink={addDrink}
              findDrink={findDrink}
            ></Drink>
          ))}
      </section>
    </>
  );
};
