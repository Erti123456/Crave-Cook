import { MOCK_RECIPES } from "./mockData";
import { Recipe } from "@/types/recipe";

async function getRecipeById(id: string): Promise<Recipe | undefined> {
  for (let i = 0; MOCK_RECIPES.results.length > i; i++) {
    if (MOCK_RECIPES.results[i].id === parseInt(id)) {
      return MOCK_RECIPES.results[i];
    }
  }
}
export default getRecipeById;
