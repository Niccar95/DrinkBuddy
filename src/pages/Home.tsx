import { useEffect, useState } from "react";
import { getDrink } from "../services/drinkService";
import { IDrink } from "../models/IDrink";
import { RandomDrink } from "../components/RandomDrink";

export const Home = () => {
  const [loading, setLoading] = useState(false);
  const [drink, setDrink] = useState<IDrink[]>([]);

  useEffect(() => {
    const getRandomDrink = async () => {
      try {
        setLoading(true);
        const response = await getDrink();
        setDrink(response.drinks || []);

        console.log("Fetched drink successfully:", response.drinks);
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
