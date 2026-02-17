import { Recipe } from "@/types/recipe";

interface NutritionGridProps {
  recipe: Recipe;
}

const NutritionGrid = ({ recipe }: NutritionGridProps) => {
  if (!recipe.nutrition?.nutrients) {
    return null; // Don't render if no nutrition data
  }

  const findNutrient = (name: string) =>
    recipe.nutrition?.nutrients.find((n) => n.name === name);

  const calories = findNutrient("Calories");
  const protein = findNutrient("Protein");
  const fat = findNutrient("Fat");
  const carbs = findNutrient("Carbohydrates");

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-8">
      <div className="bg-green-50 rounded-xl p-4 shadow-sm">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-0">
          <NutritionItem
            label="Calories"
            value={calories?.amount}
            unit={calories?.unit || "kcal"}
          />
          <NutritionItem
            label="Protein"
            value={protein?.amount}
            unit={protein?.unit || "g"}
          />
          <NutritionItem
            label="Fat"
            value={fat?.amount}
            unit={fat?.unit || "g"}
          />
          <NutritionItem
            label="Carbs"
            value={carbs?.amount}
            unit={carbs?.unit || "g"}
          />
        </div>
      </div>
    </div>
  );
};

export default NutritionGrid;

// Helper component for individual nutrient display
const NutritionItem = ({
  label,
  value,
  unit,
}: {
  label: string;
  value: number | undefined;
  unit: string;
}) => (
  <div className="flex flex-col items-center justify-center p-4 md:border-r md:border-green-200 last:md:border-r-0">
    <span className="text-xs font-semibold text-green-700 uppercase tracking-wide">
      {label}
    </span>
    <span className="mt-1 text-2xl font-extrabold text-green-900">
      {value !== undefined ? `${value}${unit}` : "N/A"}
    </span>
  </div>
);
