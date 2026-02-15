import useCategories from "@/features/recipes/hooks/useCategories";
import { Category } from "@/types/recipe";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useMemo, useEffect, useRef } from "react";
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

  const handleReset = () => {
    setInput("");
    setCuisine("");
    setSort("");
    router.push("/recipes");
  };

  return (
    <div className="flex justify-center items-center mt-10 mb-10 px-4">
      <div className="flex flex-col md:flex-row items-center gap-3 w-full max-w-5xl justify-center">
        <SearchInput input={input} onSearch={handleSearchChange} />
        <div className="flex gap-2 w-full md:w-auto justify-center">
          <CuisineFilter
            categories={categories}
            cuisine={cuisine}
            onCuisineChange={handleCuisineChange}
          />
          <SortFilter sort={sort} onSortChange={handleSortChange} />
          <ResetButton onReset={handleReset} />
        </div>
      </div>
    </div>
  );
};

const ResetButton = ({ onReset }: { onReset: () => void }) => (
  <button
    onClick={onReset}
    className="flex-1 md:flex-none px-4 h-11 rounded-xl border-2 border-gray-200 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors text-sm font-semibold"
  >
    Reset
  </button>
);

const SearchInput = ({
  input,
  onSearch,
}: {
  input: string;
  onSearch: (val: string) => void;
}) => {
  const searchRef = useRef<HTMLInputElement>(null);
  const searchParams = useSearchParams();
  useEffect(() => {
    if (searchParams.get("focus") === "true") {
      searchRef.current?.focus();
    }
  }, [searchParams]);
  return (
    <input
      ref={searchRef}
      className="px-6 py-2 outline-none border-2 border-green-400 rounded-full h-11 text-green-900 w-full md:w-72 bg-white shadow-sm focus:shadow-md transition-shadow placeholder:text-gray-400"
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
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative flex-1 md:flex-none" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-green-400 text-white rounded-xl pl-4 pr-10 h-11 shadow-sm hover:bg-green-500 transition-colors cursor-pointer outline-none text-sm font-semibold appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22white%22%20stroke-width%3D%222.5%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22m19.5%208.25-7.5%207.5-7.5-7.5%22%20%2F%3E%3C%2Fsvg%3E')] bg-[length:16px_16px] bg-[position:right_12px_center] bg-no-repeat text-center focus:ring-0 focus:outline-none"
      >
        <span className="w-full text-center">{cuisine || "All Cuisines"}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-100 rounded-2xl shadow-xl z-50 overflow-hidden py-2 animate-in fade-in zoom-in duration-200">
          <div
            onClick={() => {
              onCuisineChange("");
              setIsOpen(false);
            }}
            className="px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 cursor-pointer transition-colors"
          >
            All Cuisines
          </div>
          {categories.map((category) => (
            <div
              key={category.name}
              onClick={() => {
                onCuisineChange(category.name);
                setIsOpen(false);
              }}
              className="px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 cursor-pointer transition-colors"
            >
              {category.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const SortFilter = ({
  sort,
  onSortChange,
}: {
  sort: string;
  onSortChange: (val: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const sortOptions = [
    { value: "popularity", label: "Popularity" },
    { value: "healthiness", label: "Healthiness" },
    { value: "price", label: "Price" },
    { value: "time", label: "Quickest" },
    { value: "calories", label: "Lowest Calories" },
    { value: "protein", label: "Highest Protein" },
    { value: "random", label: "Surprise Me" },
  ];

  const currentLabel =
    sortOptions.find((o) => o.value === sort)?.label || "Sort By";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative flex-1 md:flex-none" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-green-400 text-white rounded-xl pl-4 pr-10 h-11 shadow-sm hover:bg-green-500 transition-colors cursor-pointer outline-none text-sm font-semibold appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22white%22%20stroke-width%3D%222.5%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22m19.5%208.25-7.5%207.5-7.5-7.5%22%20%2F%3E%3C%2Fsvg%3E')] bg-[length:16px_16px] bg-[position:right_12px_center] bg-no-repeat text-center focus:ring-0 focus:outline-none"
      >
        <span className="w-full text-center">{currentLabel}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-100 rounded-2xl shadow-xl z-50 overflow-hidden py-2 animate-in fade-in zoom-in duration-200">
          <div
            onClick={() => {
              onSortChange("");
              setIsOpen(false);
            }}
            className="px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 cursor-pointer transition-colors"
          >
            Sort By
          </div>
          {sortOptions.map((option) => (
            <div
              key={option.value}
              onClick={() => {
                onSortChange(option.value);
                setIsOpen(false);
              }}
              className="px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 cursor-pointer transition-colors"
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
