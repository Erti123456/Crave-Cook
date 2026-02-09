import Image from "next/image";
import { Recipe } from "@/types/recipe";

interface MealCardProps {
  recipe: Recipe;
}

const MealCard = ({ recipe }: MealCardProps) => {
  return (
    <div className="group lg:w-1/6 h-full border-green-400 rounded-3xl border-2 flex items-center justify-center flex-col gap-4 p-4 hover:shadow-xl transition-all cursor-pointer bg-white">
      <div className="relative w-full aspect-square overflow-hidden rounded-xl">
        <Image
          className="object-cover group-hover:scale-110 transition-transform duration-300"
          src={recipe.image}
          alt={recipe.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
        />
      </div>
      <p className="text-center font-bold text-gray-800 line-clamp-2 min-h-12 text-sm">
        {recipe.title}
      </p>
      {recipe.readyInMinutes && (
        <span className="text-xs text-gray-400">
          {recipe.readyInMinutes} mins
        </span>
      )}
    </div>
  );
};

export default MealCard;
