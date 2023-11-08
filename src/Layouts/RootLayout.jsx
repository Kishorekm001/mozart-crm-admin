import React from "react";
import SideNav from "../components/SideNav/SideNav";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div class="flex flex-row w-full px-10 py-5 gap-6">
      <div style={{ width: "25%" }}>
        <SideNav />
      </div>
      <div style={{ width: "73%" }}>
        <Header />
        <div class="border-1 border-gray-500 mt-10 rounded-md pb-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
