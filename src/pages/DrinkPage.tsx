import { useParams } from "react-router-dom";
import { DrinkDetails } from "../components/DrinkDetails";
import { useFindDrink } from "../hooks/useFindDrink";
import { useState } from "react";

export const DrinkPage = () => {
  const { id } = useParams<{ id: string }>();
  const { findDrink, foundDrink } = useFindDrink();

  const [loadedId, setLoadedId] = useState<string | null>(null);

  if (id && id !== loadedId) {
    findDrink(id);
    setLoadedId(id);
  }

  console.log(foundDrink?.strDrink);

  return (
    <>
      {foundDrink ? (
        <DrinkDetails foundDrink={foundDrink} />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
