import SearchBar from "./SearchBar";
import MealsSearched from "./MealsSearched";

const RecipeContent = ({ favoritesIDS }: { favoritesIDS: string[] }) => {
  return (
    <div className="w-full h-full min-h-[102vh] pb-20">
      <SearchBar />
      <MealsSearched favoritesIDS={favoritesIDS} />
    </div>
  );
};
export default RecipeContent;
