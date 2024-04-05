import CreatePosts from "../../../Components/CreatePosts/CreatePosts";
import Post from "../../../Components/Post/Post";
import Posters from "../../../Components/Posters/Posters";
import useScroll from "../../../Hooks/useScroll";

const posts = [
  {
    user: {
      userImage: "https://i.ibb.co/5x441PC/user.png",
      userName: "Rakibul Hasan",
    },
    postedOn: "10-07-2004",
    caption:
      "this is caption this is caption this is caption vthis is caption this is caption this is caption this is caption",
    image: "https://i.ibb.co/Rvy7Xh7/redcar2.png",
    like: 22000,
    disLike: 2100,
  },
  {
    user: {
      userImage: "https://i.ibb.co/5x441PC/user.png",
      userName: "Rakibul Hasan",
    },
    postedOn: "12-09-2004",
    caption:
      "this is caption this is caption this is caption vthis is caption this is caption this is caption this is caption",
    image: "https://i.ibb.co/Rvy7Xh7/redcar2.png",
    like: 800,
    disLike: 100,
  },
  {
    user: {
      userImage: "https://i.ibb.co/5x441PC/user.png",
      userName: "Rakibul Hasan",
    },
    postedOn: "12-09-2004",
    caption:
      "this is caption this is caption this is caption vthis is caption this is caption this is caption this is caption",
    image: "https://i.ibb.co/Rvy7Xh7/redcar2.png",
    like: 800,
    disLike: 20,
  },
];

const Contents = () => {
  useScroll("homeContents");

  return (
    <div id="homeContents" className="h-[calc(100vh-94px)] overflow-y-auto">
      <Posters />
      <CreatePosts />
      <div className="mt-5 space-y-5">
        {posts?.map((post, index) => (
          <Post key={`recentPostsindex${index}`} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Contents;
