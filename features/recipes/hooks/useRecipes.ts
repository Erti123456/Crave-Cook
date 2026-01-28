import { useQuery } from "@tanstack/react-query";
import apiClient from "@/lib/axios";
import { RecipeAPIResponse } from "@/types/recipe";

const useRecipes = (searchQuery: string = "") => {
  return useQuery({
    queryKey: ["recipes", searchQuery],
    queryFn: async () => {
      const response = await apiClient.get<RecipeAPIResponse>(
        `/search.php?s=${searchQuery}`,
      );
      return response.data.meals;
    },
    enabled: true,
  });
};

export default useRecipes;
