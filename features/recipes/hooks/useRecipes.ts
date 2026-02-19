import { useQuery } from "@tanstack/react-query";
import apiClient from "@/lib/axios";
import { RecipeAPIResponse, Recipe } from "@/types/recipe"; // Import Recipe type
import { MOCK_RECIPES } from "@/lib/mockData";

export const USE_MOCK = true; // Toggle this to false when you want to use real data

type SortableRecipeKey =
  | "popularity"
  | "healthiness"
  | "price"
  | "readyInMinutes" // 'time' maps to this
  | "calories"
  | "protein";

const useRecipes = (
  searchQuery: string = "",
  cuisine: string = "",
  sort: string = "",
) => {
  const sortDirection = sort === "time" || sort === "price" ? "asc" : "desc";

  return useQuery({
    queryKey: ["recipes", searchQuery, cuisine, sort, sortDirection],
    queryFn: async () => {
      if (USE_MOCK) {
        let filteredRecipes: Recipe[] = [...MOCK_RECIPES.results];

        if (searchQuery) {
          filteredRecipes = filteredRecipes.filter((recipe) =>
            recipe.title.toLowerCase().includes(searchQuery.toLowerCase()),
          );
        }

        if (cuisine) {
          filteredRecipes = filteredRecipes.filter((recipe) =>
            recipe.cuisines?.some(
              (c) => c.toLowerCase() === cuisine.toLowerCase(),
            ),
          );
        }

        if (sort) {
          const sortProperty: SortableRecipeKey =
            sort === "time" ? "readyInMinutes" : (sort as SortableRecipeKey);

          filteredRecipes.sort((a: Recipe, b: Recipe) => {
            const valA = a[sortProperty] ?? 0;
            const valB = b[sortProperty] ?? 0;

            if (sortDirection === "asc") {
              return valA - valB;
            } else {
              return valB - valA;
            }
          });
        }

        await new Promise((resolve) => setTimeout(resolve, 400));
        return filteredRecipes;
      }

      const response = await apiClient.get<RecipeAPIResponse>(
        `/recipes/complexSearch`,
        {
          params: {
            query: searchQuery,
            cuisine: cuisine,
            sort: sort,
            sortDirection: sortDirection,
            addRecipeInformation: true,
            number: 40,
          },
        },
      );
      return response.data.results;
    },
  });
};

export default useRecipes;
