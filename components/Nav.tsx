"use client";
import { useState } from "react";
import "../app/globals.css";
import Image from "next/image";
export default function Nav() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <nav className="ml-auto">
      <ul
        className={` ${isVisible ? "relative h-50 w-50 bg-green-200" : ""} hidden `}
      >
        <li>Sign In</li>
        <li>Home</li>
        <li>Recipes</li>
        <li>Favorites</li>
      </ul>
      <button
        className=""
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        <Image
          src="/Icon.png"
          alt="Hamburger Icon"
          width={85}
          height={85}
          className="m-0"
        />
      </button>
    </nav>
  );
}
