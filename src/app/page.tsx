import Link from 'next/link';

const page = async () => {
  return (
    <div>
      <h1>🏠 Home Page</h1>
      <Link href="/recipes">Перейти до рецептів</Link>
    </div>
  );
};
export default page;
