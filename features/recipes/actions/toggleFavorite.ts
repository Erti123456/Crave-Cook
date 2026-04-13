"use server";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

type ToggleFavoriteResult =
  | { ok: true; isFavorited: boolean }
  | { ok: false; error: string };

const toggleFavorite = async (
  recipeId: string,
): Promise<ToggleFavoriteResult> => {
  try {
    if (!process.env.DATABASE_URL) {
      return { ok: false, error: "DATABASE_URL is not configured" };
    }

    const { userId } = await auth();
    if (!userId) {
      return { ok: false, error: "You must be signed in to favorite recipes" };
    }

    const alreadyFavorited = await prisma.favorite.findUnique({
      where: {
        userId_recipeId: {
          userId,
          recipeId: recipeId.toString(),
        },
      },
    });

    if (alreadyFavorited) {
      await prisma.favorite.delete({
        where: {
          id: alreadyFavorited.id,
        },
      });
    } else {
      await prisma.favorite.create({
        data: {
          userId: userId,
          recipeId: recipeId.toString(),
        },
      });
    }

    revalidatePath("/recipes");
    revalidatePath("/favorites");
    return { ok: true, isFavorited: !alreadyFavorited };
  } catch (err) {
    console.error("Failed to toggle favorite", err);
    return { ok: false, error: "Failed to update favorite. Check Vercel logs." };
  }
};

export default toggleFavorite;
