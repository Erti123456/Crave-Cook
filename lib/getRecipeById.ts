import { MOCK_RECIPES } from "./mockData";
import { Recipe } from "@/types/recipe";
import apiClient from "./axios";

async function getRecipeById(id: string): Promise<Recipe | undefined> {
  try {
    const res = await apiClient.get<Recipe | null>(
      `recipes/${id}/information?includeNutrition=true`,
    );
    return res.data ?? undefined;
  } catch (error) {
    if (error) {
      return MOCK_RECIPES.results.find((r) => r.id === parseInt(id));
    }
  }
}
export default getRecipeById;
