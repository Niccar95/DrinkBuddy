import { ICompleteDrinkInfo } from "../models/IDrink";

interface IRandomDrinkProps {
  randomDrink: ICompleteDrinkInfo[];
}

export const RandomDrink = ({ randomDrink }: IRandomDrinkProps) => {
  return (
    <>
      {randomDrink.length > 0 &&
        randomDrink.map((drink) => (
          <article id="randomDrinkCard" key={drink.idDrink}>
            <div className="imageContainer">
              <img
                className="randomDrinkImage"
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
              ></img>
            </div>
            <section>
              <h2>{drink.strDrink}</h2>
              <p>{drink.strInstructions}</p>
            </section>
          </article>
        ))}
    </>
  );
};
