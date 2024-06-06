import { useEffect, useState } from "react";
import "./App.css";
import { getDrinks } from "./services/drinkService";
import { IDrink } from "./models/IDrink";

function App() {
  const [drinks, setDrinks] = useState<IDrink[]>([]);
  const [fetchDone, setFetchDone] = useState(false);

  const getAlldrinks = async () => {
    const drinks = await getDrinks();

    setDrinks(drinks.drinks);
    setFetchDone(true);
  };

  useEffect(() => {
    if (fetchDone) {
      return;
    }
    getAlldrinks();
  });

  return (
    <>
      {drinks.map((drink) => (
        <div key={drink.idDrink}>
          <h2>{drink.strDrink}</h2>
          <img src={drink.strDrinkThumb} alt={drink.strDrink}></img>
        </div>
      ))}
    </>
  );
}

export default App;
