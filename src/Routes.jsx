import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./Pages/HomePage";
import About from "./Pages/AboutPage";
import Login from "./Pages/LoginPage";
import ErrorPage from "./Pages/ErrorPage";

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
  {
    path: "*",
    Component: ErrorPage,
  },
]);

export default router;
