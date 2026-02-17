import { Recipe } from "@/types/recipe";

interface InstructionsListProps {
  recipe: Recipe;
}

const InstructionsList = ({ recipe }: InstructionsListProps) => {
  if (!recipe.analyzedInstructions || recipe.analyzedInstructions.length === 0) {
    return null;
  }

  const steps = recipe.analyzedInstructions[0]?.steps || [];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-3">Instructions</h2>
      <ol className="space-y-6">
        {steps.map((step) => (
          <li key={step.number} className="flex items-start gap-4">
            <span className="flex-none w-8 h-8 flex items-center justify-center bg-green-400 text-white font-bold rounded-full text-lg shadow-md">
              {step.number}
            </span>
            <p className="text-gray-700 text-lg leading-relaxed">{step.step}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default InstructionsList;
