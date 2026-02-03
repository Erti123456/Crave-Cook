"use client";
import useIsMobile from "@/globalHooks/useIsMobile";
import { useState } from "react";

const MainSearchInput = () => {
  const [input, setInput] = useState("");
  const isMobile = useIsMobile(768);

  const handlePressEnter = (eventKey: string) => {
    if (eventKey === "Enter") {
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
      onKeyDown={(e) => {
        handlePressEnter(e.key);
        e.preventDefault();
      }}
    />
  );
};
export default MainSearchInput;
