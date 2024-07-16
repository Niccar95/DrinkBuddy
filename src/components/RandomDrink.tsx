import { IDrink } from "../models/IDrink";

interface IRandomDrinkProps {
  randomDrink: IDrink[];
}

export const RandomDrink = ({ randomDrink }: IRandomDrinkProps) => {
  return (
    <>
      {randomDrink.length > 0 &&
        randomDrink.map((drink) => (
          <div key={drink.idDrink}>
            <h2>{drink.strDrink}</h2>
            <img src={drink.strDrinkThumb} alt={drink.strDrink}></img>
          </div>
        ))}
    </>
  );
};
