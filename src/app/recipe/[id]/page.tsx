import { getRecipeById, getRecipesByCategory } from '@/services/api';
import RecipePage from '@/components/RecipePage';
import { Recipe } from '@/types/recipe';

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const data = await getRecipeById(id);
  const recipe: Recipe = data.meals[0];
  const relatedData = await getRecipesByCategory(recipe.strCategory || '');
  const relatedRecipes: Recipe[] = relatedData.meals || [];

  return <RecipePage recipe={recipe} relatedRecipes={relatedRecipes} />;
};

export default Page;
