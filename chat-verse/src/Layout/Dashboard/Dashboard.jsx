import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

const Dashboard = () => {
  return (
    <div className="w-full h-screen bg-gray-100 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto font-rubik">
        <div>
          <Navbar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
