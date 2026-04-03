import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import getRecipeById from "@/lib/getRecipeById";
import MealCard from "@/features/recipes/components/listing/MealCard";

export const dynamic = "force-dynamic";

const Page = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const favorites = await prisma.favorite.findMany({
    where: { userId },
  });

  const recipePromises = favorites.map((f) => getRecipeById(f.recipeId));
  const recipes = (await Promise.all(recipePromises)).filter(Boolean);

  return (
    <div className="p-8 mt-20">
      <h1 className="text-3xl font-black text-gray-900 mb-10 text-center">
        Your Favorite Recipes
      </h1>
      <div className="flex flex-wrap gap-10 justify-center items-center">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <MealCard key={recipe!.id} recipe={recipe!} isFavorited={true} />
          ))
        ) : (
          <p className="text-gray-500 text-lg mt-10">
            You havent favorited any recipes yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default Page;
