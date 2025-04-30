'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getCategories, getAreas, getIngredients } from '@/services/api';
import BackButton from './BackButton';
import styles from './RecipeFilters.module.css';

const RecipeFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [categories, setCategories] = useState<string[]>([]);
  const [areas, setAreas] = useState<string[]>([]);
  const [ingredients, setIngredients] = useState<string[]>([]);

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const [categoriesData, areasData, ingredientsData] = await Promise.all([
          getCategories(),
          getAreas(),
          getIngredients(),
        ]);
        setCategories(categoriesData);
        setAreas(areasData);
        setIngredients(ingredientsData);
      } catch (error) {
        console.error('❌ Error fetching filters:', error);
      }
    };

    fetchFilters();
  }, []);

  const handleChange = (type: 'ingredient' | 'area' | 'category', value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(type, value);

    if (type !== 'ingredient') params.delete('ingredient');
    if (type !== 'area') params.delete('area');
    if (type !== 'category') params.delete('category');

    router.push(`/recipes?${params.toString()}`);
  };

  return (
    <div className={styles.filtersContainer}>
      <select
        defaultValue=""
        onChange={(e) => handleChange('ingredient', e.target.value)}
        className={styles.select}
      >
        <option value="">By Ingredient</option>
        {ingredients.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <select
        defaultValue=""
        onChange={(e) => handleChange('area', e.target.value)}
        className={styles.select}
      >
        <option value="">By Area</option>
        {areas.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <select
        defaultValue=""
        onChange={(e) => handleChange('category', e.target.value)}
        className={styles.select}
      >
        <option value="">By Category</option>
        {categories.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <BackButton />
    </div>
  );
};

export default RecipeFilters;
