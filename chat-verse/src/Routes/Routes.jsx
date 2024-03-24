import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Dashboard from "../Layout/Dashboard/Dashboard";
import UserHome from "../Layout/Dashboard/Pages/UserHome/UserHome";
import PrivateRoutes from "./PrivateRoutes";
import SignInPage from "../Pages/SignIn/SignInPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/login",
        element: <SignInPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard />
      </PrivateRoutes>
    ),
    children: [
      {
        index: true,
        path: "",
        element: (
          <PrivateRoutes>
            <UserHome />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
export default routes;
