"use client";
import useCategories from "@/features/recipes/hooks/useCategories";
import useRecipes from "@/features/recipes/hooks/useRecipes";
import { Recipe } from "@/types/recipe";
import Image from "next/image";
import { useState } from "react";

interface MealCardProps {
  recipe: Recipe;
}
interface SearchBarProps {
  setInput: (val: string) => void;
  input: string;
  setCuisine: (val: string) => void;
  cuisine: string;
}
interface MealsSearchedProps {
  input: string;
  cuisine: string;
}

const Page = () => {
  const [input, setInput] = useState("");
  const [cuisine, setCuisine] = useState("");

  return (
    <div className="w-full h-full">
      <SearchBar
        input={input}
        setInput={setInput}
        cuisine={cuisine}
        setCuisine={setCuisine}
      />
      <MealsSearched input={input} cuisine={cuisine} />
    </div>
  );
};

const SearchBar = ({
  setInput,
  input,
  setCuisine,
  cuisine,
}: SearchBarProps) => {
  const { data } = useCategories();
  const categories = data ? data : [];

  return (
    <div className="flex justify-center items-center mt-5">
      <div className="flex items-center border-2 rounded-2xl pr-2 bg-gray-300 overflow-hidden">
        <input
          className="bg-gray-300 px-4 py-2 outline-none placeholder:text-gray-400 h-10 text-green-900 w-64"
          placeholder="Search recipes..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="flex items-center bg-gray-300 border-l-2 border-gray-400">
          <span className="pl-3 text-gray-500 text-sm">🔍</span>
          <select
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
            className="bg-gray-300 px-3 py-2 outline-none text-sm font-medium cursor-pointer"
          >
            <option value="">All Cuisines</option>
            {categories.map((category) => (
              <option value={category.name} key={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <select className="px-3 py-2 border-l-2 border-gray-400 outline-none bg-white text-sm font-medium">
          <option value="">Sort By</option>
          <option value="popularity">Popularity</option>
          <option value="healthiness">Healthiness</option>
          <option value="price">Price</option>
        </select>
      </div>
    </div>
  );
};

const MealsSearched = ({ input, cuisine }: MealsSearchedProps) => {
  const { data, isError, isLoading } = useRecipes(input, cuisine);
  const recipes = data || [];

  if (isLoading)
    return (
      <div className="flex flex-wrap w-full gap-10 justify-center items-center mt-9">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="lg:w-1/6 h-64 bg-gray-200 animate-pulse rounded-3xl"
          />
        ))}
      </div>
    );

  if (isError)
    return (
      <div className="text-center mt-10 text-red-500">
        Error fetching recipes
      </div>
    );

  return (
    <div className="flex flex-wrap w-full h-full flex-row gap-10 justify-center items-center mt-9 px-4">
      {recipes.length > 0 ? (
        recipes.map((recipe) => <MealCard recipe={recipe} key={recipe.id} />)
      ) : (
        <p className="text-gray-500 mt-10">
          No recipes found matching your criteria.
        </p>
      )}
    </div>
  );
};


const MealCard = ({ recipe }: MealCardProps) => {
  return (
    <div className="group lg:w-1/6 h-full border-green-300 rounded-3xl border-2 flex items-center justify-center flex-col gap-4 p-4 hover:shadow-xl transition-all cursor-pointer bg-white">
      <div className="relative w-full aspect-square overflow-hidden rounded-xl">
        <Image
          className="object-cover group-hover:scale-110 transition-transform duration-300"
          src={recipe.image}
          alt={recipe.title}
          fill
        />
      </div>
      <p className="text-center font-bold text-gray-800 line-clamp-2 min-h-12 text-sm">
        {recipe.title}
      </p>
      {recipe.readyInMinutes && (
        <span className="text-xs text-gray-400">
          {recipe.readyInMinutes} mins
        </span>
      )}
    </div>
  );
};

export default Page;
