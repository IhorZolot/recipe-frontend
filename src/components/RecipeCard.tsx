'use client';

import { Recipe } from '@/types/recipe';
import Link from 'next/link';
import Image from 'next/image';
import styles from './RecipeCard.module.css';

interface Props {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: Props) {
  return (
    <Link href={`/recipe/${recipe.idMeal}`} className={styles.card}>
      <Image
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        width={200}
        height={100}
        className={styles.image}
      />
      <div className={styles.content}>
        <h2 className={styles.title}>{recipe.strMeal}</h2>
        <p className={styles.subtitle}>
          {recipe.strArea && recipe.strCategory
            ? `${recipe.strArea} | ${recipe.strCategory}`
            : recipe.strArea || recipe.strCategory}
        </p>
      </div>
    </Link>
  );
}
