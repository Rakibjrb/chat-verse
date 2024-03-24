import { useState } from "react";
import toast from "react-hot-toast";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { ImSpinner9 } from "react-icons/im";
import PropTypes from "prop-types";
import useAuth from "../../../../Hooks/auth/useAuth";
import { Link } from "react-router-dom";

const SignUp = ({ setIsOpen }) => {
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const { emailPasswordSignUp } = useAuth();

  const handleCreateAccount = (e) => {
    e.preventDefault();

    const info = {
      email: e.target.email.value,
      password: e.target.password.value,
      repassword: e.target.repassword.value,
    };

    const regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).{8,}$/;
    if (!regex.test(info.password)) {
      toast(
        "Please make sure you entered uppercase, \n\n number and one spacial character.",
        {
          duration: 8000,
        }
      );
      return;
    }

    if (info.password !== info.repassword) {
      toast.error("Re-type password doesn't matched");
      return;
    }

    setLoading(true);
    emailPasswordSignUp(info.email, info.password)
      .then(() => {
        setLoading(false);
        setIsOpen(false);
        toast.success("Account creation successful");
        e.target.email.value = "";
        e.target.password.value = "";
        e.target.repassword.value = "";
      })
      .catch(() => {
        setLoading(false);
        toast.error("something went wrong");
      });
  };

  return (
    <form onSubmit={handleCreateAccount} className="flex flex-col gap-5">
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
      <div className="relative">
        <label htmlFor="repassword">
          Re-Enter password
          <input
            name="repassword"
            className="mt-3 w-full border-2 border-green-500 p-2 rounded-md outline-none"
            type={`${showPass ? "text" : "password"}`}
            placeholder="re-type password here"
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
      <div className="w-full">
        <button
          type="submit"
          className="w-full flex justify-center bg-green-500 hover:bg-gray-300 py-3 rounded-md uppercase font-rubik transition-colors duration-200"
        >
          {loading ? (
            <ImSpinner9 className="text-xl animate-spin" />
          ) : (
            "Create Account"
          )}
        </button>
        <h3 className="text-center text-xl my-3">OR</h3>
        <Link
          to="/login"
          className="w-full flex justify-center bg-green-400 hover:bg-gray-300 py-3 rounded-md uppercase font-rubik transition-colors duration-200"
        >
          Sign In
        </Link>
      </div>
    </form>
  );
};

SignUp.propTypes = {
  setIsOpen: PropTypes.func,
};
export default SignUp;
