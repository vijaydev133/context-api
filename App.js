import React, { Children, useState } from "react";
import ReactDOM from "react-dom/client";

import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./component/Header";
import Body from "./component/Body";
import About from "./component/About";
import Careers from "./component/Carrers";
import Contact from "./component/Contact";

import { useState } from "react";
import UserContext from "./utils/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  const [user, setUser] = useState({
    fname: "vj",
    age: 34,
  });

  return (
    <UserContext.Provider value={{ user }}>
      <Header />
      <Outlet />
      <input
        type="text"
        onChange={(e) => {
          setUser({ fname: e.target.value });
        }}
      />
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
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
        path: "/careers",
        element: <Careers />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
root.render(<RouterProvider router={appRouter} />);
