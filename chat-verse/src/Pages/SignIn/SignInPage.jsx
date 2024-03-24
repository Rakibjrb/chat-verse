import SignIn from "../Home/User/SignIn/SignIn";

const SignInPage = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-b from-[#fff] to-[#b2df92]">
      <div className="bg-[#b2df92] p-10 rounded-md">
        <SignIn />
      </div>
    </div>
  );
};

export default SignInPage;
