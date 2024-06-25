import { useParams } from "react-router-dom";
import { DrinkDetails } from "../components/DrinkDetails";
import { useFindDrink } from "../hooks/useFindDrink";
import { useState } from "react";

export const DrinkPage = () => {
  const { id } = useParams<{ id: string }>();
  const { findDrink, foundDrink } = useFindDrink();

  const [loading, setLoading] = useState<boolean>(false);

  if (id && !loading) {
    findDrink(id);
    setLoading(true);
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
