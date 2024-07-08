import { useDrink } from "../hooks/useDrink";

export const FavouritesPresentation = () => {
  const { removeDrinks, favouriteList } = useDrink();
  console.log(favouriteList);

  return (
    <>
      {favouriteList.length > 0 ? (
        favouriteList.map((drink) => (
          <div id="favouriteCard" key={drink.idDrink}>
            <h2>{drink.strDrink}</h2>
            <img src={drink.strDrinkThumb} alt={drink.strDrink} />
            <button onClick={() => removeDrinks(drink.idDrink)}>
              Remove from favourites
            </button>
          </div>
        ))
      ) : (
        <p>No drinks added to favourites yet.</p>
      )}
    </>
  );
};
