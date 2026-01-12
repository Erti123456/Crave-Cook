"use client";
import smallerBackground from "../public/smaller-high-quality-food.png";
import backgroundImage from "../public/high-quality-food.jpg";
import Image from "next/image";
import useIsMobile from "@/components/useIsMobile";
export default function HomePage() {
  return (
    <div>
      <HeroSection />
    </div>
  );
}

const HeroSection = () => {
  const isMobile = useIsMobile(768);

  return (
    <section>
      <div className="relative w-full h-[600px] overflow-hidden">
        <Image
          src={isMobile ? smallerBackground : backgroundImage}
          alt="Background"
          placeholder="blur" // Optional: adds a blurred loading effect
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover", // Ensures image covers the div without stretching
            zIndex: -1, // Puts it behind the content
          }}
        />
      </div>
    </section>
  );
};
