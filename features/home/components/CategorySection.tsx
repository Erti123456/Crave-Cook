import Image from "next/image";
import React, { ReactNode } from "react";
import { useState, useRef } from "react";
import useIsMobile from "@/globalHooks/useIsMobile";
import { Category } from "@/types/recipe";
import useCategories from "@/features/recipes/hooks/useCategories";

interface ErrorProps {
  children?: ReactNode;
}
interface FoodCategoriesContainerProps {
  categories: Category[];
  isLoading: boolean;
}
interface ButtonLeftProps {
  isFirst: boolean;
  goPrev: () => void;
}
interface ButtorRightProps {
  isLast: boolean;
  goNext: () => void;
}
interface MealTypeContainerProps {
  mealCategory: Category;
}
interface DotsProps {
  totalDots: number;
  index: number;
  scrollRef: React.RefObject<HTMLDivElement | null>;
}

const CategorySection = () => {
  const { data, isLoading, isError, error } = useCategories();
  const mealCat = data ? data.slice(0, 12) : [];

  return (
    <section className="flex flex-col justify-center items-center w-full">
      <MainTextCategorySection />
      {isError ? (
        <ErrorMessage>{error?.message}</ErrorMessage>
      ) : (
        <FoodCategoriesContainer categories={mealCat} isLoading={isLoading} />
      )}
    </section>
  );
};

const ErrorMessage = ({ children }: ErrorProps) => {
  return <p>{children}</p>;
};
const Loading = () => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/4 shrink-0 px-2 h-full flex items-center justify-center animate-pulse">
      <div className="relative w-full h-[300px] flex flex-col items-center justify-center rounded-4xl ">
        <div className="relative w-35 sm:w-[190px] h-[180px] bg-gray-300 rounded-2xl"></div>

        <div className="mt-4 flex items-center justify-center w-full px-10">
          <div className="h-6 w-full bg-gray-300 rounded-md"></div>
        </div>
      </div>
    </div>
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

const FoodCategoriesContainer = ({
  categories,
  isLoading,
}: FoodCategoriesContainerProps) => {
  const isMobile = useIsMobile();
  const isTablet = useIsMobile(1024); //tablet dimestions;
  const [index, setIndex] = useState(0);
  const itemsPerPage = isMobile ? 1 : isTablet ? 2 : 4;
  const totalDots = Math.ceil(categories.length / itemsPerPage);
  const maxIndex = Math.ceil(categories.length / itemsPerPage) - 1;

  const isFirst = index === 0;
  const isLast = index >= maxIndex;
  const goNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const goPrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };
  const scrollRef = useRef<HTMLDivElement>(null);
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, offsetWidth } = scrollRef.current;

      const newIndex = Math.round(scrollLeft / offsetWidth);

      setIndex(newIndex);
    }
  };

  return (
    <>
      <div className="w-full flex justify-center items-center gap-2 md:gap-4 px-2 md:px-4">
        <ButtonLeft goPrev={goPrev} isFirst={isFirst} />

        <div className="flex-1 min-w-0 max-w-7xl h-[380px]">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex h-full items-center overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          >
            {isLoading ? (
              Array.from({ length: itemsPerPage }).map((_, i) => (
                <Loading key={i} />
              ))
            ) : categories.length === 0 && !isLoading ? (
              <p>No meal categories found at the moment.</p>
            ) : (
              categories.map((category) => (
                <MealTypeContainer
                  key={category.idCategory}
                  mealCategory={category}
                />
              ))
            )}
          </div>
        </div>
        <ButtonRight goNext={goNext} isLast={isLast} />
      </div>
      <Dots scrollRef={scrollRef} totalDots={totalDots} index={index} />
    </>
  );
};

const ButtonLeft = ({ goPrev, isFirst }: ButtonLeftProps) => {
  return (
    <button
      className="shrink-0 mr-2 md:mr-10"
      onClick={() => {
        goPrev();
      }}
    >
      <Image
        src={isFirst ? "/Gray-Left-Arrow.png" : "/Left-Arrow.png"}
        alt="Prev"
        width={60}
        height={60}
      />
    </button>
  );
};
const ButtonRight = ({ goNext, isLast }: ButtorRightProps) => {
  return (
    <button
      className="shrink-0 ml-2 md:ml-10"
      onClick={() => {
        goNext();
      }}
      draggable="false"
    >
      <Image
        src={isLast ? "/Gray-Right-Arrow.png" : "/Right-Arrow.png"}
        alt="Next"
        width={60}
        height={60}
      />
    </button>
  );
};

const MealTypeContainer = ({ mealCategory }: MealTypeContainerProps) => {
  return (
    <div
      className="w-full md:w-1/2 lg:w-1/4 shrink-0 px-2 h-full flex items-center justify-center cursor-pointer hover:scale-105 ease-in-out duration-300 snap-start "
      draggable="false"
    >
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

const Dots = ({ totalDots, index, scrollRef }: DotsProps) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: totalDots }).map((_, i) => (
        <button
          className={`h-3 rounded-full transition-all duration-300 ${
            index === i ? "bg-green-400 w-8" : "bg-gray-200 w-3"
          }`}
          key={i}
          onClick={() => {
            if (scrollRef.current) {
              scrollRef.current.scrollTo({
                left: i * scrollRef.current.offsetWidth,
                behavior: "smooth",
              });
            }
          }}
        ></button>
      ))}
    </div>
  );
};

export default CategorySection;
