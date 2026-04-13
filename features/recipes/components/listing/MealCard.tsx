"use client";
import Image from "next/image";
import { Recipe } from "@/types/recipe";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { useRouter, usePathname } from "next/navigation";
import toggleFavorite from "../../actions/toggleFavorite";

interface MealCardProps {
  recipe: Recipe;
  isFavorited: boolean;
}

const MealCard = ({ recipe, isFavorited }: MealCardProps) => {
  const [heartClicked, setHeartClicked] = useState(isFavorited);
  const [isPending, setIsPending] = useState(false);
  const [favoriteError, setFavoriteError] = useState("");
  const { userId, isLoaded } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const handleHeartClick = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (!isLoaded) return;

    if (!userId) {
      router.push(`/sign-in?redirect_url=${encodeURIComponent(pathname)}`);
      return;
    }

    if (isPending) return;

    const nextFavoriteState = !heartClicked;
    setIsPending(true);
    setFavoriteError("");
    setHeartClicked(nextFavoriteState);

    const result = await toggleFavorite(recipe.id.toString());
    if (!result.ok) {
      setHeartClicked(heartClicked);
      setIsPending(false);
      setFavoriteError(result.error);
      return;
    }

    setHeartClicked(result.isFavorited);
    setIsPending(false);
    router.refresh();
  };

  return (
    <>
      <Link
        href={`/recipes/${recipe.id}`}
        className="w-2/3 sm:w-1/3 h-2/3 md:w-1/4 lg:w-1/6  border-green-400 rounded-3xl border-2 flex items-center justify-center hover:scale-110 relative flex-col gap-4 p-4 hover:shadow-xl transition-all cursor-pointer bg-white "
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
        <FaHeart
          onClick={handleHeartClick}
          className={`absolute bottom-2 right-2 cursor-pointer size-6 ${isPending ? "opacity-70" : ""} ${heartClicked ? "text-red-600" : "text-gray-400"}`}
        />
        {favoriteError ? (
          <p className="absolute left-3 right-3 bottom-9 rounded-lg bg-red-50 px-2 py-1 text-center text-[10px] font-semibold text-red-600 shadow">
            {favoriteError}
          </p>
        ) : null}
      </Link>
    </>
  );
};

export default MealCard;
