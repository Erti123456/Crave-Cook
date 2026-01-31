"use client";
import useCategories from "@/features/recipes/hooks/useCategories";
import useRecipes from "@/features/recipes/hooks/useRecipes";
import { Recipe } from "@/types/recipe";
import Image from "next/image";
import { useState } from "react";
import { Category } from "@/types/recipe";
interface MealCardProps {
  recipe: Recipe;
}
interface SearchBarProps {
  setInput: (val: string) => void;
  input: string;
}
interface MealsSearchedProps {
  input: string;
}

const Page = () => {
  const [input, setInput] = useState("");
  return (
    <div className="w-full h-full">
      <SearchBar input={input} setInput={setInput} />
      <MealsSearched input={input} />
    </div>
  );
};
const SearchBar = ({ setInput, input }: SearchBarProps) => {
  const { data } = useCategories();
  const categories = data ? data : [];
  const handleCategoryOptionChange = (categorySelected: string) => {
    console.log(categorySelected);
  };
  return (
    <div className="flex justify-center items-center mt-5">
      <form className="flex  items-center border-2 rounded-2xl pr-2">
        <input
          className=" bg-gray-300 px-4 py-2 outline-none placeholder:text-gray-400  h-10 text-green-900"
          placeholder="Search recipes...                              🔍"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <select
          onChange={(e) => handleCategoryOptionChange(e.target.value)}
          className="  bg-gray-300 border-l-2 mr-2  px-3 py-4 outline-none"
        >
          <option hidden>Category</option>
          {categories.map((category) => {
            return (
              <option value={category.strCategory} key={category.idCategory}>
                {category.strCategory}
              </option>
            );
          })}
        </select>
        <select className="px-3 mr-1 py-4 border-l-2 outline-none bg-white">
          <option value="">Sort By</option>
        </select>
      </form>
    </div>
  );
};
const MealsSearched = ({ input }: MealsSearchedProps) => {
  const { data, isError, isLoading, error } = useRecipes(input);
  const recipes = data || [];

  return (
    <div className="flex flex-wrap w-full h-full flex-row gap-10 justify-center items-center mt-9">
      {recipes?.map((recipe) => (
        <MealCard recipe={recipe} key={recipe.idMeal} />
      ))}
    </div>
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
