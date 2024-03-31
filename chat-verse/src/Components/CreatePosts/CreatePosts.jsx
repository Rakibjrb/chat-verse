import { BsFillCameraVideoFill } from "react-icons/bs";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { RiFolderVideoFill } from "react-icons/ri";
import { BsEmojiHeartEyes } from "react-icons/bs";
import useAuth from "../../Hooks/auth/useAuth";

const postBtns = [
  {
    icon: <BsFillCameraVideoFill className="text-yellow-500 text-2xl" />,
    text: "Go Live",
  },
  {
    icon: <MdPhotoSizeSelectActual className="text-green-500 text-2xl" />,
    text: "Photo",
  },
  {
    icon: <RiFolderVideoFill className="text-red-500 text-2xl" />,
    text: "Video",
  },
  {
    icon: <BsEmojiHeartEyes className="text-blue-500 text-2xl" />,
    text: "Feelings",
  },
];

const CreatePosts = () => {
  const { user } = useAuth();

  return (
    <>
      <div className="bg-white p-3 md:py-4 md:px-6 rounded-md">
        <div className="flex items-center gap-4">
          <img
            className="w-10 h-10 rounded-full"
            src={
              user?.photoURL
                ? user?.photoURL
                : "https://i.ibb.co/5x441PC/user.png"
            }
            alt=""
          />
          <div className="bg-gray-100 rounded-lg py-2 text-xl px-4 text-gray-400 hover:bg-gray-200 w-full hover:cursor-pointer transition-colors">
            {"What's on your mind ?"}
          </div>
        </div>
        <div className="flex items-center justify-between mt-5 border-t-2 pt-5">
          {postBtns.map((item, index) => (
            <button
              key={`craetePostBtns${index}`}
              className="flex items-center justify-center flex-1 py-2 gap-3 text-xl hover:bg-gray-200 rounded-md"
            >
              {item.icon}
              <h2 className="hidden md:block">{item.text}</h2>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default CreatePosts;
