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
              <div className="randomImageContainer">
                <img
                  className="randomDrinkImage"
                  src={drink.strDrinkThumb}
                  alt={drink.strDrink}
                ></img>
              </div>
              <section id="randomInfoSection">
                <h2>{drink.strDrink}</h2>
                <ul className="randomIngredientsList">
                  {ingredientKeys.map((key) => (
                    <li className="randomListItem" key={key}>
                      {drink[key as keyof ICompleteDrinkInfo]}
                    </li>
                  ))}
                </ul>

                <section id="randomInstructions">
                  <p className="randomDrinkInstructions">
                    {drink.strInstructions}
                  </p>
                </section>
              </section>
            </article>
          );
        })}
    </>
  );
};
