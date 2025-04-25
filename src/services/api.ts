import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;
interface Ingredient {
  strIngredient: string;
}
export const getRecipes = async () => {
  const { data } = await axios.get(`${BASE_URL}/recipes`);
  return data;
};

export const getRecipeById = async (id: string) => {
  const { data } = await axios.get(`${BASE_URL}/recipes/${id}`);
  return data;
};

export const getRecipesByCategory = async (category: string) => {
  const { data } = await axios.get(`${BASE_URL}/recipes?category=${encodeURIComponent(category)}`);
  return data;
};
export const getRecipesByArea = async (area: string) => {
  const { data } = await axios.get(`${BASE_URL}/recipes?area=${encodeURIComponent(area)}`);
  return data;
};
export const getRecipesByIngredient = async (ingredient: string) => {
  const { data } = await axios.get(
    `${BASE_URL}/recipes?ingredient=${encodeURIComponent(ingredient)}`
  );
  return data;
};
export const getCategories = async () => {
  const { data } = await axios.get<{ meals: { strCategory: string }[] }>(`${BASE_URL}/categories`);
  return data.meals.map((meal) => meal.strCategory);
};

export const getAreas = async () => {
  const { data } = await axios.get<{ meals: { strArea: string }[] }>(`${BASE_URL}/areas`);
  return data.meals.map((meal) => meal.strArea);
};

export const getIngredients = async () => {
  const { data } = await axios.get<{ meals: Ingredient[] }>(`${BASE_URL}/ingredients`);
  return data.meals.map((meal) => meal.strIngredient);
};
