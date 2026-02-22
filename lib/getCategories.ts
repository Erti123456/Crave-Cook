// lib/getCategories.ts

import { POPULAR_CUISINES } from "@/lib/mockData";
import { Category } from "@/types/recipe";

/**
 * Returns the static list of popular cuisines.
 * @returns An array of Category objects.
 */
export const getCategories = (): Category[] => {
  return POPULAR_CUISINES;
};
