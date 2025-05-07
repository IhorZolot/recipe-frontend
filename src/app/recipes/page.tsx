import RecipesList from '@/components/RecipesList';
import { Suspense } from 'react';

const Page = () => {
  return (
    <Suspense fallback={<div>Loading recipes...</div>}>
      <RecipesList />
    </Suspense>
  );
};

export default Page;
