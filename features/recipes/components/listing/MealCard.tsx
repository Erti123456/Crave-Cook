import Image from "next/image";
import { Recipe } from "@/types/recipe";
import Link from "next/link";

interface MealCardProps {
  recipe: Recipe;
}

const MealCard = ({ recipe }: MealCardProps) => {
  return (
    <>
      <Link
        href={`/recipes/${recipe.id}`}
        className="group w-2/3 h-2/3 md:w-1/4 lg:w-1/6  border-green-400 rounded-3xl border-2 flex items-center justify-center hover:scale-110 flex-col gap-4 p-4 hover:shadow-xl transition-all cursor-pointer bg-white "
      >
        <div className="relative w-full aspect-square overflow-hidden rounded-xl">
          <Image
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            src={recipe.image}
            alt={recipe.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
          />
        </div>
        <p className="text-center font-bold text-gray-800 line-clamp-2 h-full text-sm">
          {recipe.title}
        </p>
        {recipe.readyInMinutes && (
          <span className="text-xs text-gray-400 ">
            {recipe.readyInMinutes} mins
          </span>
        )}
      </Link>
    </>
  );
};

export default MealCard;
