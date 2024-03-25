import { useEffect, useState } from "react";
import Button from "../../Components/Shared/Button/Button";
import Modal from "../../Components/Shared/Modal/Modal";
import bannerImage from "../../assets/mainHome/home-banner.png";
import Nav from "./Nav";
import SignUp from "./User/SignUp/SignUp";
import useAuth from "../../Hooks/auth/useAuth";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) {
      navigate("/home");
    }
  }, [loading, user, navigate]);

  return (
    <>
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
            <button onClick={() => setIsOpen(true)}>
              <Button>
                <p className="text-2xl">Join Now</p>
              </Button>
            </button>
          </div>
          <div>
            <img className="w-full" src={bannerImage} alt="banner image" />
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <SignUp setIsOpen={setIsOpen} />
      </Modal>
    </>
  );
};

export default Home;
