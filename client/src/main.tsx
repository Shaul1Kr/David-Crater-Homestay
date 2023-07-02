import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.tsx";
import HomePage from "./Pages/HomePage.tsx";
import RoomsPage from "./Pages/RoomsPage.tsx";
import ToursAndSafaris from "./Pages/ToursAndSafaris.tsx";
import Book from "./Pages/BookPage.tsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/Rooms",
        element: <RoomsPage />,
      },
      {
        path: "/ToursAndSafaris",
        element: <ToursAndSafaris />,
      },
      {
        path: "/Book",
        element: <Book />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
