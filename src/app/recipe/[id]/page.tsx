import { getRecipeById, getRecipesByCategory } from '@/services/api';
import { Recipe } from '@/types/recipe';
import RecipePage from '@/components/RecipePage';

interface Props {
  params: { id: string };
}

const Page = async ({ params }: Props) => {
  const data = await getRecipeById(params.id);
  const recipe: Recipe = data.meals[0];

  const relatedData = await getRecipesByCategory(recipe.strCategory || '');
  const relatedRecipes: Recipe[] = relatedData.meals || [];

  return <RecipePage recipe={recipe} relatedRecipes={relatedRecipes} />;
};

export default Page;
