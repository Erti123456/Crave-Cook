import RecipeContent from "@/features/recipes/components/listing/RecipeContent";
import { auth } from "@clerk/nextjs/server";
import { Suspense } from "react";
import prisma from "@/lib/prisma";

const Page = async () => {
  const { userId } = await auth();
  const favoritesIds: string[] = [];

  if (userId) {
    try {
      const favorites = await prisma.favorite.findMany({ where: { userId } });
      favoritesIds.push(
        ...favorites.map((f: { recipeId: string }) => f.recipeId),
      );
    } catch (error) {
      console.error("Failed to load recipe favorites", error);
    }
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RecipeContent favoritesIDS={favoritesIds} />
    </Suspense>
  );
};

export default Page;
