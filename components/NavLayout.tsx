"use client";
import { useState } from "react";
import "../app/globals.css";
import Image from "next/image";
const [isVisible, setIsVisible] = useState(false);
export function NavLayout() {
  return (
    <div>
      <ul>
        <li>Home</li>
        <li>Recipes</li>
        <li>Favorites</li>
        <li>Sign In</li>
      </ul>
    </div>
  );
}

export function Button() {
  return (
    <button
      className="w-20 h-20 sm:hidden ml-auto"
      onClick={() => setIsVisible(true)}
    >
      <Image src="/Icon.png" alt="Hamburger Icon" width={85} height={85} />
    </button>
  );
}
