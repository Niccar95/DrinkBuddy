import "./App.css";
import { getDrinks } from "./services/drinkService";
import { IDrink } from "./models/IDrink";
import { useState } from "react";
import { useDrink } from "./hooks/useDrink";

function App() {
  const { drinkList, addDrinks } = useDrink();
  const [drinks, setDrinks] = useState<IDrink[]>([]);
  const [fetchDone, setFetchDone] = useState(false);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAddToSelectedList = (drink: IDrink) => {
    addDrinks(drink);
  };

  console.log(drinkList);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const getAlldrinks = async () => {
      setLoading(true);

      try {
        const drinks = await getDrinks(text);
        setDrinks(drinks.drinks || []);
      } finally {
        setLoading(false);
      }
    };

    getAlldrinks();
    setFetchDone(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Search for drinks"
        ></input>
        <button disabled={loading}>
          {loading ? "Loading..." : "Find Drinks"}
        </button>
      </form>
      {fetchDone &&
        (drinks.length > 0 ? (
          drinks.map((drink) => (
            <div key={drink.idDrink}>
              <h2>{drink.strDrink}</h2>
              <img
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
                onClick={() => handleAddToSelectedList(drink)}
              />
            </div>
          ))
        ) : (
          <p>No drinks found.</p>
        ))}

      {drinkList.map((d) => (
        <div>{d.strDrink}</div>
      ))}
    </>
  );
}

export default App;
