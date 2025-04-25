'use client';

import { Recipe } from '@/types/recipe';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: Props) {
  return (
    <Link
      href={`/recipe/${recipe.idMeal}`}
      className="block bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
    >
      <Image
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-1">{recipe.strMeal}</h2>
        <p className="text-sm text-gray-500">
          {recipe.strArea} • {recipe.strCategory}
        </p>
      </div>
    </Link>
  );
}
