import { useRef, useState } from "react";
import { FaUser, FaHome } from "react-icons/fa";
import { IoMdArrowDropright, IoMdSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/Logo/Logo.png";
import useAuth from "../../../Hooks/auth/useAuth";
import Modal from "../../../Components/Shared/Modal/Modal";
import Messages from "../../../Components/Messages/Messages";
import Notifications from "../../../Components/Notifications/Notifications";
import useData from "../../../Hooks/data/useData";
import useMenu from "../../../Hooks/useMenu";

const links = (
  <>
    <li>
      <Link
        to={"/home"}
        className="hover:text-green-500 transition-all flex justify-between items-center gap-3 text-xl"
      >
        <div className="flex justify-between items-center gap-3">
          <FaHome className="text-xl" /> Home
        </div>{" "}
        <IoMdArrowDropright />
      </Link>
    </li>
    <li>
      <Link
        to={"/home/user-profile"}
        className="hover:text-green-500 transition-all flex justify-between items-center gap-3 text-xl"
      >
        <div className="flex justify-between items-center gap-3">
          <FaUser className="text-xl" /> Profile
        </div>{" "}
        <IoMdArrowDropright />
      </Link>
    </li>
    <li>
      <Link
        to={"/home/profile-settings"}
        className="hover:text-green-500 transition-all flex justify-between items-center gap-3 text-xl"
      >
        <div className="flex justify-between items-center gap-3">
          <IoMdSettings className="text-xl" /> Settings
        </div>{" "}
        <IoMdArrowDropright />
      </Link>
    </li>
  </>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const navOpenRef = useRef();
  const { user, logout } = useAuth();
  const { showSidebar, setShowSidebar } = useData();
  const location = useLocation();
  useMenu(show, navOpenRef, setShow);

  return (
    <>
      <nav className="bg-white shadow-md rounded-xl flex justify-between items-center pr-4 py-4">
        <div className="flex items-center">
          {location.pathname === "/home" ||
          location.pathname === "/home/peoples" ||
          location.pathname === "/home/saved" ||
          location.pathname === "/home/favourites" ||
          location.pathname === "/home/posts" ? (
            <button
              onClick={() => setShowSidebar(!showSidebar)}
              className="ml-4 lg:hidden mr-1"
            >
              {showSidebar ? (
                <MdOutlineClose className="text-2xl" />
              ) : (
                <FaBarsStaggered className="text-2xl" />
              )}
            </button>
          ) : (
            ""
          )}
          <div className="flex items-center">
            <img className="w-[50px] h-[40px]" src={logo} alt="logo" />
            <h3 className="hidden md:block text-2xl -ml-2 font-bold">
              Chat <span className="text-green-500">Verse.</span>
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <Notifications />
          <Messages />
          <div className="relative">
            <button
              onClick={() => setShow(true)}
              className="flex items-center rounded-full"
            >
              <img
                className="w-8 h-8 rounded-full"
                src={
                  user?.photoURL
                    ? user?.photoURL
                    : "https://i.ibb.co/5x441PC/user.png"
                }
                alt="user profile image"
              />
            </button>
            <ul
              ref={navOpenRef}
              className={`z-30 absolute -right-4 top-14 bg-gray-100 w-[270px] p-8 rounded-md space-y-5 ${
                show ? "" : "hidden"
              }`}
            >
              {links}
              <li>
                <div
                  onClick={() => setIsOpen(true)}
                  className="hover:text-red-500 transition-all cursor-pointer flex justify-between items-center gap-3 text-xl"
                >
                  <div className="flex justify-between items-center gap-3">
                    <IoLogOut className="text-xl" /> Logout
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div>
          <h2 className="text-center text-3xl mb-7">Are you sure?</h2>
          <div className="flex gap-5">
            <button
              onClick={() => {
                logout();
              }}
              className="font-semibold w-full py-2 px-4 bg-red-400 uppercase rounded-md hover:bg-gray-300"
            >
              Yes Logout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="font-semibold w-full py-2 px-4 bg-gray-300 uppercase rounded-md hover:bg-slate-400"
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Navbar;
