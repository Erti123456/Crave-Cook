"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import MealsSearched from "./MealsSearched";

const RecipeContent = () => {
  const [input, setInput] = useState("");
  const [cuisine, setCuisine] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const callBackFunc = () => {
      const query = searchParams.get("q");
      if (query) {
        setInput(query);
      }
    };
    callBackFunc();
  }, [searchParams]);

  return (
    <div className="w-full h-full">
      <SearchBar
        input={input}
        setInput={setInput}
        cuisine={cuisine}
        setCuisine={setCuisine}
      />
      <MealsSearched input={input} cuisine={cuisine} />
    </div>
  );
};
export default RecipeContent;
