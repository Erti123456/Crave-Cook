"use client";
import Link from "next/link";
import { ReactNode, useState, useEffect, useRef } from "react";
import "../../app/globals.css";
import Image from "next/image";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { usePathname } from "next/navigation"; // Import usePathname
import useIsMobile from "@/globalHooks/useIsMobile";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      if (isHomePage) {
        window.addEventListener("scroll", handleScroll);
        handleScroll();
      } else {
        setIsScrolled(true);
      }
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [isHomePage]);
  
    return (
      <header className="fixed top-0 left-0 w-full z-50">
        <Nav isHomePage={isHomePage} isScrolled={isScrolled}>
          <Logo />
          <ListOfLinks />
          <HamburgerIcon isVisible={isVisible} setIsVisible={setIsVisible} />
        </Nav>
        {/* Mobile Menu */}
        <PopUpDiv isVisible={isVisible} setIsVisible={setIsVisible} />
      </header>
    );
  }
  
  interface NavProps {
    children: ReactNode;
    isHomePage: boolean;
    isScrolled: boolean;
  }
  
  const Nav = ({ children, isHomePage, isScrolled }: NavProps) => {
    const isMobile = useIsMobile(768);
    const isSolid = !isHomePage || isScrolled || isMobile;
  
    return (
      <nav
        className={`flex justify-between items-center p-4 transition-all duration-300 ${
          isSolid ? "bg-green-400 shadow-md" : "bg-transparent"
        } `}
      >
        {children}
      </nav>
    );
  };

const Logo = () => {
  return (
    <Link href="/">
      <button className="cursor-pointer shrink-0">
        <Image
          className="brightness-0 invert"
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

const ListOfLinks = () => {
  return (
    <ul
      className={`hidden md:flex space-x-10 font-medium h-full items-center mr-8`}
    >
      <SignedOut>
        <Link href="/sign-up">Sign Up</Link>
        <Link href="/sign-in">Log In </Link>
      </SignedOut>
      <Link href="/">Home</Link>
      <Link href="/recipes">Browse</Link>
      <SignedIn>
        <Link href="/favorites">Favorites</Link>
      </SignedIn>

      <Link href="/recipes?focus=true" className="mt-1  text-xl">
        <FaMagnifyingGlass />
      </Link>
    </ul>
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
      onClick={(e) => {
        e.stopPropagation();
        setIsVisible(!isVisible);
      }}
    >
      <Image src="/Icon.png" alt="Hamburger Icon" width={85} height={85} />
    </button>
  );
};

interface PopUpDivProps {
  isVisible: boolean;
  setIsVisible: (val: boolean) => void;
}

function PopUpDiv({ isVisible, setIsVisible }: PopUpDivProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsVisible(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsVisible]);
  return (
    <div
      ref={wrapperRef}
      className={`absolute right-0 w-64 h-80 bg-green-400 flex justify-center items-center ml-auto rounded-bl-2xl
       transition-all ease-in-out duration-300 md:hidden ${
         isVisible
           ? "translate-x-0 opacity-100"
           : "translate-x-full opacity-0 pointer-events-none"
       }`}
    >
      <ul className="flex flex-col space-y-8 items-center">
        <Link href="/signin" onClick={() => setIsVisible(false)}>
          Sign In
        </Link>
        <Link href="/" onClick={() => setIsVisible(false)}>
          Home
        </Link>
        <Link href="/recipes" onClick={() => setIsVisible(false)}>
          Browse
        </Link>
        <Link href="/favorites" onClick={() => setIsVisible(false)}>
          Favorites
        </Link>
        <Link
          href="/recipes?focus=true"
          onClick={() => setIsVisible(false)}
          className="flex items-center gap-2 text-white text-lg"
        >
          <FaMagnifyingGlass /> Search
        </Link>
      </ul>
    </div>
  );
}
