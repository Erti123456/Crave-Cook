"use client";
import { Recipe } from "@/types/recipe";
import Image from "next/image";
import { Timer, HeartPulse, Users, Heart } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { useRouter, usePathname } from "next/navigation";
import toggleFavorite from "../../actions/toggleFavorite";

interface RecipeHeroProps {
  recipe: Recipe;
  isFavorited: boolean;
}

const RecipeHero = ({ recipe, isFavorited }: RecipeHeroProps) => {
  const [heartClicked, setHeartClicked] = useState(isFavorited);
  const { userId, isLoaded } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const handleHeartClick = async () => {
    if (!isLoaded) return;

    if (!userId) {
      router.push(`/sign-in?redirect_url=${encodeURIComponent(pathname)}`);
      return;
    }

    const result = await toggleFavorite(recipe.id.toString());
    if (!result.ok) return;

    setHeartClicked(result.isFavorited);
    router.refresh();
  };

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

        <button
          onClick={handleHeartClick}
          className="absolute top-6 right-6 bg-white/20 p-3 rounded-full backdrop-blur-md hover:bg-white/40 transition-colors"
        >
          <Heart
            className={`size-8 transition-colors ${
              heartClicked ? "fill-red-500 text-red-500" : "text-white"
            }`}
          />
        </button>
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
          {recipe.healthiness !== undefined ? (
            <StatItem
              icon={<HeartPulse size={24} />}
              label="Health Score"
              value={`${recipe.healthiness}%`}
            />
          ) : null}
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
