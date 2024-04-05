import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Dashboard from "../Layout/Dashboard/Dashboard";
import PrivateRoutes from "./PrivateRoutes";
import SignInPage from "../Pages/SignIn/SignInPage";
import HomePage from "../Pages/DashboardUserPages/Home/Home";
import UserDashboard from "../Layout/Dashboard/UserDashboard/UserDashboard";
import Posts from "../Pages/DashboardUserPages/Posts/Posts";
import Saved from "../Pages/DashboardUserPages/Saved/Saved";
import Favourites from "../Pages/DashboardUserPages/Favourites/Favourites";
import UserProfile from "../Pages/DashboardPages/UserProfile/UserProfile";
import ProfileSettings from "../Pages/DashboardPages/ProfileSettings/ProfileSettings";
import Peoples from "../Pages/DashboardUserPages/Peoples/Peoples";
import Notifications from "../Pages/DashboardUserPages/Notifications/Notifications";

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
    path: "/home",
    element: (
      <PrivateRoutes>
        <Dashboard />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "",
        element: (
          <PrivateRoutes>
            <UserDashboard />
          </PrivateRoutes>
        ),
        children: [
          {
            path: "",
            element: (
              <PrivateRoutes>
                <HomePage />
              </PrivateRoutes>
            ),
          },
          {
            path: "peoples",
            element: (
              <PrivateRoutes>
                <Peoples />
              </PrivateRoutes>
            ),
          },
          {
            path: "posts",
            element: (
              <PrivateRoutes>
                <Posts />
              </PrivateRoutes>
            ),
          },
          {
            path: "notifications",
            element: (
              <PrivateRoutes>
                <Notifications />
              </PrivateRoutes>
            ),
          },
          {
            path: "saved",
            element: (
              <PrivateRoutes>
                <Saved />
              </PrivateRoutes>
            ),
          },
          {
            path: "favourites",
            element: (
              <PrivateRoutes>
                <Favourites />
              </PrivateRoutes>
            ),
          },
        ],
      },
      {
        path: "user-profile",
        element: (
          <PrivateRoutes>
            <UserProfile />
          </PrivateRoutes>
        ),
      },
      {
        path: "profile-settings",
        element: (
          <PrivateRoutes>
            <ProfileSettings />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
export default routes;
