import { Recipe } from "@/types/recipe";
import { CheckSquare } from "lucide-react"; // Using Lucide React for consistent icons

interface IngredientsListProps {
  recipe: Recipe;
}

const IngredientsList = ({ recipe }: IngredientsListProps) => {
  if (!recipe.extendedIngredients || recipe.extendedIngredients.length === 0) {
    return null; // Don't render if no ingredients
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-3">Ingredients</h2>
      <ul className="space-y-4">
        {recipe.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id} className="flex items-start gap-3">
            <CheckSquare size={20} className="text-green-500 shrink-0 mt-0.5" />
            <p className="text-gray-700 text-lg">{ingredient.original}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientsList;
