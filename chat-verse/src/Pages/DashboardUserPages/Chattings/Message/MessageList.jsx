import { NavLink } from "react-router-dom";
import { peoples } from "../../../../Components/Peoples/Peoples";
import useScroll from "../../../../Hooks/useScroll";

const activeClass = ({ isActive, isPending }) =>
  isPending
    ? "pending"
    : isActive
    ? "text-xl flex items-center pl-2 gap-3 py-3 rounded-md bg-green-300"
    : "text-xl flex items-center pl-2 gap-3 py-3 rounded-md";

const MessageList = () => {
  useScroll("messageList");

  return (
    <div className="font-rubik">
      <h1 className="text-xl font-semibold uppercase">Messages</h1>
      <div
        id="messageList"
        className="mt-2 border-t-4 py-3 h-[calc(100vh-168px)] overflow-y-scroll"
      >
        {peoples?.map((people, index) => (
          <NavLink
            to={`/home/chattings/${index}`}
            key={`peoplesindex${index}`}
            className={activeClass}
          >
            <img
              className="w-8 h-8 xl:w-10 xl:h-10"
              src={people?.img || "https://i.ibb.co/5x441PC/user.png"}
              alt="user image"
            />
            <h2 className="uppercase xl:text-xl">
              {people?.name || "ChatVerse User"}
            </h2>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default MessageList;
