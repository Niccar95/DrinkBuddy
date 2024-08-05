import { useDrink } from "../hooks/useDrink";
import { ICompleteDrinkInfo } from "../models/IDrink";
import { DrinkInfo } from "./DrinkInfo";

export const FavouritesPresentation = () => {
  const { removeDrinks, favouriteList } = useDrink();
  console.log(favouriteList);

  const completeFavouritesList = favouriteList as ICompleteDrinkInfo[];
  return (
    <>
      {completeFavouritesList.length > 0 ? (
        completeFavouritesList.map((drink) => (
          <>
            <div key={drink.idDrink}>
              <DrinkInfo drink={drink} />
              <button onClick={() => removeDrinks(drink.idDrink)}>
                Remove from favourites
              </button>
            </div>
          </>
        ))
      ) : (
        <p>No drinks added to favourites yet.</p>
      )}
    </>
  );
};
