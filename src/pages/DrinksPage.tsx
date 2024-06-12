import { useState } from "react";
import { IDrink } from "../models/IDrink";
import { getDrinks } from "../services/drinkService";
import { SearchForm } from "../components/SearchForm";
import { Drinks } from "../components/Drinks";
import { useDrink } from "../hooks/useDrink";

export const DrinksPage = () => {
  const { addDrinks } = useDrink();
  const [loading, setLoading] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [drinks, setDrinks] = useState<IDrink[]>([]);

  const getAllDrinks = async (text: string) => {
    try {
      setLoading(true);
      const response = await getDrinks(text);
      setDrinks(response.drinks || []);
      setSubmit(true);
    } catch (error) {
      console.error("Error fetching drinks:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SearchForm searchDrinks={getAllDrinks}></SearchForm>
      {loading && submit && <div>Loading...</div>}
      {!loading && drinks.length === 0 && submit && <p>No drinks found.</p>}
      <Drinks drinks={drinks} addDrink={addDrinks}></Drinks>
    </>
  );
};
