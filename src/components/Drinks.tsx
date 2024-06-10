import { IDrink } from "../models/IDrink";

interface IMoviesProps {
  drinks: IDrink[];
}

export const Drinks = ({ drinks }: IMoviesProps) => {
  return (
    <>
      {drinks.length > 0 &&
        drinks.map((drink) => (
          <div key={drink.idDrink}>
            <h2>{drink.strDrink}</h2>
            <img
              src={drink.strDrinkThumb}
              alt={drink.strDrink}
              //onClick={() => handleAddToSelectedList(drink)}
            />
          </div>
        ))}
    </>
  );
};
