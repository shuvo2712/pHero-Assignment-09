import React from "react";
import { Outlet } from "react-router";
import NavBar from "../Components/NavBar & Footer/NavBar";
import Footer from "../Components/NavBar & Footer/Footer";

const Root = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
