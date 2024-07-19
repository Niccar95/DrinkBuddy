import { ICompleteDrinkInfo } from "../models/IDrink";

interface IRandomDrinkProps {
  randomDrink: ICompleteDrinkInfo[];
}

export const RandomDrink = ({ randomDrink }: IRandomDrinkProps) => {
  return (
    <>
      {randomDrink.length > 0 &&
        randomDrink.map((drink) => {
          const ingredientKeys = Object.keys(drink).filter(
            (key) =>
              key.startsWith("strIngredient") &&
              drink[key as keyof ICompleteDrinkInfo]
          );

          return (
            <article id="randomDrinkCard" key={drink.idDrink}>
              <div className="imageContainer">
                <img
                  className="randomDrinkImage"
                  src={drink.strDrinkThumb}
                  alt={drink.strDrink}
                ></img>
              </div>
              <section>
                <h2>{drink.strDrink}</h2>
                <ul>
                  {ingredientKeys.map((key) => (
                    <li key={key}>{drink[key as keyof ICompleteDrinkInfo]}</li>
                  ))}
                </ul>
                <p>{drink.strInstructions}</p>
              </section>
            </article>
          );
        })}
    </>
  );
};
