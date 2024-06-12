import { useEffect, useState } from "react";

import { IDrink } from "../models/IDrink";

export const FavouritesPresentation = () => {
  const [favouriteList, setDrinkList] = useState<IDrink[]>([]);
  console.log(favouriteList);

  useEffect(() => {
    const storedDrinkList = localStorage.getItem("favouriteList");
    if (storedDrinkList) {
      setDrinkList(JSON.parse(storedDrinkList));
    }
  }, []);

  return (
    <>
      {favouriteList.length > 0 ? (
        favouriteList.map((drink) => (
          <div key={drink.idDrink}>
            <h2>{drink.strDrink}</h2>
            <img src={drink.strDrinkThumb} alt={drink.strDrink} />
          </div>
        ))
      ) : (
        <p>No drinks added to favourites yet.</p>
      )}
    </>
  );
};
