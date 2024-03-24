import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="text-center text-7xl">
      <Outlet />
    </div>
  );
};

export default Main;
