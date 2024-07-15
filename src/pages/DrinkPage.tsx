import { useParams } from "react-router-dom";
import { DrinkDetails } from "../components/DrinkDetails";
import { useFindDrink } from "../hooks/useFindDrink";
import { useState } from "react";
import { useDrink } from "../hooks/useDrink";

export const DrinkPage = () => {
  const { id } = useParams<{ id: string }>();
  const { findDrink, foundDrink } = useFindDrink();
  const { addDrinks, isDrinkAdded } = useDrink();

  const [loading, setLoading] = useState<boolean>(false);

  if (id && !loading) {
    findDrink(id);
    setLoading(true);
  }

  console.log(foundDrink?.strDrink);

  return (
    <>
      {foundDrink ? (
        <DrinkDetails
          foundDrink={foundDrink}
          addDrink={addDrinks}
          isDrinkAdded={isDrinkAdded}
        />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
