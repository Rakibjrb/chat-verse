import { Outlet } from "react-router-dom";
import MessageList from "./Message/MessageList";

const Chattings = () => {
  return (
    <div className="w-full grid gap-2 grid-cols-8 rounded-md h-[calc(100vh-88px)] mt-2">
      <div className="bg-white hidden md:block md:col-span-3 xl:col-span-2 p-2 rounded-md">
        <MessageList />
      </div>
      <div className="bg-white col-span-8 md:col-span-5 xl:col-span-6 rounded-md">
        <Outlet />
      </div>
    </div>
  );
};

export default Chattings;
