import RecipeContent from "@/features/recipes/components/listing/RecipeContent";
import { auth } from "@clerk/nextjs/server";
import { Suspense } from "react";
import { getFavoriteRecipeIds } from "@/lib/favorites";

export const dynamic = "force-dynamic";

const Page = async () => {
  const { userId } = await auth();
  const { recipeIds: favoritesIds } = await getFavoriteRecipeIds(userId);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RecipeContent favoritesIDS={favoritesIds} />
    </Suspense>
  );
};

export default Page;
