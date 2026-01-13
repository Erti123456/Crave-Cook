"use client";
import smallerBackground from "../public/smaller-high-quality-food.png";
import backgroundImage from "../public/high-quality-food.jpg";
import Image from "next/image";
import useIsMobile from "@/components/useIsMobile";
import { useEffect, useState } from "react";
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
      <CategoryRibbon categories={mealCat} />
      <div className="h-200"></div>
    </div>
  );
}

const HeroSection = () => {
  const isMobile = useIsMobile(768);

  return (
    <section className="relative w-full h-[600px] overflow-hidden">
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

      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
        <div className="bg-green-300/80 backdrop-blur-sm py-6 px-10 rounded-xl border border-white/20">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg">
            What are we cooking today?
          </h1>
        </div>
        <input
          type="text"
          className="bg-white outline-none mt-10 p-5 rounded-2xl w-62 md:w-[420px]"
          placeholder={
            isMobile
              ? "Search for recipes!            🔍"
              : "Search for your favorite recipes here!                 🔍"
          }
        />
      </div>
    </section>
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

const CategoryRibbon = ({ categories }: CategoryRibbonProps) => {
  return (
    <section className="flex flex-col justify-center items-center w-full">
      <div className="bg-green-300/80 backdrop-blur-sm py-6 px-10 border w-full flex justify-center items-center border-none">
        <h2 className="text-md md:text-3xl font-extrabold text-white tracking-tight ">
          Meal Categories
        </h2>
      </div>
      <div className="flex gap-10 mt-10">
        {categories.slice(0, 5).map((mealCategory) => (
          <SpecificMealCategoryContainer
            mealCategory={mealCategory}
            key={mealCategory.idCategory}
          />
        ))}
      </div>
    </section>
  );
};

interface MealTypeProps {
  mealCategory: Category;
}

const SpecificMealCategoryContainer = ({ mealCategory }: MealTypeProps) => {
  return (
    <div className="flex justify-center items-center flex-col gap-8 p-5 w-64 border-2 border-green-300 rounded-2xl">
      <Image
        src={mealCategory.strCategoryThumb}
        alt={mealCategory.strCategory}
        quality={75}
        width={100}
        height={100}
        style={{
          width: "100%", // Tells CSS to take up container space
          height: "auto", // MAINTAINS ASPECT RATIO
        }}
      />
      <p>{mealCategory.strCategory}</p>
    </div>
  );
};
