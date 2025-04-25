import { getRecipeById, getRecipesByCategory } from '@/services/api';
import { Recipe } from '@/types/recipe';
import Image from 'next/image';
import Link from 'next/link';
import SidebarRelated from './SidebarRelated';

interface Props {
  id: string;
}

const RecipePage = async ({ id }: Props) => {
  const data = await getRecipeById(id);
  const recipe: Recipe = data.meals[0];

  const relatedData = await getRecipesByCategory(recipe.strCategory || '');
  const relatedRecipes: Recipe[] = relatedData.meals || [];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-4 gap-8">
      <div className="col-span-3">
        <Image
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          width={600}
          height={400}
          className="rounded-lg"
        />
        <h1 className="text-4xl font-bold mt-4">{recipe.strMeal}</h1>
        <Link
          href={`/recipes?area=${recipe.strArea}`}
          className="text-blue-600 hover:underline mt-1 block"
        >
          {recipe.strArea}
        </Link>
        <p className="mt-4 whitespace-pre-line">{recipe.strInstructions}</p>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside">
            {Array.from({ length: 20 }, (_, i) => i + 1).map((index) => {
              const ingredient = recipe[`strIngredient${index}`];
              if (ingredient) {
                return (
                  <li key={index}>
                    <Link
                      href={`/recipes?ingredient=${ingredient}`}
                      className="text-blue-600 hover:underline"
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
        related={relatedRecipes}
        currentId={recipe.idMeal}
        category={recipe.strCategory || ''}
      />
    </div>
  );
};

export default RecipePage;
