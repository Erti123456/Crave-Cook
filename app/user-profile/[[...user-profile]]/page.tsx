import { UserProfile } from "@clerk/nextjs";

const UserProfilePage = () => {
  return (
    <div className="min-h-screen p-8 flex items-center justify-center bg-gray-50">
      <UserProfile path="/user-profile" />
    </div>
  );
};
export default UserProfilePage;
