import { useContext, useState } from "react";
import { getRandom } from "../services/drinkService";
import { ICompleteDrinkInfo } from "../models/IDrink";
import { RandomDrink } from "../components/RandomDrink";
import { ThemeContext } from "../contexts/ThemeContext";

export const Home = () => {
  const [loading, setLoading] = useState(false);
  const [drink, setDrink] = useState<ICompleteDrinkInfo[]>([]);

  const { theme } = useContext(ThemeContext);

  const getRandomDrink = async () => {
    try {
      setLoading(true);
      const response = await getRandom();
      setDrink(response);

      console.log("Fetched drink successfully:", response);
    } catch (error) {
      console.error("Error fetching drink:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="content">
        <h1>Home</h1>
        <p className="intro-text">
          Welcome to <strong>DrinkBuddy</strong> 🍹 – your go-to for discovering
          new cocktails and mocktails! Feeling spontaneous? Click the dice to
          shake up a random drink suggestion.
        </p>
        <h3>
          Get Random Drink:{" "}
          <span className="dice">
            <i
              className="bi bi-dice-4"
              title="Click for a random drink!"
              onClick={getRandomDrink}
            ></i>
          </span>
        </h3>
        {loading && <div>Loading...</div>}
        <RandomDrink randomDrink={drink}></RandomDrink>
      </section>
      <aside
        className="sidebar-tips"
        style={{
          borderLeft: `${theme.borderStyle} 4px ${theme.asideBorderColor}`,
          color: theme.asideTextColor,
          backgroundColor: theme.asideBackground,
        }}
      >
        <h4>🍸 Pro Tips</h4>
        <ul>
          <li>
            Click the <i className="bi bi-dice-4"></i> to roll a random drink.
          </li>
          <li>
            Save your faves to the <strong>Favourites</strong> tab!
          </li>
          <li>Click on a drink for quick details.</li>
        </ul>
      </aside>
    </>
  );
};
