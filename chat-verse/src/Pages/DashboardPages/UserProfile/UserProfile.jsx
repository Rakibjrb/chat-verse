import ProfileCard from "./ProfileCard";
import ProfilePic from "./ProfilePic";

const UserProfile = () => {
  return (
    <div className="mt-4 flex gap-4">
      <div className="hidden xl:block lg:w-1/4 p-3 bg-white rounded-lg">
        <ProfileCard />
      </div>
      <div className="w-full xl:w-3/4 p-3">
        <ProfilePic />
      </div>
    </div>
  );
};

export default UserProfile;
