import { Outlet } from "react-router-dom";
import MessageList from "./Message/MessageList";

const Chattings = () => {
  return (
    <div className=" w-full bg-green-400 grid grid-cols-8 gap-4 rounded-md p-4 h-[calc(100vh-88px)]">
      <div className="bg-white hidden md:block md:col-span-3 xl:col-span-2 p-2 rounded-md">
        <MessageList />
      </div>
      <div className="bg-white col-span-8 md:col-span-5 xl:col-span-6 rounded-md p-2">
        <Outlet />
      </div>
    </div>
  );
};

export default Chattings;
