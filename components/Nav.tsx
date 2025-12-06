"use client";
import Link from "next/link"
import { useState } from "react";
import "../app/globals.css";
import Image from "next/image";

function PopUpDiv({ isVisible }: { isVisible: boolean }) {
  return ((isVisible) && <div className="w-70 h-70 bg-green-200 flex justify-center items-center ml-auto rounded-bl-2xl" ><ul className="flex flex-col space-y-8 font-sans">
    <Link href="">Sign In</Link>
    <Link href="">Home</Link>
    <Link href="">Recipes</Link>
    <Link href="">Favorites</Link>

  </ul></div>)
}

export default function Nav() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <header>
      <nav className="flex justify-between items-center bg-green-200">
        <Image
          src="/logo.png"
          alt="Crave & Cook Logo"
          width={85}
          height={85}
        />
        <ul
          className={"invisible sm:visible flex "}
        >
          <Link href="">Sign In</Link>
          <Link href="">Home</Link>
          <Link href="">Recipes</Link>
          <Link href="">Favorites</Link>
        </ul>
        <button
          className=" sm:hidden"
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        >
          <Image
            src="/Icon.png"
            alt="Hamburger Icon"
            width={85}
            height={85}
          />
        </button>
      </nav>
      <PopUpDiv isVisible={isVisible} />
    </header>
  );
}

