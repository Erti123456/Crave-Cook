import CategorySection from "@/features/home/components/CategorySection";
import HeroSection from "@/features/home/components/HeroSection";
export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <CategorySection />
      <div className="h-200"></div>
    </div>
  );
}
