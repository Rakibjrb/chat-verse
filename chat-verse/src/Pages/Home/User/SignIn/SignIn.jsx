import { useState } from "react";
import toast from "react-hot-toast";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { ImSpinner9 } from "react-icons/im";
import PropTypes from "prop-types";
import useAuth from "../../../../Hooks/auth/useAuth";
import { useNavigate } from "react-router-dom";

const SignIn = ({ setIsOpen }) => {
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const { emailPasswordSignIn, setLoading: userLoading } = useAuth();
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    const info = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    setLoading(true);
    emailPasswordSignIn(info.email, info.password)
      .then(() => {
        e.target.email.value = "";
        e.target.password.value = "";
        userLoading(false);
        setTimeout(() => {
          setLoading(false);
          toast.success("Sign In successful");
          navigate("/home");
        }, 1000);

        if (setIsOpen) {
          setIsOpen(false);
        }
      })
      .catch(() => {
        setLoading(false);
        toast.error("something went wrong");
      });
  };

  return (
    <form onSubmit={handleSignIn} className="flex flex-col gap-5">
      <div>
        <label htmlFor="email">
          Enter your email
          <input
            name="email"
            className="mt-3 w-full border-2 border-green-500 p-2 rounded-md outline-none"
            type="email"
            placeholder="Enter email here"
            required
          />
        </label>
      </div>
      <div className="relative">
        <label htmlFor="password">
          Create password
          <input
            name="password"
            className="mt-3 w-full border-2 border-green-500 p-2 rounded-md outline-none"
            type={`${showPass ? "text" : "password"}`}
            placeholder="type password here"
            required
          />
        </label>
        <div
          onClick={() => setShowPass(!showPass)}
          className="inline-block cursor-pointer absolute top-12 right-3"
        >
          {showPass ? (
            <IoMdEyeOff className="text-xl" />
          ) : (
            <IoMdEye className="text-xl" />
          )}
        </div>
      </div>
      <button
        type="submit"
        className="flex justify-center bg-green-500 hover:bg-gray-300 py-3 rounded-md uppercase font-rubik transition-colors duration-200"
      >
        {loading ? <ImSpinner9 className="text-xl animate-spin" /> : "Sign In"}
      </button>
    </form>
  );
};

SignIn.propTypes = {
  setIsOpen: PropTypes.func,
};
export default SignIn;
