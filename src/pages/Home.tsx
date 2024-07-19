import { useEffect, useState } from "react";
import { getRandom } from "../services/drinkService";
import { ICompleteDrinkInfo } from "../models/IDrink";
import { RandomDrink } from "../components/RandomDrink";

export const Home = () => {
  const [loading, setLoading] = useState(false);
  const [drink, setDrink] = useState<ICompleteDrinkInfo[]>([]);

  useEffect(() => {
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
    getRandomDrink();
  }, []);

  return (
    <>
      <h1>Home page</h1>
      {loading && <div>Loading...</div>}
      <RandomDrink randomDrink={drink}></RandomDrink>
    </>
  );
};
