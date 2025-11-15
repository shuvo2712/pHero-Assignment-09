import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./Components/Home";
import About from "./Components/About";
import Login from "./Layouts/Login";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "login", Component: Login },
    ],
  },
]);

export default router;
