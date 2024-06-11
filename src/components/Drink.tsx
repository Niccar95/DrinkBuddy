import { IDrink } from "../models/IDrink";

interface IDrinkProps {
  drink: IDrink;
}

export const Drink = ({ drink }: IDrinkProps) => {
  return (
    <>
      <div>
        <h2>{drink.strDrink}</h2>
        <img
          src={drink.strDrinkThumb}
          alt={drink.strDrink}
          //onClick={() => handleAddToSelectedList(drink)}
        />
      </div>
    </>
  );
};
