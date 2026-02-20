import { SignIn } from "@clerk/nextjs";

const Page = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <SignIn />
    </div>
  );
};
export default Page;
