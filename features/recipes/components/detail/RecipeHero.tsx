import { Recipe } from "@/types/recipe";
import Image from "next/image";
import { Timer, HeartPulse, Users } from "lucide-react";

interface RecipeHeroProps {
  recipe: Recipe;
}

const RecipeHero = ({ recipe }: RecipeHeroProps) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden rounded-3xl shadow-2xl mt-8 group">
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          priority
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />

        {recipe.cuisines && recipe.cuisines[0] && (
          <div className="absolute top-6 left-6 bg-green-400 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg backdrop-blur-sm">
            {recipe.cuisines[0].toUpperCase()}
          </div>
        )}
      </div>

      <div className="mt-8 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight max-w-4xl px-4">
          {recipe.title}
        </h1>

        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-8 py-6 border-y border-gray-100 w-full max-w-3xl">
          <StatItem
            icon={<Timer size={24} />}
            label="Ready in"
            value={`${recipe.readyInMinutes} mins`}
          />
          <StatItem
            icon={<Users size={24} />}
            label="Servings"
            value={`${recipe.servings}`}
          />
          <StatItem
            icon={<HeartPulse size={24} />}
            label="Health Score"
            value={`${recipe.healthiness}%`}
          />
        </div>

        <div className="mt-10 max-w-3xl text-gray-600 leading-relaxed text-lg italic px-4">
          <div
            dangerouslySetInnerHTML={{ __html: recipe.summary || "" }}
            className="[&>b]:text-green-500 [&>b]:font-bold"
          />
        </div>
      </div>
    </div>
  );
};

const StatItem = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="flex flex-col items-center gap-1 group">
    <div className="text-green-400 mb-1 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
      {label}
    </span>
    <span className="text-base font-extrabold text-gray-800">{value}</span>
  </div>
);

export default RecipeHero;
