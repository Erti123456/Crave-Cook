import { SignUp } from "@clerk/nextjs";

const Page = () => {
  return (
    <div
      className="w-full min-h-[calc(100vh-12rem)] flex items-center justify-center bg-cover bg-center px-4 py-24"
      style={{ backgroundImage: "url('/high-quality-food.jpg')" }}
    >
      <div className="bg-white/80 p-8 rounded-xl shadow-lg backdrop-blur-sm">
        <SignUp />
      </div>
    </div>
  );
};
export default Page;
