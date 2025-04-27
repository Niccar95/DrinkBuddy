import { useContext } from "react";
import { ICompleteDrinkInfo } from "../models/IDrink";
import { ThemeContext } from "../contexts/ThemeContext";
import { toast } from "react-toastify";

interface IDrinkInfoProps {
  drink: ICompleteDrinkInfo;
  addDrink?: (drink: ICompleteDrinkInfo) => void;
  isDrinkAdded?: (id: string) => boolean;
}

export const DrinkInfo = ({
  drink,
  addDrink,
  isDrinkAdded,
}: IDrinkInfoProps) => {
  const ingredientKeys = Object.keys(drink).filter(
    (key) =>
      key.startsWith("strIngredient") && drink[key as keyof ICompleteDrinkInfo]
  );

  const { theme } = useContext(ThemeContext);

  const notify = () => toast(`🍹 – ${drink.strDrink} was added to favourites`);

  const handleAddDrink = () => {
    if (addDrink !== undefined) {
      addDrink(drink);
    }
  };

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

      {addDrink !== undefined && isDrinkAdded !== undefined && (
        <button
          onClick={() => {
            handleAddDrink();
            notify();
          }}
          disabled={isDrinkAdded(drink.idDrink)}
          className="favButton"
          title={
            isDrinkAdded(drink.idDrink)
              ? "Already in favourites"
              : "Add to favourites"
          }
        >
          <i
            className={
              isDrinkAdded(drink.idDrink) ? "bi bi-star-fill" : "bi bi-star"
            }
          ></i>
        </button>
      )}
    </article>
  );
};
