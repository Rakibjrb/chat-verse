import { MdPhotoSizeSelectActual } from "react-icons/md";
import { RiFolderVideoFill } from "react-icons/ri";
import useAuth from "../../Hooks/auth/useAuth";
import toast from "react-hot-toast";

const PostCreate = () => {
  const { user } = useAuth();

  return (
    <div>
      {/* user */}
      <div className="flex items-center gap-2">
        <img
          className="w-10 h-10 rounded-full"
          src={"https://i.ibb.co/5x441PC/user.png"}
          alt="user image"
        />
        <h3 className="text-2xl text-gray-800">
          {user.displayName || "Rakibul Hasan"}
        </h3>
      </div>

      <form className="mt-4">
        <textarea
          className="w-full py-3 outline-none"
          type="text"
          placeholder="What's on your mind?"
          required
        />

        <div className="flex items-center justify-between mb-5">
          <div className="hover:cursor-pointer relative flex items-center justify-center flex-1 py-2 gap-3 text-xl hover:bg-gray-200 rounded-md">
            <MdPhotoSizeSelectActual className="text-green-500 text-2xl" />
            <h2 className="hidden md:block">Photo</h2>
            <input
              className="w-full absolute opacity-0 hover:cursor-pointer"
              type="file"
            />
          </div>

          <div
            onClick={() =>
              toast.error("Video Sharing feature not added yet...")
            }
            className="flex items-center justify-center flex-1 py-2 gap-3 text-xl hover:bg-gray-200 rounded-md"
          >
            <RiFolderVideoFill className="text-red-500 text-2xl" />
            <h2 className="hidden md:block">Video</h2>
          </div>
        </div>

        <button className="bg-green-500 w-full py-2 uppercase text-xl hover:bg-gray-300 transition-all">
          Post
        </button>
      </form>
    </div>
  );
};

export default PostCreate;
