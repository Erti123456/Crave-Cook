import RecipeHero from "@/features/recipes/components/detail/RecipeHero";
import getRecipeById from "@/lib/getRecipeById";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const clickedRecipe = await getRecipeById(id);
  if (!clickedRecipe) {
    return (
      <>
        <ErrorHandle />
      </>
    );
  }
};
export default Page;

const ErrorHandle = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <p>Recipe was not found.</p>
    </div>
  );
};
