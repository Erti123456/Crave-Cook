"use client";
import SearchBar from "./SearchBar";
import MealsSearched from "./MealsSearched";

const RecipeContent = () => {
  return (
    <div className="w-full h-full pt-28">
      <SearchBar />
      <MealsSearched />
    </div>
  );
};
export default RecipeContent;
