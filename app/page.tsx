"use client";
import CategorySection from "@/components/CategorySection";
import HeroSection from "@/components/HeroSection";
export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <CategorySection />
      <div className="h-200"></div>
    </div>
  );
}
