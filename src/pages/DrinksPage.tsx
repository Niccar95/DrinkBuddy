import { useEffect, useState } from "react";
import { IDrink } from "../models/IDrink";
import { getDrinks } from "../services/drinkService";
import { SearchForm } from "../components/SearchForm";
import { Drinks } from "../components/Drinks";
import { useDrink } from "../hooks/useDrink";
import { useFindDrink } from "../hooks/useFindDrink";
import { useLoaderData, useSearchParams } from "react-router-dom";
import { IDrinkLoader } from "../loader/drinkLoader";

export const DrinksPage = () => {
  const { loadedDrinks } = useLoaderData() as IDrinkLoader;
  const { addDrinks, isDrinkAdded } = useDrink();
  const { findDrink } = useFindDrink();
  const [loading, setLoading] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [drinks, setDrinks] = useState<IDrink[]>(loadedDrinks || []);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") || "";

  useEffect(() => {
    if (query) {
      getAllDrinks(query);
    }
  }, [query]);

  const getAllDrinks = async (text: string) => {
    try {
      setLoading(true);
      setSubmit(true);

      const drinkData = JSON.parse(
        localStorage.getItem("storedDrinks") || "[]"
      ) as IDrink[];
      console.log("Stored Drinks JSON:", drinkData);

      if (drinkData.length > 0) {
        console.log("Got drinks from localStorage:", drinkData.length);
      } else {
        const response = await getDrinks(text);

        setDrinks(response.drinks || []);
        localStorage.setItem("storedDrinks", JSON.stringify(response));

        console.log("Fetched drinks successfully:", response.drinks);
      }
    } catch (error) {
      console.error("Error fetching drinks:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="pageTitle">Search for drinks</h1>
      <SearchForm
        searchDrinks={(text) => setSearchParams({ query: text })}
      ></SearchForm>
      {loading && submit && <div>Loading...</div>}
      {!loading && drinks.length === 0 && submit && <p>No drinks found.</p>}
      <Drinks
        drinks={drinks}
        addDrink={addDrinks}
        findDrink={findDrink}
        isDrinkAdded={isDrinkAdded}
      ></Drinks>
    </>
  );
};
