import { BsFillCameraVideoFill } from "react-icons/bs";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { RiFolderVideoFill } from "react-icons/ri";
import { BsEmojiHeartEyes } from "react-icons/bs";
import useAuth from "../../Hooks/auth/useAuth";
import { useState } from "react";
import Modal from "../Shared/Modal/Modal";
import PostCreate from "./PostCreate";
import toast from "react-hot-toast";

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
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  const handlePostCreator = (index) => {
    if (index == 0) {
      toast.error("Video Streaming feature not added yet...");
      return;
    } else if (index == 1) {
      setIsOpen(true);
      return;
    } else if (index == 2) {
      toast.error("Video Sharing feature not added yet...");
      return;
    } else if (index == 3) {
      toast.error("Feeling Sharing feature not added yet...");
      return;
    }
  };

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
          <div
            onClick={() => setIsOpen(true)}
            className="bg-gray-100 rounded-lg py-2 text-xl px-4 text-gray-400 hover:bg-gray-200 w-full hover:cursor-pointer transition-colors"
          >
            {"What's on your mind ?"}
          </div>
        </div>
        <div className="flex items-center justify-between mt-5 border-t-2 pt-5">
          {postBtns.map((item, index) => (
            <button
              onClick={() => handlePostCreator(index)}
              key={`craetePostBtns${index}`}
              className="flex items-center justify-center flex-1 py-2 gap-3 text-xl hover:bg-gray-200 rounded-md"
            >
              {item.icon}
              <h2 className="hidden md:block">{item.text}</h2>
            </button>
          ))}
        </div>
      </div>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <PostCreate />
      </Modal>
    </>
  );
};

export default CreatePosts;
