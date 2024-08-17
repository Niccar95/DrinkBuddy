export interface IDrink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strAlcoholic: string;
}

export interface IDrinkIngredients extends IDrink {
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
}

export interface IDrinkInfo extends IDrink {
  strCategory: string;
  strGlass: string;
  strInstructions: string;
}

export type ICompleteDrinkInfo = IDrink & IDrinkIngredients & IDrinkInfo;
