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
  const goNext = () => {
    setIndex((prev) => (prev === 2 ? prev + 0 : prev + 1));
  };
  const goPrev = () => {
    setIndex((prev) => (prev === 0 ? prev - 0 : prev - 1));
  };

  return (
    <div className="w-full flex justify-center items-center gap-3">
      <button className="shrink-0 mr-5" onClick={goPrev}>
        <Image
          src={leftArrowImage}
          alt="leftArrowImage"
          width={50}
          height={50}
        />
      </button>

      <div className={`w-[1440px] h-[350px] overflow-hidden`}>
        <div
          className="flex h-full items-center gap-9 transition-transform duration-500"
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

      <button className="shrink-0 ml-5" onClick={goNext}>
        <Image
          src={rightArrowImage}
          alt="rightArrowImage"
          width={50}
          height={50}
        />
      </button>
    </div>
  );
};

interface MealTypeProps {
  mealCategory: Category;
}
const SpecificFourMealCategoryContainer = ({ mealCategory }: MealTypeProps) => {
  return (
    <div className="relative w-[325px] h-[300px] flex flex-col items-center justify-center shrink-0 border-green-300 border-2 rounded-4xl ">
      <div className="relative w-[250px] h-[250px]">
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
  );
};
export default CategorySection;
