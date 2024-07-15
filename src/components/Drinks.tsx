import { IDrink } from "../models/IDrink";
import { Drink } from "./Drink";

interface IDrinksProps {
  drinks: IDrink[];
  addDrink: (drink: IDrink) => void;
  findDrink: (id: string) => void;
  isDrinkAdded: (id: string) => boolean;
}

export const Drinks = ({
  drinks,
  addDrink,
  findDrink,
  isDrinkAdded,
}: IDrinksProps) => {
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
              isDrinkAdded={isDrinkAdded}
            ></Drink>
          ))}
      </section>
    </>
  );
};
