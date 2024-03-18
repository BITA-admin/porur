import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import App from "./App";
import "./index.css";
import { HashRouter, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import ContactUs from "./components/ContactUs/ContactUs";
import Updates from "./components/Updates/Updates";
import Courses from "./components/Courses/Courses";
import UiUx from "./components/Pages/UiUx";
import ReactJS from "./components/Pages/ReactJS";
import Angular from "./components/Pages/AngularJs";
import FSD from "./components/Pages/Fsd";
import Playwright from "./components/Pages/Playwright";
import RESTAPI from "./components/Pages/RESTAPI";
import SecurityTesting from "./components/Pages/SecurityTesting";
import BuisnessAnalyst from "./components/Pages/BuisnessAnalyst";
import Docker from "./components/Pages/Docker";
import SAP from "./components/Pages/SAP";
import Servicenow from "./components/Pages/Servicenow";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Navbar",
    element: <Navbar />,
  },
  {
    path: "courses",
    element: <Courses />,
  },
  {
    path: "uiux",
    element: <UiUx />,
  },
  {
    path: "reactjs",
    element: <ReactJS />,
  },

  {
    path: "angularjs",
    element: <Angular />,
  },
  {
    path: "fsd",
    element: <FSD />,
  },
  {
    path: "playwright",
    element: <Playwright />,
  },
  {
    path: "restapi",
    element: <RESTAPI />,
  },
  {
    path: "securitytesting",
    element: <SecurityTesting />,
  },
  {
    path: "businessanalyst",
    element: <BuisnessAnalyst />,
  },
  {
    path: "docker",
    element: <Docker />,
  },
  {
    path: "sap",
    element: <SAP />,
  },
  {
    path: "servicenow",
    element: <Servicenow />,
  },
  {
    path: "updates",
    element: <Updates />,
  },
  {
    path: "contactus",
    element: <ContactUs />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
