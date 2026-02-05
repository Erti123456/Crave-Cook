import useRecipes from "@/features/recipes/hooks/useRecipes";
import MealCard from "./MealCard";
import { useSearchParams } from "next/navigation";

const MealsSearched = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const cuisine = searchParams.get("cuisine") ?? "";

  const { data, isError, isLoading } = useRecipes(query, cuisine);
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

export default MealsSearched;
