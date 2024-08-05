import { ICompleteDrinkInfo } from "../models/IDrink";

interface IDrinkInfoProps {
  drink: ICompleteDrinkInfo;
}

export const DrinkInfo = ({ drink }: IDrinkInfoProps) => {
  const ingredientKeys = Object.keys(drink).filter(
    (key) =>
      key.startsWith("strIngredient") && drink[key as keyof ICompleteDrinkInfo]
  );

  return (
    <article className="drinkDetailsCard" key={drink.idDrink}>
      <div className="imageContainer">
        <img
          className="drinkImage"
          src={drink.strDrinkThumb}
          alt={drink.strDrink}
        ></img>
      </div>
      <section className="infoSection">
        <h2>{drink.strDrink}</h2>
        <ul className="ingredientsList">
          {ingredientKeys.map((key) => (
            <li className="listItem" key={key}>
              {drink[key as keyof ICompleteDrinkInfo]}
            </li>
          ))}
        </ul>
        <section className="instructionSection">
          <p className="drinkInstructions">{drink.strInstructions}</p>
        </section>
      </section>
    </article>
  );
};
