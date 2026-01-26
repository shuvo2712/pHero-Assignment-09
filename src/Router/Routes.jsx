import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/HomePage";
import About from "../Pages/AboutPage";
import ErrorPage from "../Pages/ErrorPage";
import MyProfilePage from "../Pages/MyProfilePage";
import SkillsPage from "../Pages/SkillsPage";
import SkillDetailsPage from "../Pages/SkillDetailsPage";
import LoginPage from "../Pages/LoginPage";
import SignupPage from "../Pages/SignUpPage";
import PrivateRoute from "./PrivateRoute";

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
        path: "skills/:id",
        element: (
          <PrivateRoute>
            <SkillDetailsPage />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const res = await fetch("/skillsData.json");
          const data = await res.json();
          return data.find((skill) => skill.skillId === params.id);
        },
      },
      {
        path: "myprofile",
        Component: () => (
          <PrivateRoute>
            <MyProfilePage />
          </PrivateRoute>
        ),
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "login",
        Component: LoginPage,
      },
      {
        path: "signup",
        Component: SignupPage,
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);

export default router;
