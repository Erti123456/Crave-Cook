"use client";
import useRecipes from "@/features/recipes/hooks/useRecipes";
import { Recipe } from "@/types/recipe";
import Image from "next/image";

interface MealCardProps {
  recipe: Recipe;
}

const Page = () => {
  const { data, isError, isLoading, error } = useRecipes();
  const recipes = data || [];
  return (
    <>
      <div></div>
      <div className="flex flex-wrap w-full h-full flex-row gap-10 justify-center items-center mt-9">
        {recipes?.map((recipe) => (
          <MealCard recipe={recipe} key={recipe.idMeal} />
        ))}
      </div>
    </>
  );
};

const MealCard = ({ recipe }: MealCardProps) => {
  return (
    <div className="lg:w-1/6 h-full border-green-300 rounded-3xl border-2 flex items-center justify-center flex-col gap-4 ">
      <Image
        className="mt-8 rounded-xl"
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        width={140}
        height={140}
      />
      <p className="mb-5">{recipe.strMeal}</p>
    </div>
  );
};

export default Page;
