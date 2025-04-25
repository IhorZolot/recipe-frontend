/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strArea?: string;
  strCategory?: string;
  strInstructions?: string;
  [key: string]: any;
}
/* eslint-enable @typescript-eslint/no-explicit-any */
