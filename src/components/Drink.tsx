import { NavLink, useNavigate } from "react-router-dom";
import { IDrink } from "../models/IDrink";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { toast } from "react-toastify";

interface IDrinkProps {
  drink: IDrink;
  addDrink: (drink: IDrink) => void;
  findDrink: (id: string) => void;
  isDrinkAdded: (id: string) => boolean;
}

export const Drink = ({
  drink,
  addDrink,
  findDrink,
  isDrinkAdded,
}: IDrinkProps) => {
  const navigate = useNavigate();

  const handleAddDrink = () => {
    addDrink(drink);
  };

  const handleNavigation = () => {
    navigate("/drink/" + drink.idDrink);
    findDrink(drink.idDrink);
  };

  const theme = useContext(ThemeContext);

  const notify = () => toast(`${drink.strDrink} was added to favourites`);

  return (
    <>
      <article
        id="drinkCard"
        style={{
          border: `${theme.borderStyle} 1px ${theme.borderColor}`,
          boxShadow: theme.shadow,
          backgroundColor: theme.cardBackground,
        }}
      >
        <h3 className="cardHeading">{drink.strDrink}</h3>
        <p className="drinkTag">{drink.strAlcoholic}</p>
        <div className="drinkImgContainer">
          <img
            src={drink.strDrinkThumb}
            alt={drink.strDrink}
            onClick={handleNavigation}
          />
        </div>

        <section className="actionSection">
          <NavLink
            className="readMoreLink"
            to={"/drink/" + drink.idDrink}
            style={{ color: theme.textColor }}
          >
            Read more
          </NavLink>
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
        </section>
      </article>
    </>
  );
};
