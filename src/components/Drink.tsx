import { NavLink, useNavigate } from "react-router-dom";
import { IDrink } from "../models/IDrink";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

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

  return (
    <>
      <div
        id="drinkCard"
        style={{
          borderStyle: theme.borderStyle,
          borderColor: theme.borderColor,
        }}
      >
        <h2>{drink.strDrink}</h2>
        <div className="drinkImgContainer">
          <img
            src={drink.strDrinkThumb}
            alt={drink.strDrink}
            onClick={handleNavigation}
          />
          <p className="drinkTag">{drink.strAlcoholic}</p>
        </div>
        <NavLink
          className="readMoreLink"
          to={"/drink/" + drink.idDrink}
          style={{ color: theme.textColor }}
        >
          Read more
        </NavLink>
        <button onClick={handleAddDrink} disabled={isDrinkAdded(drink.idDrink)}>
          {isDrinkAdded(drink.idDrink)
            ? "Added to Favourites"
            : "Add to Favourites"}
        </button>
      </div>
    </>
  );
};
