'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getCategories, getAreas, getIngredients } from '@/services/api';
import styles from './RecipeFilters.module.css';
import { Button } from '@mui/material';

const RecipeFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [categories, setCategories] = useState<string[]>([]);
  const [areas, setAreas] = useState<string[]>([]);
  const [ingredients, setIngredients] = useState<string[]>([]);

  const [selectedIngredient, setSelectedIngredient] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

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

    if (type === 'ingredient') setSelectedIngredient(value);
    if (type === 'area') setSelectedArea(value);
    if (type === 'category') setSelectedCategory(value);
  };

  const clearAllFilters = () => {
    router.push('/recipes');
    setSelectedIngredient('');
    setSelectedArea('');
    setSelectedCategory('');
  };

  return (
    <div className={styles.filtersContainer}>
      <select
        value={selectedIngredient}
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
        value={selectedArea}
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
        value={selectedCategory}
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

      <Button
        variant="contained"
        color="secondary"
        onClick={clearAllFilters}
        className={styles.button}
      >
        Clear All Filters
      </Button>
    </div>
  );
};

export default RecipeFilters;
