'use client';
import Link from 'next/link';
import { Recipe } from '@/types/recipe';
interface Props {
  category: string;
  relatedRecipes: Recipe[];
}

const SidebarRelated = ({ category, relatedRecipes }: Props) => {
  return (
    <aside className="col-span-1 bg-gray-100 p-4 rounded-md">
      <h3 className="text-xl font-semibold mb-4 text-red-500">More in {category}</h3>
      <ul className="space-y-2">
        {relatedRecipes.map((recipe) => (
          <li key={recipe.idMeal}>
            <Link href={`/recipe/${recipe.idMeal}`} className="text-blue-600 hover:underline">
              {recipe.strMeal}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SidebarRelated;
