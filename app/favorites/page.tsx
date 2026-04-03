import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import getRecipeById from "@/lib/getRecipeById";
import MealCard from "@/features/recipes/components/listing/MealCard";
import { getFavoriteRecipeIds } from "@/lib/favorites";

export const dynamic = "force-dynamic";

const Page = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const { recipeIds, available } = await getFavoriteRecipeIds(userId);
  const recipePromises = recipeIds.map((recipeId) => getRecipeById(recipeId));
  const recipes = (await Promise.all(recipePromises)).filter(Boolean);

  return (
    <div className="p-8 mt-20">
      <h1 className="text-3xl font-black text-gray-900 mb-10 text-center">
        Your Favorite Recipes
      </h1>
      {!available ? (
        <p className="text-center text-sm text-amber-700 mb-8">
          Favorites are temporarily unavailable. You can still browse recipes.
        </p>
      ) : null}
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
