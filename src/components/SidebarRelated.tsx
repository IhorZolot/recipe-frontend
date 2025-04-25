import { Recipe } from '@/types/recipe';
import Link from 'next/link';

interface Props {
  related: Recipe[];
  currentId: string;
  category: string;
}

const SidebarRelated = ({ related, currentId, category }: Props) => {
  const filtered = related.filter((r) => r.idMeal !== currentId).slice(0, 5);

  return (
    <aside className="col-span-1 bg-gray-100 p-4 rounded-md">
      <h3 className="text-xl font-semibold mb-2 text-red-500">More in {category}</h3>
      <ul className="text-sm space-y-2">
        {filtered.map((item) => (
          <li key={item.idMeal}>
            <Link href={`/recipe/${item.idMeal}`} className="text-blue-600 hover:underline">
              {item.strMeal}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SidebarRelated;
