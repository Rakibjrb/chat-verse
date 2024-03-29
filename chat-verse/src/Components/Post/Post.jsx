import PropTypes from "prop-types";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiLike, BiDislike, BiSolidDislike, BiSolidLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { useRef, useState } from "react";
import useMenu from "../../Hooks/useMenu";

const Post = ({ post }) => {
  const [isLike, setIsLike] = useState(false);
  const [isDisLike, setIsDisLike] = useState(false);
  const [isPostMenuOpen, setIsPostMenuOpen] = useState(false);
  const postMenuRef = useRef();
  useMenu(isPostMenuOpen, postMenuRef, setIsPostMenuOpen);

  const handleLike = () => {
    setIsLike(true);
    setIsDisLike(false);
  };

  const handleDisLike = () => {
    setIsLike(false);
    setIsDisLike(true);
  };

  return (
    <div className="bg-white rounded-md p-4 shadow-md">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img className="w-12" src={post?.user?.userImage} alt="userimage" />
          <div>
            <h2 className="text-xl font-semibold">{post?.user?.userName}</h2>
            <h3>{post?.postedOn}</h3>
          </div>
        </div>

        <div className="relative">
          <button
            onClick={() => {
              setIsPostMenuOpen(!isPostMenuOpen);
            }}
            className="text-2xl p-1 hover:bg-gray-200 rounded-lg hover:shadow-lg"
          >
            <BsThreeDotsVertical />
          </button>

          <ul
            ref={postMenuRef}
            className={`${
              isPostMenuOpen ? "" : "hidden"
            } absolute right-0 bg-slate-50 w-[200px] rounded-lg`}
          >
            <li className="px-8 py-4 hover:bg-green-400 rounded-lg">
              <button>Save Post</button>
            </li>
            <li className="px-8 py-4 hover:bg-green-400 rounded-lg">
              <button>Add to Favourites</button>
            </li>
            <li className="px-8 py-4 hover:bg-green-400 rounded-lg">
              <button>Edit Post</button>
            </li>
            <li className="px-8 py-4 hover:bg-green-400 rounded-lg">
              <button>Delete</button>
            </li>
          </ul>
        </div>
      </div>

      <p className="my-6">{post?.caption}</p>

      <div className="w-full xl:h-[450px]">
        <img
          className="w-full h-full rounded-md xl:object-cover"
          src={post?.image}
          alt="post image"
        />
      </div>

      <div className="mt-5">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <button onClick={handleLike}>
                {isLike ? (
                  <BiSolidLike className="text-3xl" />
                ) : (
                  <BiLike className="text-3xl" />
                )}
              </button>
              <h3 className="text-xl">
                {post?.like > 999
                  ? `${(post?.like / 1000).toFixed(1)}k`
                  : post?.like}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={handleDisLike}>
                {isDisLike ? (
                  <BiSolidDislike className="text-3xl" />
                ) : (
                  <BiDislike className="text-3xl" />
                )}
              </button>
              <h3 className="text-xl">
                {post?.disLike > 999
                  ? `${(post?.disLike / 1000).toFixed(1)}k`
                  : post?.disLike}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <button>
                <FaRegComment className="text-2xl" />
              </button>
              <h3 className="text-xl">{10}</h3>
            </div>
          </div>

          <form className="bg-gray-200 rounded-xl pl-3 w-full flex items-center">
            <input
              className="outline-none bg-transparent pr-1 w-full"
              type="text"
              placeholder="write your comment"
              required
            />
            <button className="uppercase bg-green-400 py-2 px-3 rounded-r-xl">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object,
};
export default Post;
