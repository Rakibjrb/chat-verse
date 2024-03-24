import { Link } from "react-router-dom";
import Button from "../../Components/Shared/Button/Button";
import bannerImage from "../../assets/mainHome/home-banner.png";
import Nav from "./Nav";

const Home = () => {
  return (
    <div className="font-rubik w-svw h-screen bg-gradient-to-b from-[#fff] to-[#b2df92]">
      <Nav />
      <div className="max-w-7xl h-[calc(100vh-100px)] mx-auto flex flex-col gap-10 lg:flex-row lg:justify-between items-center">
        <div className="px-5 xl:px-0 mt-16 lg:mt-0">
          <h1 className="text-4xl lg:text-5xl font-semibold">
            Welcome to <br />{" "}
            <span className="text-5xl lg:text-7xl font-extrabold text-green-500">
              Chat Verse .
            </span>
          </h1>
          <h2 className="text-3xl w-3/4 mt-5 mb-8">
            Unlock a World of Conversations with our application
          </h2>
          <Button>
            <Link className="text-2xl">Join Now</Link>
          </Button>
        </div>
        <div>
          <img className="w-full" src={bannerImage} alt="banner image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
