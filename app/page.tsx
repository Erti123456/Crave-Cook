"use client";
import smallerBackground from "../public/smaller-high-quality-food.png";
import backgroundImage from "../public/high-quality-food.jpg";
import leftArrowImage from "../public/Left-Arrow.png";
import rightArrowImage from "../public/Right-Arrow.png";
import Image from "next/image";
import useIsMobile from "@/components/useIsMobile";
import { ReactNode, useEffect, useState } from "react";
export default function HomePage() {
  const [mealCat, setMealCat] = useState([]);
  useEffect(() => {
    async function fetchMealCategories() {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php",
      );
      const data = await res.json();
      setMealCat(data.categories);
    }
    fetchMealCategories();
  }, []);

  console.log(mealCat);
  return (
    <div>
      <HeroSection />
      <CategorySection categories={mealCat} />
      <div className="h-200"></div>
    </div>
  );
}

const HeroSection = () => {
  const isMobile = useIsMobile(768);
  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      <BackgroundImage isMobile={isMobile} />
      <MainDisplay>
        <MainTextTitle />
        <MainSearchInput isMobile={isMobile} />
      </MainDisplay>
    </section>
  );
};
interface isMobileInterface {
  isMobile: boolean;
}
const BackgroundImage = ({ isMobile }: isMobileInterface) => {
  return (
    <Image
      src={isMobile ? smallerBackground : backgroundImage}
      alt="Background"
      placeholder="blur"
      quality={75}
      fill
      sizes="100vw"
      priority
      style={{
        objectFit: "cover",
        zIndex: 0,
      }}
    />
  );
};
interface MainDisplayInterface {
  children?: ReactNode;
}
const MainDisplay = ({ children }: MainDisplayInterface) => {
  return (
    <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
      {children}
    </div>
  );
};
const MainTextTitle = () => {
  return (
    <div className="bg-green-300/80 backdrop-blur-sm py-6 px-10 rounded-xl border border-white/20">
      <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg">
        What are we cooking today?
      </h1>
    </div>
  );
};
const MainSearchInput = ({ isMobile }: isMobileInterface) => {
  return (
    <input
      type="text"
      className="bg-white outline-none mt-10 p-5 rounded-2xl w-62 md:w-[420px]"
      placeholder={
        isMobile
          ? "Search for recipes!         🔍"
          : "Search for your favorite recipes here!                 🔍"
      }
    />
  );
};
interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

interface CategoryRibbonProps {
  categories: Category[];
}

const CategorySection = ({ categories }: CategoryRibbonProps) => {
  return (
    <section className="flex flex-col justify-center items-center w-full">
      <MainTextCategorySection />
      <div className="relative flex items-center">
        <Image
          src={leftArrowImage}
          alt="left-Arrow"
          width={75}
          height={75}
          className={`cursor-pointer transition-opacity`}
        />
        <div className="w-full flex flex-row scroll overflow-x-scroll whitespace-nowrap scroll-smooth h-full">
          {categories.slice().map((mealCategory) => (
            <SpecificMealCategoryContainer
              mealCategory={mealCategory}
              key={mealCategory.idCategory}
            />
          ))}
        </div>

        <Image
          src={rightArrowImage}
          alt="right-Arrow"
          width={75}
          height={75}
          className={`cursor-pointer transition-opacity `}
        />
      </div>
    </section>
  );
};
interface MealTypeProps {
  mealCategory: Category;
}
const MainTextCategorySection = () => {
  return (
    <div className="bg-green-300/80 backdrop-blur-sm py-6 px-10 border w-full flex justify-center items-center border-none">
      <h2 className="text-md md:text-4xl font-extrabold text-white tracking-tight drop-shadow-lg">
        Select Your Style
      </h2>
    </div>
  );
};

const SpecificMealCategoryContainer = ({ mealCategory }: MealTypeProps) => {
  return (
    <div className="flex justify-center items-center flex-col gap-8 p-5 w-[200px] border-2 border-green-300 rounded-2xl cursor-pointer hover:scale-105 ease-in-out duration-300 shrink-0">
      <Image
        src={mealCategory.strCategoryThumb}
        alt={mealCategory.strCategory}
        quality={75}
        width={100}
        height={100}
        style={{
          width: "100%",
          height: "auto",
        }}
      />
      <p>{mealCategory.strCategory}</p>
    </div>
  );
};
