import RecipeContent from "@/features/recipes/components/listing/RecipeContent";
import { auth } from "@clerk/nextjs/server";
import { Suspense } from "react";
import prisma from "@/lib/prisma";

const Page = async () => {
  const { userId } = await auth();
  const favorites = userId
    ? await prisma.favorite.findMany({ where: { userId } })
    : [];
  const favoritesIds: string[] = favorites.map((f) => {
    return f.recipeId;
  });
  console.log(favoritesIds);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RecipeContent favoritesIDS={favoritesIds} />
    </Suspense>
  );
};

export default Page;
