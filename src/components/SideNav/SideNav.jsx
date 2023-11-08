import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/logo.svg";
import Menu from "../../assets/icons/menu.svg";
import Search from "../../assets/icons/search.svg";
import Dashboard from "../../assets/icons/dashboard.svg";
import Administrator from "../../assets/icons/administrator.svg";
import Customer from "../../assets/icons/customer.svg";
import Design from "../../assets/icons/design.svg";
import Leave from "../../assets/icons/leave.svg";
import Visit from "../../assets/icons/visit.svg";
import Notification from "../../assets/icons/notification.svg";
import Broadcast from "../../assets/icons/broadcast.svg";
import { Link, useLocation } from "react-router-dom";
import "../../assets/styles/main.css";

const SideNav = () => {
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const [active, setActive] = useState("dashboard");

  const location = useLocation();
  const path = location.pathname;

  const administratorRoutes = [
    "/manage-item",
    "/manage-customer",
    "/manage-leave-type",
    "/manage-attendance",
    "/manage-territory",
    "/manage-blood-group",
    "/manage-profile",
    "/role-permission",
  ];

  const toggleSubmenu = () => {
    setOpenSubMenu(!openSubMenu);
  };

  useEffect(() => {
    if (administratorRoutes.includes(path)) {
      setOpenSubMenu(true);
      if (path === "/manage-profile" || path === "/role-permission") {
        setOpenSubMenu(true);
        setActive("manage_profile");
      }
    }
  }, []);

  return (
    <div class="w-full  border-1 border-primaryborder ">
      <div class="flex flex-row justify-around border-b-1 border-primaryborder py-3">
        <img src={Logo} alt="logo" class="w-36 h-15" />
        <img src={Menu} alt="menu" class="w-10" />
      </div>
      <div class="py-4 ">
        <div class="relative px-6">
          <input
            type="text"
            class="w-full h-10 outline-none bg-gray-200 px-5 pr-12 rounded-md "
          />
          <img src={Search} alt="" class="absolute top-3 right-10 " />
        </div>
        <div class="flex flex-col gap-10  mt-6 mb-6">
          <Link to="/dashboard">
            <div
              class={`flex flex-row gap-6  align-middle cursor-pointer  p-3 pl-7  mb-[-40px] ${
                path === "/dashboard" ? "bg-gray-300" : ""
              }`}
              onClick={() => {
                setOpenSubMenu(false);
              }}
            >
              <img src={Dashboard} alt="dashboard" class="w-6" />
              <span class="font-medium text-primary text-base  ">
                DASHBOARD
              </span>
            </div>
          </Link>

          <Link to="/manage-profile">
            <div
              class={`flex flex-row gap-6  align-middle cursor-pointer  p-3 pl-7  mb-[-40px] ${
                administratorRoutes.includes(path) ? "bg-gray-300" : ""
              }`}
              onClick={() => {
                toggleSubmenu();
                setActive("manage_profile");
              }}
            >
              <img src={Administrator} alt="dashboard" class="w-6" />
              <span class="font-medium text-primary text-base mt-1">
                ADMINISTRATOR
              </span>
            </div>
          </Link>
          {openSubMenu && (
            <div className="submenu" class="mb-[-40px]">
              <ul class="ml-16 mt-2">
                <li onClick={() => setActive("manage_item")} class="mb-4">
                  <Link to="/manage-item" class="flex gap-3">
                    <div>
                      <input
                        type="radio"
                        name="radio"
                        checked={active === "manage_item" && true}
                      />
                    </div>
                    <span
                      class={`text-primary ${
                        active === "manage_item" && "text-sky-500"
                      }`}
                    >
                      Manage Item Master
                    </span>
                  </Link>
                </li>
                <li onClick={() => setActive("manage_customer")} class="mb-4">
                  <Link to="/manage-customer" class="flex gap-3">
                    <input
                      type="radio"
                      name="radio"
                      checked={active === "manage_customer" && true}
                    />
                    <span
                      class={`text-primary ${
                        active === "manage_customer" && "text-sky-500"
                      }`}
                    >
                      Manage Customer Type
                    </span>{" "}
                  </Link>
                </li>{" "}
                <li onClick={() => setActive("manage_leave")} class="mb-4">
                  <Link to="/manage-leave-type" class="flex gap-3">
                    <input
                      type="radio"
                      name="radio"
                      checked={active === "manage_leave" && true}
                    />
                    <span
                      class={`text-primary ${
                        active === "manage_leave" && "text-sky-500"
                      }`}
                    >
                      Manage Leave Type
                    </span>{" "}
                  </Link>
                </li>{" "}
                <li onClick={() => setActive("manage_profile")} class="mb-4">
                  <Link to="/manage-profile" class="flex gap-3">
                    <input
                      type="radio"
                      name="radio"
                      checked={active === "manage_profile" && true}
                      //   className="custom-radio "
                    />
                    <span
                      class={`text-primary ${
                        active === "manage_profile" && "text-sky-500"
                      }`}
                    >
                      Manage Profile{" "}
                    </span>
                  </Link>
                </li>{" "}
                <li onClick={() => setActive("manage_attendance")} class="mb-4">
                  <Link to="/manage-attendance" class="flex gap-3">
                    <input
                      type="radio"
                      name="radio"
                      checked={active === "manage_attendance" && true}
                    />
                    <span
                      class={`text-primary ${
                        active === "manage_attendance" && "text-sky-500"
                      }`}
                    >
                      Manage Attendance
                    </span>{" "}
                  </Link>
                </li>{" "}
                <li onClick={() => setActive("manage_territory")} class="mb-4">
                  <Link to="/manage-territory" class="flex gap-3">
                    <input
                      type="radio"
                      name="radio"
                      checked={active === "manage_territory" && true}
                    />
                    <span
                      class={`text-primary ${
                        active === "manage_territory" && "text-sky-500"
                      }`}
                    >
                      Manage Territory
                    </span>{" "}
                  </Link>
                </li>{" "}
                <li
                  onClick={() => setActive("manage_blood_group")}
                  class="mb-4"
                >
                  <Link to="/manage-blood-group" class="flex gap-3">
                    <input
                      type="radio"
                      name="radio"
                      checked={active === "manage_blood_group" && true}
                    />
                    <span
                      class={`text-primary ${
                        active === "manage_blood_group" && "text-sky-500"
                      }`}
                    >
                      Manage Blood Group{" "}
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          )}

          <Link to="/customer">
            <div
              class={`flex flex-row gap-6 align-middle cursor-pointer  p-3 pl-7  mb-[-40px] ${
                path === "/customer" ? "bg-gray-300" : ""
              }`}
              onClick={() => {
                setOpenSubMenu(false);
              }}
            >
              <img src={Customer} alt="dashboard" class="w-6" />
              <span class="font-medium text-primary text-base mt-1">
                CUSTOMER
              </span>
            </div>
          </Link>
          <Link to="/design-master">
            <div
              class={`flex flex-row gap-6  align-middle cursor-pointer  p-3 pl-7  mb-[-40px] ${
                path === "/design-master" ? "bg-gray-300" : ""
              }`}
              onClick={() => {
                setOpenSubMenu(false);
              }}
            >
              <img src={Design} alt="dashboard" class="w-6" />
              <span class="font-medium text-primary text-base mt-1">
                DESIGN MASTER
              </span>
            </div>
          </Link>
          <Link to="/manage-leave">
            <div
              class={`flex flex-row gap-6  align-middle cursor-pointer  p-3 pl-7  mb-[-40px] ${
                path === "/manage-leave" ? "bg-gray-300" : ""
              }`}
              onClick={() => {
                setOpenSubMenu(false);
              }}
            >
              <img src={Leave} alt="dashboard" class="w-6" />
              <span class="font-medium text-primary text-base mt-1">
                MANAGE LEAVE{" "}
              </span>
            </div>
          </Link>
          <Link to="/visit">
            <div
              class={`flex flex-row gap-6  align-middle cursor-pointer  p-3 pl-7  mb-[-40px] ${
                path === "/visit" ? "bg-gray-300" : ""
              }`}
              onClick={() => {
                setOpenSubMenu(false);
              }}
            >
              <img src={Visit} alt="dashboard" class="w-6" />
              <span class="font-medium text-primary text-base mt-1">VISIT</span>
            </div>
          </Link>
          <Link to="/notification">
            <div
              class={`flex flex-row gap-6  align-middle cursor-pointer  p-3 pl-7  mb-[-40px] ${
                path === "/notification" ? "bg-gray-300" : ""
              }`}
              onClick={() => {
                setOpenSubMenu(false);
              }}
            >
              <img src={Notification} alt="dashboard" class="w-6" />
              <span class="font-medium text-primary text-base mt-1">
                NOTIFICATION
              </span>
            </div>
          </Link>
          <Link to="/broadcast">
            <div
              class={`flex flex-row gap-6  align-middle cursor-pointer  p-3 pl-7  mb-[-40px] ${
                path === "/broadcast" ? "bg-gray-300" : ""
              }`}
              onClick={() => {
                setOpenSubMenu(false);
              }}
            >
              <img src={Broadcast} alt="dashboard" class="w-6" />
              <span class="font-medium text-primary text-base mt-1">
                BROADCAST
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
