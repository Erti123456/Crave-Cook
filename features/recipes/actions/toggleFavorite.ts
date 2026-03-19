"use server";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
const toggleFavorite = async (recipeId: string) => {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");

    const alreadyFavorited = await prisma.favorite.findUnique({
      where: {
        userId_recipeId: {
          userId: userId!,
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
  } catch (err) {
    throw err;
  }
};

export default toggleFavorite;
