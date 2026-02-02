import { useQuery } from "@tanstack/react-query";
import apiClient from "@/lib/axios";
import { RecipeAPIResponse } from "@/types/recipe";
import { MOCK_RECIPES } from "@/lib/mockData";

const USE_MOCK = true; // Toggle this to false when you want to use real data

const useRecipes = (
  searchQuery: string = "",
  cuisine: string = "",
  diet: string = "",
) => {
  return useQuery({
    queryKey: ["recipes", searchQuery, cuisine, diet],
    queryFn: async () => {
      if (USE_MOCK) {
        console.log("Using Mock Data");
        return MOCK_RECIPES.results;
      }

      const response = await apiClient.get<RecipeAPIResponse>(
        `/recipes/complexSearch`,
        {
          params: {
            query: searchQuery,
            cuisine: cuisine,
            diet: diet,
            addRecipeInformation: true, // Gets summary, diets, etc.
            number: 10,
          },
        },
      );
      return response.data.results;
    },
  });
};

export default useRecipes;