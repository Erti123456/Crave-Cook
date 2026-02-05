"use client";
import SearchBar from "./SearchBar";
import MealsSearched from "./MealsSearched";

const RecipeContent = () => {
  return (
    <div className="w-full h-full">
      <SearchBar />
      <MealsSearched />
    </div>
  );
};
export default RecipeContent;
