import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import HomePage from "./Pages/HomePage.jsx";
import NewsRandos from "./Pages/NewsRandos.jsx";
import Activites from "./Pages/Activities.jsx";
import DetailsRandos from "./Pages/Details.jsx";
import DetailsActivities from "./Pages/DetailsActivities.jsx";
import SignIn from "./Pages/SignIn.jsx";
import SignUp from "./Pages/SignUp.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/news-randos",
        element: <NewsRandos />,
      },
      {
        path: "/news-randos/:id",
        element: <DetailsRandos />,
      },
      {
        path: "/activities",
        element: <Activites />,
      },
      {
        path: "/activities/:id",
        element: <DetailsActivities />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
