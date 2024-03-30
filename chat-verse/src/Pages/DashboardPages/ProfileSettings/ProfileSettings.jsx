import NameAndPhoto from "./NameAndPhoto";

const ProfileSettings = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white mt-5 rounded-lg font-rubik py-8 px-4">
      <h1 className="text-3xl text-center font-semibold">Profile Settings</h1>
      <NameAndPhoto />
    </div>
  );
};

export default ProfileSettings;
