import RecipeContent from "@/features/recipes/components/RecipeContent";
import { Suspense } from "react";

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RecipeContent />
    </Suspense>
  );
};

export default Page;
