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