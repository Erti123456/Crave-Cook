"use client";
import useIsMobile from "@/globalHooks/useIsMobile";
import { useRouter } from "next/navigation";
import { useState } from "react";

const MainSearchInput = () => {
  const [input, setInput] = useState("");
  const isMobile = useIsMobile(768);
  const router = useRouter();
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      router.push(`/recipes?q=${input}`);
    }
  };

  return (
    <input
      type="text"
      className="bg-white outline:none mt-10 p-5 rounded-2xl w-62 md:w-[420px]"
      placeholder={
        isMobile
          ? "Search for recipes!         🔍"
          : "Search for your favorite recipes here!                 🔍"
      }
      onChange={(e) => setInput(e.target.value)}
      value={input}
      onKeyDown={handleKeyDown}
    />
  );
};
export default MainSearchInput;
