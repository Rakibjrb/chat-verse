import PropTypes from "prop-types";
import { BsThreeDotsVertical } from "react-icons/bs";

const Post = ({ post }) => {
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
        <div>
          <button className="text-2xl p-1 hover:bg-gray-200 rounded-lg hover:shadow-lg">
            <BsThreeDotsVertical />
          </button>
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
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object,
};
export default Post;
