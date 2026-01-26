"use client";
import Link from "next/link";
import { ReactNode, useState } from "react";
import "../app/globals.css";
import Image from "next/image";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [searchIconVisible, setSearchIconVisible] = useState(true);

  return (
    <header className="relative font-sans w-full z-50 border-b-2">
      <Nav>
        <Logo />
        <ListOfLinks
          searchIconVisible={searchIconVisible}
          setSearchIconVisible={setSearchIconVisible}
        />
        <HamburgerIcon isVisible={isVisible} setIsVisible={setIsVisible} />
      </Nav>

      {/* Mobile Menu */}
      <PopUpDiv isVisible={isVisible}>
        <SearchBar
          searchIconVisible={searchIconVisible}
          setSearchIconVisible={setSearchIconVisible}
        />
      </PopUpDiv>
    </header>
  );
}

interface NavProps {
  children: ReactNode;
}

const Nav = ({ children }: NavProps) => {
  return (
    <nav className="flex justify-between items-center bg-green-300 p-4">
      {children}
    </nav>
  );
};

const Logo = () => {
  return (
    <Link href="/">
      <button className="cursor-pointer shrink-0">
        <Image
          src="/logo.png"
          alt="Crave & Cook Logo"
          width={85}
          height={85}
          priority
        />
      </button>
    </Link>
  );
};
interface PropsListOfLinks {
  searchIconVisible: boolean;
  setSearchIconVisible: (val: boolean) => void;
}

const ListOfLinks = ({
  searchIconVisible,
  setSearchIconVisible,
}: PropsListOfLinks) => {
  return (
    <ul
      className={`hidden md:flex space-x-10 ${searchIconVisible ? "mr-8" : "mr-2"} font-medium h-full items-center`}
    >
      <Link href="/signin">Sign In</Link>
      <Link href="/">Home</Link>
      <Link href="/recipes">Recipes</Link>
      <Link href="/favorites">Favorites</Link>
      <SearchBar
        searchIconVisible={searchIconVisible}
        setSearchIconVisible={setSearchIconVisible}
      />
    </ul>
  );
};

interface Props {
  searchIconVisible: boolean;
  setSearchIconVisible: (val: boolean) => void;
}
const SearchBar = ({ searchIconVisible, setSearchIconVisible }: Props) => {
  return (
    <>
      {searchIconVisible ? (
        <button className="mt-1" onClick={() => setSearchIconVisible(false)}>
          <FaMagnifyingGlass />
        </button>
      ) : (
        <input
          placeholder={`Search for recipe     🔍`}
          className="w-48 bg-white pl-3 pr-1 py-2 rounded-xl placeholder-gray-500 outline-none animate-in fade-in zoom-in duration-300"
          autoFocus
        />
      )}
    </>
  );
};

interface PropsHamburgerIcon {
  isVisible: boolean;
  setIsVisible: (val: boolean) => void;
}

const HamburgerIcon = ({ isVisible, setIsVisible }: PropsHamburgerIcon) => {
  return (
    <button
      className="cursor-pointer md:hidden shrink-0"
      onClick={() => setIsVisible(!isVisible)}
    >
      <Image src="/Icon.png" alt="Hamburger Icon" width={85} height={85} />
    </button>
  );
};

interface PopUpDivProps {
  children: ReactNode;
  isVisible: boolean;
}

function PopUpDiv({ isVisible, children }: PopUpDivProps) {
  return (
    <div
      className={`absolute right-0 top-full w-70 h-80 bg-green-300 flex justify-center items-center ml-auto rounded-bl-2xl border-t-2 transition-transform ease-in-out duration-300 ${isVisible ? "translate-x-0" : "translate-x-full"}  md:hidden`}
    >
      <ul className="flex flex-col space-y-8 items-center">
        {children}
        <Link href="">Sign In</Link>
        <Link href="">Home</Link>
        <Link href="">Recipes</Link>
        <Link href="">Favorites</Link>
      </ul>
    </div>
  );
}
