import SearchBar from "./SearchBar";
import MealsSearched from "./MealsSearched";

const RecipeContent = () => {
  return (
    <div className="w-full h-full min-h-[102vh] pb-20">
      <SearchBar />
      <MealsSearched />
    </div>
  );
};
export default RecipeContent;
