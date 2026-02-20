import { SignUp } from "@clerk/nextjs";

const Page = () => {
  return (
    <div className="min-h-screen pt-36 pb-10 flex items-center justify-center bg-gray-50">
      <SignUp />
    </div>
  );
};
export default Page;
