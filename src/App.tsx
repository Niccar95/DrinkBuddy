import "./App.scss";
import { getDrinks } from "./services/drinkService";
import { IDrink } from "./models/IDrink";
import { useState } from "react";

import { Drinks } from "./components/Drinks";
import { SearchForm } from "./components/SearchForm";
//import { useDrink } from "./hooks/useDrink";

function App() {
  const [loading, setLoading] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [drinks, setDrinks] = useState<IDrink[]>([]);

  //const { drinkList, addDrinks } = useDrink();

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

  ///const handleAddToSelectedList = (drink: IDrink) => {
  ///addDrinks(drink);
  //};

  return (
    <>
      <SearchForm searchDrinks={getAllDrinks}></SearchForm>
      {loading && submit && <div>Loading...</div>}
      {!loading && drinks.length === 0 && submit && <p>No drinks found.</p>}
      <Drinks drinks={drinks}></Drinks>

      {
        //<div id="favourites">
        //{drinkList.map((d) => (
        //<div key={d.idDrink}>{d.strDrink}</div>
        //))}
        // </div>
      }
    </>
  );
}

export default App;
