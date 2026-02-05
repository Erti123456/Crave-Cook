import useCategories from "@/features/recipes/hooks/useCategories";
import { Category } from "@/types/recipe";
import { useRouter } from "next/router";

interface SearchBarProps {
  setInput: (val: string) => void;
  input: string;
  setCuisine: (val: string) => void;
  cuisine: string;
}

const SearchBar = ({
  setInput,
  input,
  setCuisine,
  cuisine,
}: SearchBarProps) => {
  const { data } = useCategories();
  const categories = data || [];

  return (
    <div className="flex justify-center items-center mt-5">
      <div className="flex items-center border-2 rounded-2xl pr-2 bg-gray-300 overflow-hidden">
        <SearchInput input={input} setInput={setInput} />
        <CuisineFilter
          cuisine={cuisine}
          setCuisine={setCuisine}
          categories={categories}
        />
        <SortFilter />
      </div>
    </div>
  );
};

const SearchInput = ({
  input,
  setInput,
}: {
  input: string;
  setInput: (val: string) => void;
}) => {
  const router = useRouter();
  return (
    <input
      className="bg-gray-300 px-4 py-2 outline-none placeholder:text-gray-400 h-10 text-green-900 w-64"
      placeholder="Search recipes..."
      value={input}
      onChange={(e) => {
        setInput(e.target.value);
        router.push(`/recipes?q=${input}`);
      }}
    />
  );
};

const CuisineFilter = ({
  cuisine,
  setCuisine,
  categories,
}: {
  cuisine: string;
  setCuisine: (val: string) => void;
  categories: Category[];
}) => (
  <div className="flex items-center bg-gray-300 border-l-2 border-gray-400">
    <span className="pl-3 text-gray-500 text-sm">🔍</span>
    <select
      value={cuisine}
      onChange={(e) => setCuisine(e.target.value)}
      className="bg-gray-300 px-3 py-2 outline-none text-sm font-medium cursor-pointer"
    >
      <option value="">All Cuisines</option>
      {categories.map((category) => (
        <option value={category.name} key={category.name}>
          {category.name}
        </option>
      ))}
    </select>
  </div>
);

const SortFilter = () => (
  <select className="px-3 py-2 border-l-2 border-gray-400 outline-none bg-white text-sm font-medium">
    <option value="">Sort By</option>
    <option value="popularity">Popularity</option>
    <option value="healthiness">Healthiness</option>
    <option value="price">Price</option>
  </select>
);

export default SearchBar;
