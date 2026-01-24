import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Pages/HomePage";
import About from "./Pages/AboutPage";
import ErrorPage from "./Pages/ErrorPage";
import MyProfilePage from "./Pages/MyProfilePage";
import SkillsPage from "./Pages/SkillsPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/skillsData.json").then((res) => res.json()),
      },
      {
        path: "skills",
        Component: SkillsPage,
        loader: () => fetch("/skillsData.json").then((res) => res.json()),
      },
      {
        path: "myprofile",
        Component: MyProfilePage,
      },
      {
        path: "about",
        Component: About,
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);

export default router;
