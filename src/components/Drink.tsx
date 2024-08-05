import { NavLink, useNavigate } from "react-router-dom";
import { IDrink } from "../models/IDrink";

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

  return (
    <>
      <div id="drinkCard">
        <h2>{drink.strDrink}</h2>
        <div className="drinkImgContainer">
          <img
            src={drink.strDrinkThumb}
            alt={drink.strDrink}
            onClick={handleNavigation}
          />
        </div>
        <NavLink to={"/drink/" + drink.idDrink}>Read more</NavLink>
        <button onClick={handleAddDrink} disabled={isDrinkAdded(drink.idDrink)}>
          {isDrinkAdded(drink.idDrink)
            ? "Added to Favourites"
            : "Add to Favourites"}
        </button>
      </div>
    </>
  );
};
