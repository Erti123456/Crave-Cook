"use client";
import useIsMobile from "@/globalHooks/useIsMobile";
import { useRouter } from "next/navigation";
import { useState } from "react";

const MainSearchInput = () => {
  const [input, setInput] = useState("");
  const isMobile = useIsMobile(768);
  const router = useRouter();

  const handleSearch = () => {
    if (input.trim()) {
      router.push(`/recipes?q=${encodeURIComponent(input)}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="mt-10 flex items-center bg-white rounded-2xl p-1 shadow-lg border-2 border-transparent transition-all focus-within:border-green-400 focus-within:ring-4 focus-within:ring-green-400/20 w-full max-w-[500px]">
      <input
        type="text"
        className="bg-transparent outline-none px-6 py-4 w-full text-gray-700 text-lg placeholder:text-gray-400"
        placeholder={
          isMobile
            ? "Search recipes... "
            : "Search for your favorite recipes..."
        }
        onChange={(e) => setInput(e.target.value)}
        value={input}
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={handleSearch}
        className="bg-green-400 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-xl transition-all active:scale-95 mr-1 hidden md:block"
      >
        Search!
      </button>
      <button
        onClick={handleSearch}
        className="bg-green-400 hover:bg-green-600 text-white p-4 px-6 rounded-xl transition-all active:scale-95 mr-1 md:hidden"
      >
        🔍
      </button>
    </div>
  );
};

export default MainSearchInput;

