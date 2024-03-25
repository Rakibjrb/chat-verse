import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const UserDashboard = () => {
  return (
    <div className="pt-2 flex">
      <div>
        <Sidebar />
      </div>
      <div className="px-2 lg:pl-1 lg:pr-0 w-full h-screen overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default UserDashboard;
