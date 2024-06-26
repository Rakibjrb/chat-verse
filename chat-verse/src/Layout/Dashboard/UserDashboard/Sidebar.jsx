import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaRegNewspaper,
  FaBookmark,
  FaStar,
  FaUserFriends,
} from "react-icons/fa";
import useData from "../../../Hooks/data/useData";

const activeClass = ({ isActive, isPending }) =>
  isPending
    ? "pending"
    : isActive
    ? "text-xl flex items-center pl-5 gap-3 py-3 rounded-md bg-green-300"
    : "text-xl flex items-center pl-5 gap-3 py-3 rounded-md";

const Sidebar = () => {
  const { showSidebar } = useData();

  return (
    <div
      className={`${
        showSidebar ? "bg-gray-300 h-screen" : "hidden"
      } lg:block w-[250px] font-rubik`}
    >
      <ul className="space-y-3">
        <li>
          <NavLink to={"/home"} className={activeClass}>
            <FaHome />
            <h3>Home</h3>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/home/peoples"} className={activeClass}>
            <FaUserFriends />
            <h3>Peoples</h3>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/home/posts"} className={activeClass}>
            <FaRegNewspaper />
            <h3>Posts</h3>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/home/saved"} className={activeClass}>
            <FaBookmark />
            <h3>Saved</h3>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/home/favourites"} className={activeClass}>
            <FaStar />
            <h3>Favourites</h3>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
