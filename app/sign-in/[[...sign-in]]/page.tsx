import { SignIn } from "@clerk/nextjs";

const Page = () => {
  return (
    <div
      className="w-full min-h-[calc(100vh-12rem)] flex justify-center items-center bg-cover bg-center px-4 py-24"
      style={{ backgroundImage: "url('/high-quality-food.jpg')" }}
    >
      <div className="bg-white/80 p-8 rounded-xl shadow-lg backdrop-blur-sm">
        <SignIn />
      </div>
    </div>
  );
};
export default Page;
