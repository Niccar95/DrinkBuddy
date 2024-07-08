import { useNavigate } from "react-router-dom";
import { IDrink } from "../models/IDrink";

interface IDrinkProps {
  drink: IDrink;
  addDrink: (drink: IDrink) => void;
  findDrink: (id: string) => void;
}

export const Drink = ({ drink, addDrink, findDrink }: IDrinkProps) => {
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
        <div className="drinkImg">
          <img
            src={drink.strDrinkThumb}
            alt={drink.strDrink}
            onClick={handleNavigation}
          />
        </div>
        <button onClick={handleAddDrink}>Add to favourites</button>
      </div>
    </>
  );
};
