import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import { useEffect, useState } from "react";
import leftArrowImage from "../public/Left-Arrow.png";
import grayLeftArrow from "../public/Gray-Left-Arrow.png";
import grayRightArrow from "../public/Gray-Right-Arrow.png";
import rightArrowImage from "../public/Right-Arrow.png";
import useIsMobile from "@/components/useIsMobile";

const CategorySection = ({}) => {
  const [mealCat, setMealCat] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    async function fetchMealCategories() {
      setIsLoading(true);
      setError("");
      try {
        const res = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php",
        );
        if (!res.ok) {
          throw new Error("Failed to fetch meals!");
        }
        const data = await res.json();
        setMealCat(data.categories.slice(0, 12));
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unknown error has occured!");
        }
      } finally {
        setIsLoading(false);
      }
    }
    fetchMealCategories();
  }, []);

  return (
    <section className="flex flex-col justify-center items-center w-full">
      <MainTextCategorySection />
      <FoodCategoriesContainer categories={mealCat} />
    </section>
  );
};
const MainTextCategorySection = () => {
  return (
    <div className="bg-green-300/80 backdrop-blur-sm py-6 px-10 border w-full flex justify-center items-center border-none">
      <h2 className="text-3xl font-extrabold text-white tracking-tight drop-shadow-lg sm:text-4xl ">
        Select Your Style
      </h2>
    </div>
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

const FoodCategoriesContainer = ({ categories }: CategoryRibbonProps) => {
  const isMobile = useIsMobile(768);
  const isTablet = useIsMobile(1024);
  const [index, setIndex] = useState(0);
  const itemsPerPage = isMobile ? 1 : isTablet ? 2 : 4;
  const totalDots = Math.ceil(categories.length / itemsPerPage);
  const maxIndex = Math.ceil(categories.length / itemsPerPage) - 1;

  const isFirst = index === 0;
  const isLast = index >= maxIndex;
  const goNext = () => {
    setIndex((prev) => {
      if (itemsPerPage === 1) {
        return prev === categories.length - 1 ? prev : prev + 1;
      } else if (itemsPerPage === 2) {
        return prev === Math.ceil(categories.length / 2) - 1 ? prev : prev + 1;
      } else return prev === 2 ? prev : prev + 1;
    });
  };

  const goPrev = () => {
    setIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };
  return (
    <>
      <div className="w-full flex justify-center items-center gap-3 px-4">
        <button
          className="shrink-0 mr-10"
          onClick={() => {
            goPrev();
          }}
        >
          <Image
            src={isFirst ? grayLeftArrow : leftArrowImage}
            alt="Prev"
            width={60}
            height={60}
          />
        </button>

        <div className={`w-full max-w-7xl h-[380px] overflow-hidden `}>
          <div
            className="flex h-full items-center transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {categories.map((category) => (
              <SpecificFourMealCategoryContainer
                key={category.idCategory}
                mealCategory={category}
              />
            ))}
          </div>
        </div>

        <button
          className="shrink-0 ml-10"
          onClick={() => {
            goNext();
          }}
        >
          <Image
            src={isLast ? grayRightArrow : rightArrowImage}
            alt="Next"
            width={60}
            height={60}
          />
        </button>
      </div>
      <Dots totalDots={totalDots} setIndex={setIndex} index={index} />
    </>
  );
};

interface MealTypeProps {
  mealCategory: Category;
}

const SpecificFourMealCategoryContainer = ({ mealCategory }: MealTypeProps) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/4 shrink-0 px-2 h-full flex items-center justify-center cursor-pointer hover:scale-105 ease-in-out duration-300">
      <div className="relative w-full h-[300px] flex flex-col items-center justify-center border-green-300 border-2 rounded-4xl bg-white">
        <div className="relative w-35  sm:w-[190px] h-[200px]">
          <Image
            src={mealCategory.strCategoryThumb}
            alt={mealCategory.strCategory}
            fill
            className="object-contain"
          />
        </div>

        <div className="mt-2 flex items-center justify-center">
          <p className="font-bold text-lg">{mealCategory.strCategory}</p>
        </div>
      </div>
    </div>
  );
};
interface DotsInterface {
  totalDots: number;
  setIndex: Dispatch<SetStateAction<number>>;
  index: number;
}
const Dots = ({ totalDots, setIndex, index }: DotsInterface) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: totalDots }).map((_, i) => (
        <button
          className={`h-3 rounded-full transition-all duration-300 ${
            index === i ? "bg-green-400 w-8" : "bg-gray-200 w-3"
          }`}
          key={i}
          onClick={() => setIndex(i)}
        ></button>
      ))}
    </div>
  );
};

export default CategorySection;
