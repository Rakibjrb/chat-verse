import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const Main = () => {
  return (
    <div className="h-screen overflow-hidden">
      <Nav />
      <Outlet />
    </div>
  );
};

export default Main;
