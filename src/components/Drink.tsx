import { IDrink } from "../models/IDrink";

interface IDrinkProps {
  drink: IDrink;
  addDrink: (drink: IDrink) => void;
}

export const Drink = ({ drink, addDrink }: IDrinkProps) => {
  const handleAddDrink = () => {
    addDrink(drink); // Call the addDrink function with the selected drink
  };

  return (
    <>
      <div id="drinkCard">
        <h2>{drink.strDrink}</h2>
        <div id="drinkImg">
          <img src={drink.strDrinkThumb} alt={drink.strDrink} />
        </div>
        <button onClick={handleAddDrink}>Add to favourites</button>
      </div>
    </>
  );
};
