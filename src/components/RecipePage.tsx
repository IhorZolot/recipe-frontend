'use client';

import { Recipe } from '@/types/recipe';
import Image from 'next/image';
import Link from 'next/link';
import SidebarRelated from './SidebarRelated';
import styles from './RecipePage.module.css';

interface Props {
  recipe: Recipe;
  relatedRecipes: Recipe[];
}

const RecipePage = ({ recipe, relatedRecipes }: Props) => {
  return (
    <div className={styles.container}>
      <div>
        <Image
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          width={600}
          height={400}
          priority
          className={styles.image}
        />
        <h1 className={styles.title}>{recipe.strMeal}</h1>
        <Link href={`/recipes?area=${recipe.strArea}`} className={styles.areaLink}>
          {recipe.strArea}
        </Link>
        <p className={styles.instructions}>{recipe.strInstructions}</p>

        <div className={styles.ingredients}>
          <h2 className={styles.ingredientsTitle}>Ingredients</h2>
          <ul className={styles.ingredientsList}>
            {Array.from({ length: 20 }, (_, i) => i + 1).map((index) => {
              const ingredient = recipe[`strIngredient${index}`];
              if (ingredient) {
                return (
                  <li key={index}>
                    <Link
                      href={`/recipes?ingredient=${ingredient}`}
                      className={styles.ingredientLink}
                    >
                      {ingredient}
                    </Link>
                  </li>
                );
              }
              return null;
            })}
          </ul>
        </div>
      </div>
      <SidebarRelated
        category={recipe.strCategory || 'Unknown Category'}
        relatedRecipes={relatedRecipes}
      />
    </div>
  );
};

export default RecipePage;
