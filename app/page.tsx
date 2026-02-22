import CategorySection from "@/features/home/components/CategorySection";
import HeroSection from "@/features/home/components/HeroSection";
import { getCategories } from "@/lib/getCategories";

export default function HomePage() {
  const categories = getCategories();

  return (
    <div>
      <HeroSection />
      <CategorySection categories={categories} />
      <div className="h-200"></div>
    </div>
  );
}
