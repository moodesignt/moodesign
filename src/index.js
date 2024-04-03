import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import Studio from "./pages/studio";

import './global.css'
import Home from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/studio",
    element: <Studio />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);