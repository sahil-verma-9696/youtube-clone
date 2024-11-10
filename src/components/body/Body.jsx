import React from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="Body size-full flex flex-col">
      <Navbar />
      <main  className="Body-main size-full flex relative">
        <SideBar />
        <Outlet />
      </main>
    </div>
  );
};

export default Body;
