import { FaCamera } from "react-icons/fa";

const ProfilePic = () => {
  return (
    <div className="relative">
      <div className="relative w-full h-[140px] md:h-[220px] bg-slate-200 rounded-lg">
        <div className="absolute hover:cursor-pointer hover:bg-slate-300 transition-all bottom-5 right-3 flex justify-center items-center p-3 bg-white rounded-full">
          <FaCamera className="text-xl" />
        </div>
      </div>
      <div className="absolute top-16 md:top-24 left-4 md:left-6 w-1/3 md:w-1/4 lg:w-1/5 h-auto bg-slate-400 rounded-full border-[15px] border-white">
        <img
          className="rounded-full hover:opacity-60 transition-all hover:cursor-pointer"
          src="https://i.ibb.co/5x441PC/user.png"
          alt="profile image"
        />
      </div>
    </div>
  );
};

export default ProfilePic;
