import "./App.css";
import { getDrinks } from "./services/drinkService";
import { IDrink } from "./models/IDrink";
import { useState } from "react";

function App() {
  const [drinks, setDrinks] = useState<IDrink[]>([]);
  const [fetchDone, setFetchDone] = useState(false);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

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
              <img src={drink.strDrinkThumb} alt={drink.strDrink} />
            </div>
          ))
        ) : (
          <p>No drinks found.</p>
        ))}
    </>
  );
}

export default App;
