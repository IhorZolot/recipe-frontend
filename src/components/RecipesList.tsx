'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  getRecipes,
  getRecipesByArea,
  getRecipesByCategory,
  getRecipesByIngredient,
} from '@/services/api';
import { Recipe } from '@/types/recipe';
import RecipeCard from './RecipeCard';
import RecipeFilters from './RecipeFilters';
import styles from './RecipesList.module.css';

const RecipesList = () => {
  const searchParams = useSearchParams();
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [title, setTitle] = useState('All Recipes');

  useEffect(() => {
    const fetchData = async () => {
      const ingredient = searchParams.get('ingredient');
      const area = searchParams.get('area');
      const category = searchParams.get('category');

      let data;

      if (ingredient) {
        data = await getRecipesByIngredient(ingredient);
        setTitle(`Ingredient: ${ingredient}`);
      } else if (area) {
        data = await getRecipesByArea(area);
        setTitle(`Area: ${area}`);
      } else if (category) {
        data = await getRecipesByCategory(category);
        setTitle(`Category: ${category}`);
      } else {
        data = await getRecipes();
        setTitle('All Recipes');
      }

      setRecipes(data.meals || []);
    };

    fetchData();
  }, [searchParams]);

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>{title}</h1>

      <RecipeFilters />

      {recipes.length === 0 ? (
        <p className={styles.noResults}>No recipes found.</p>
      ) : (
        <div className={styles.grid}>
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      )}
    </main>
  );
};

export default RecipesList;
