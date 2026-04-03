import prisma from "@/lib/prisma";

type FavoriteIdsResult = {
  recipeIds: string[];
  available: boolean;
};

export const getFavoriteRecipeIds = async (
  userId?: string | null,
): Promise<FavoriteIdsResult> => {
  if (!userId) {
    return { recipeIds: [], available: true };
  }

  try {
    const favorites = await prisma.favorite.findMany({
      where: { userId },
      select: { recipeId: true },
    });

    return {
      recipeIds: favorites.map((favorite) => favorite.recipeId),
      available: true,
    };
  } catch (error) {
    console.error("Favorites lookup failed:", error);
    return { recipeIds: [], available: false };
  }
};

export const getIsRecipeFavorited = async (
  userId: string | null | undefined,
  recipeId: string,
) => {
  if (!userId) {
    return false;
  }

  try {
    const favorite = await prisma.favorite.findUnique({
      where: {
        userId_recipeId: {
          userId,
          recipeId,
        },
      },
      select: { id: true },
    });

    return Boolean(favorite);
  } catch (error) {
    console.error("Favorite status lookup failed:", error);
    return false;
  }
};
