export interface Ingredient {
  id: number;
  name: string;
  amount: number;
  unit: string;
  original: string;
}

export interface InstructionStep {
  number: number;
  step: string;
}

export interface Instruction {
  name: string;
  steps: InstructionStep[];
}

export interface Nutrient {
  name: string;
  amount: number;
  unit: string;
  percentOfDailyNeeds?: number;
}

export interface Recipe {
  id: number;
  title: string;
  image: string;
  imageType: string;
  summary?: string;
  cuisines?: string[];
  dishTypes?: string[];
  diets?: string[];
  readyInMinutes?: number;
  servings?: number;
  sourceUrl?: string;
  // Added for mock sorting capabilities
  popularity?: number; // e.g., 0-100
  healthiness?: number; // e.g., 0-100
  price?: number; // e.g., cost per serving
  calories?: number;
  protein?: number;
  extendedIngredients?: Ingredient[];
  analyzedInstructions?: Instruction[];
  nutrition?: {
    nutrients: Nutrient[];
  };
}

export interface RecipeAPIResponse {
  results: Recipe[];
  offset: number;
  number: number;
  totalResults: number;
}

export interface Category {
  name: string;
  image?: string;
}

export interface CategoryApiResponse {
  categories: Category[];
}