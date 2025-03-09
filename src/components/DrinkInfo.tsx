import { useContext } from "react";
import { ICompleteDrinkInfo } from "../models/IDrink";
import { ThemeContext } from "../contexts/ThemeContext";

interface IDrinkInfoProps {
  drink: ICompleteDrinkInfo;
}

export const DrinkInfo = ({ drink }: IDrinkInfoProps) => {
  const ingredientKeys = Object.keys(drink).filter(
    (key) =>
      key.startsWith("strIngredient") && drink[key as keyof ICompleteDrinkInfo]
  );

  const theme = useContext(ThemeContext);

  return (
    <article
      className="drinkDetailsCard"
      key={drink.idDrink}
      style={{
        border: `${theme.borderStyle} 1px ${theme.borderColor}`,
        boxShadow: theme.shadow,
        backgroundColor: theme.cardBackground,
      }}
    >
      <div className="imageContainer">
        <img
          className="drinkImage"
          src={drink.strDrinkThumb}
          alt={drink.strDrink}
        ></img>
        <p className="drinkTag">{drink.strAlcoholic}</p>
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
