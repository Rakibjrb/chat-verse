import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const UserDashboard = () => {
  return (
    <div className="2xl:mt-5 flex">
      <div>
        <Sidebar />
      </div>
      <div className="2xl:ml-3">
        <Outlet />
      </div>
    </div>
  );
};

export default UserDashboard;
