'use client';

import Link from 'next/link';
import { Recipe } from '@/types/recipe';
import styles from './SidebarRelated.module.css';

interface Props {
  category: string;
  relatedRecipes: Recipe[];
}

const SidebarRelated = ({ category, relatedRecipes }: Props) => {
  return (
    <aside className={styles.sidebar}>
      <h3 className={styles.title}>More in {category}</h3>
      <ul className={styles.list}>
        {relatedRecipes.map((recipe) => (
          <li key={recipe.idMeal} className={styles.listItem}>
            <Link href={`/recipe/${recipe.idMeal}`} className={styles.link}>
              {recipe.strMeal}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SidebarRelated;
