import { useContext, useEffect, useState } from "react";
import { IDrink } from "../models/IDrink";
import { getDrinks } from "../services/drinkService";
import { SearchForm } from "../components/SearchForm";
import { Drinks } from "../components/Drinks";
import { useDrink } from "../hooks/useDrink";
import { useFindDrink } from "../hooks/useFindDrink";
import { useLoaderData, useSearchParams } from "react-router-dom";
import { IDrinkLoader } from "../loader/drinkLoader";
import { useFilterDrinks } from "../hooks/useFilterDrinks";
import { ThemeContext } from "../contexts/ThemeContext";

export const DrinksPage = () => {
  const { loadedDrinks } = useLoaderData() as IDrinkLoader;
  const { theme } = useContext(ThemeContext);
  const { addDrinks, isDrinkAdded } = useDrink();
  const { findDrink } = useFindDrink();
  const [loading, setLoading] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [drinks, setDrinks] = useState<IDrink[]>(loadedDrinks || []);
  const [searchParams, setSearchParams] = useSearchParams();
  const [allDrinks, setAllDrinks] = useState<IDrink[]>(loadedDrinks || []);

  const [nonAlcoholicOnly, setNonAlcoholicOnly] = useState(false);

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
        setAllDrinks(drinkData);
        console.log("Got drinks from localStorage:", drinkData.length);
      } else {
        const response = await getDrinks(text);

        setAllDrinks(response.drinks || []);
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

  const { filterDrinks } = useFilterDrinks(allDrinks);

  const handleFilterChange = (checked: boolean) => {
    setNonAlcoholicOnly(checked);
    const filtered = filterDrinks(checked);
    setDrinks(filtered);
  };

  return (
    <section className="content">
      <h1>Search for drinks</h1>
      <SearchForm
        searchDrinks={(text) => setSearchParams({ query: text })}
        filterDrinks={handleFilterChange}
        nonAlcoholicOnly={nonAlcoholicOnly}
      ></SearchForm>
      {loading && submit && <div>Loading...</div>}
      {!loading && drinks.length === 0 && submit && (
        <div className="wrapper">
          <div className="imageWrapper">
            <img
              className="cocktailImage"
              src={`/src/assets/cocktails-${theme.name}.png`}
              alt="Cocktails"
            ></img>
          </div>
          <p>No drinks found.</p>
        </div>
      )}
      <Drinks
        drinks={drinks}
        addDrink={addDrinks}
        findDrink={findDrink}
        isDrinkAdded={isDrinkAdded}
      ></Drinks>
    </section>
  );
};
