import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./Auth/AuthProvider";
import DataProvider from "./Data/DataProvider/DataProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster />
    <AuthProvider>
      <DataProvider>
        <RouterProvider router={routes} />
      </DataProvider>
    </AuthProvider>
  </React.StrictMode>
);
