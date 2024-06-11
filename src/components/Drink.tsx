import { IDrink } from "../models/IDrink";

interface IDrinkProps {
  drink: IDrink;
}

export const Drink = ({ drink }: IDrinkProps) => {
  return (
    <>
      <div id="drinkCard">
        <h2>{drink.strDrink}</h2>
        <div id="drinkImg">
          <img
            src={drink.strDrinkThumb}
            alt={drink.strDrink}
            //onClick={() => handleAddToSelectedList(drink)}
          />
        </div>
        <button>Add to favourites</button>
      </div>
    </>
  );
};
