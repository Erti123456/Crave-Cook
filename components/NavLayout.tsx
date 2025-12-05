"use client";
import { useState } from "react";
import "../app/globals.css";
import Image from "next/image";
export default function NavLayout(){
  const [isVisible, setIsVisible] = useState(false);
function ButtonPressedDiv({ isVisible }) {
  if (isVisible) {
    return (
      <div className="bg-green-200 w-60 flex flex-col gap-y-8 h-70 text-xl items-center justify-center ml-auto rounded-bl-3xl sm:hidden">
        <ul className="gap-y-10 flex flex-col ">
          <li>Sign In</li>
          <li>Home</li>
          <li>Recipes</li>
          <li>Favorites</li>
        </ul>
      </div>
    );
  }
}
 function Button() {
  return (
    <button
      className="w-20 h-20 sm:hidden ml-auto"
      onClick={() => setIsVisible(true)}
    >
      <Image src="/Icon.png" alt="Hamburger Icon" width={85} height={85} />
    </button>
  );}}
