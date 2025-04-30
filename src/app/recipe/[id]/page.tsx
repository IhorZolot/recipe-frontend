import RecipePage from '@/components/RecipePage';

interface Props {
  params: { id: string };
}
const Page = async ({ params }: Props) => {
  return <RecipePage id={params.id} />;
};

export default Page;
