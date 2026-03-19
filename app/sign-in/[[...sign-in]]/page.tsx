import { SignIn } from "@clerk/nextjs";

const Page = () => {
  return (
    <div 
      className="fixed inset-0 flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/high-quality-food.jpg')" }}
    >
      <div className="bg-white/80 p-8 rounded-xl shadow-lg backdrop-blur-sm">
        <SignIn />
      </div>
    </div>
  );
};
export default Page;
