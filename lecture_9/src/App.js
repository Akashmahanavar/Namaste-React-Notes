import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Error from "./pages/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
