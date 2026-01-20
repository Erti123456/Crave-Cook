import Image from "next/image";
import { useEffect, useState } from "react";
import leftArrowImage from "../public/Left-Arrow.png";
import rightArrowImage from "../public/Right-Arrow.png";

const CategorySection = ({}) => {
  const [mealCat, setMealCat] = useState([]);
  useEffect(() => {
    async function fetchMealCategories() {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php",
      );
      const data = await res.json();
      setMealCat(data.categories.slice(0, 12));
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
      <h2 className="text-md md:text-4xl font-extrabold text-white tracking-tight drop-shadow-lg">
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
  const [index, setIndex] = useState(0);

  // LOGIC UPDATE: Calculate how many items to move.
  // On desktop (lg), we show 4 items, so we can slide in chunks of 4.
  // On tablet (md), we show 2. On mobile, we show 1.
  const goNext = () => {
    setIndex((prev) => {
      // This logic ensures we don't slide into empty space
      // You can adjust '3' based on how many "pages" of items you have
      return prev === 2 ? prev : prev + 1;
    });
  };

  const goPrev = () => {
    setIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  return (
    <div className="w-full flex justify-center items-center gap-2 px-4">
      <button className="shrink-0 mr-10" onClick={goPrev}>
        <Image src={leftArrowImage} alt="Prev" width={60} height={60} />
      </button>

      <div className="w-full max-w-7xl h-[380px] overflow-hidden">
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

      <button className="shrink-0 ml-10" onClick={goNext}>
        <Image src={rightArrowImage} alt="Next" width={60} height={60} />
      </button>
    </div>
  );
};

interface MealTypeProps {
  mealCategory: Category;
}

const SpecificFourMealCategoryContainer = ({ mealCategory }: MealTypeProps) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/4 shrink-0 px-2 h-full flex items-center justify-center">
      <div className="relative w-full h-[300px] flex flex-col items-center justify-center border-green-300 border-2 rounded-4xl bg-white">
        <div className="relative w-[200px] h-[200px]">
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

export default CategorySection;
