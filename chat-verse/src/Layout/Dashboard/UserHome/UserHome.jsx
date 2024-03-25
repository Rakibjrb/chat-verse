import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const UserHome = () => {
  return (
    <div className="2xl:mt-5 flex">
      <div>
        <Sidebar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default UserHome;
