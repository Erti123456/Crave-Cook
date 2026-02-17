import RecipeHero from "@/features/recipes/components/detail/RecipeHero";
import NutritionGrid from "@/features/recipes/components/detail/NutritionGrid";
import IngredientsList from "@/features/recipes/components/detail/IngredientsList"; // Added import
import InstructionsList from "@/features/recipes/components/detail/InstructionsList"; // Added import
import getRecipeById from "@/lib/getRecipeById";
import Link from "next/link"; // Added Link import for ErrorHandle

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const clickedRecipe = await getRecipeById(id);
  if (!clickedRecipe) {
    return <ErrorHandle />;
  }
  return (
    <main className="min-h-screen pt-20 pb-16">
      <RecipeHero recipe={clickedRecipe} />
      <NutritionGrid recipe={clickedRecipe} />

      {/* Ingredients and Instructions Section - Responsive Layout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1"> {/* Ingredients column */}
          <IngredientsList recipe={clickedRecipe} />
        </div>
        <div className="md:col-span-2"> {/* Instructions column */}
          <InstructionsList recipe={clickedRecipe} />
        </div>
      </div>
    </main>
  );
};
export default Page;

const ErrorHandle = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center text-center">
      <p className="text-2xl font-bold text-gray-800 mb-4">Recipe not found.</p>
      <Link href="/recipes" className="text-green-500 hover:underline">
        Back to Browse Recipes
      </Link>
    </div>
  );
};
