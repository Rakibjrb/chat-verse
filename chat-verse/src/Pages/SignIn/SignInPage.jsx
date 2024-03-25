import { useNavigate } from "react-router-dom";
import SignIn from "../Home/User/SignIn/SignIn";

const SignInPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-b from-[#fff] to-[#b2df92]">
      <div className="bg-[#b2df92] p-10 rounded-md">
        <SignIn />
        <button
          onClick={() => navigate("/")}
          className="mt-5 w-full bg-green-500 py-3 rounded-md"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default SignInPage;
