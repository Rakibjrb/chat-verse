import { useEffect } from "react";
import CreatePosts from "../../../Components/CreatePosts/CreatePosts";
import Post from "../../../Components/Post/Post";

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
    linke: 2000,
    share: 200,
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
    linke: 800,
    share: 100,
  },
];

const Contents = () => {
  useEffect(() => {
    const homeContents = document.getElementById("homeContents");
    homeContents.scrollIntoView({ block: "end" });
  }, []);

  return (
    <div id="homeContents" className="h-[calc(100vh-94px)] overflow-y-auto">
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
