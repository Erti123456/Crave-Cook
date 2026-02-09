import useCategories from "@/features/recipes/hooks/useCategories";
import { Category } from "@/types/recipe";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useMemo, useEffect } from "react";
import { debounce } from "lodash";

const SearchBar = () => {
  const { data } = useCategories();
  const categories = data || [];
  const searchParams = useSearchParams();
  const router = useRouter();

  const [input, setInput] = useState(searchParams.get("q") ?? "");
  const [cuisine, setCuisine] = useState(searchParams.get("cuisine") ?? "");
  const [sort, setSort] = useState(searchParams.get("sort") ?? "");

  const debouncedUpdateUrl = useMemo(
    () =>
      debounce((params: URLSearchParams) => {
        router.push("/recipes?" + params.toString());
      }, 500),
    [router],
  );

  // Cleanup: prevent ghost navigations on unmount
  useEffect(() => {
    return () => {
      debouncedUpdateUrl.cancel();
    };
  }, [debouncedUpdateUrl]);

  const handleSearchChange = (value: string) => {
    setInput(value);
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("q", value);
    } else {
      params.delete("q");
    }

    debouncedUpdateUrl(params);
  };

  const handleCuisineChange = (value: string) => {
    setCuisine(value);
    const params = new URLSearchParams(searchParams.toString());

    if (input) {
      params.set("q", input);
    } else {
      params.delete("q");
    }

    if (value) {
      params.set("cuisine", value);
    } else {
      params.delete("cuisine");
    }

    debouncedUpdateUrl.cancel();
    router.push("/recipes?" + params.toString());
  };

  const handleSortChange = (value: string) => {
    setSort(value);
    const params = new URLSearchParams(searchParams.toString());

    if (input) {
      params.set("q", input);
    }

    if (value) {
      params.set("sort", value);
    } else {
      params.delete("sort");
    }

    debouncedUpdateUrl.cancel();
    router.push("/recipes?" + params.toString());
  };

  return (
    <div className="flex justify-center items-center mt-5">
      <div className="flex items-center border-2 rounded-2xl pr-2 bg-gray-300 overflow-hidden">
        <SearchInput input={input} onSearch={handleSearchChange} />
        <CuisineFilter
          categories={categories}
          cuisine={cuisine}
          onCuisineChange={handleCuisineChange}
        />
        <SortFilter sort={sort} onSortChange={handleSortChange} />
      </div>
    </div>
  );
};

const SearchInput = ({
  input,
  onSearch,
}: {
  input: string;
  onSearch: (val: string) => void;
}) => {
  return (
    <input
      className="bg-gray-300 px-4 py-2 outline-none placeholder:text-gray-400 h-10 text-green-900 w-64"
      placeholder="Search recipes..."
      value={input}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

const CuisineFilter = ({
  cuisine,
  onCuisineChange,
  categories,
}: {
  cuisine: string;
  onCuisineChange: (val: string) => void;
  categories: Category[];
}) => {
  return (
    <div className="flex items-center bg-gray-300 border-l-2 border-gray-400">
      <span className="pl-3 text-gray-500 text-sm">🔍</span>
      <select
        value={cuisine}
        onChange={(e) => onCuisineChange(e.target.value)}
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
};

const SortFilter = ({
  sort,
  onSortChange,
}: {
  sort: string;
  onSortChange: (val: string) => void;
}) => (
  <select
    value={sort}
    onChange={(e) => onSortChange(e.target.value)}
    className="px-3 py-2 border-l-2 border-gray-400 outline-none bg-white text-sm font-medium"
  >
    <option value="">Sort By</option>
    <option value="popularity">Popularity</option>
    <option value="healthiness">Healthiness</option>
    <option value="price">Price</option>
    <option value="time">Quickest</option>
    <option value="calories">Lowest Calories</option>
    <option value="protein">Highest Protein</option>
    <option value="random">Surprise Me</option>
  </select>
);

export default SearchBar;
