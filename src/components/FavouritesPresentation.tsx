import { useDrink } from "../hooks/useDrink";

export const FavouritesPresentation = () => {
  const { removeDrinks, favouriteList } = useDrink();
  console.log(favouriteList);

  return (
    <>
      {favouriteList.length > 0 ? (
        favouriteList.map((drink) => (
          <article id="favouriteCard" key={drink.idDrink}>
            <h2>{drink.strDrink}</h2>
            <div className="drinkImg">
              <img src={drink.strDrinkThumb} alt={drink.strDrink} />
            </div>
            <button onClick={() => removeDrinks(drink.idDrink)}>
              Remove from favourites
            </button>
          </article>
        ))
      ) : (
        <p>No drinks added to favourites yet.</p>
      )}
    </>
  );
};
