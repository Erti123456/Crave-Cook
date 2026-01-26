import smallerBackground from "../../../public/smaller-high-quality-food.png";
import backgroundImage from "../../../public/high-quality-food.jpg";
import useIsMobile from "@/globalHooks/useIsMobile";
import { ReactNode } from "react";
import Image from "next/image";
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
export default HeroSection;
