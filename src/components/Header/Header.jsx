import React from "react";
import Bell from "../../assets/icons/notificationBell.svg";
import Profile from "../../assets/icons/profile.svg";
import DownArrow from "../../assets/icons/downArrow.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const logoutAPIUrl = "http://164.52.216.64:8011/api/Login/Logout";
  const token = localStorage.getItem("JwtToken");
  const JwtToken = token;

  const navigate = useNavigate();

  const headers = {
    Authorization: `Bearer ${JwtToken}`,
    accept: "text/plain",
    "Content-Type": "application/json",
  };
  const handleLogout = () => {
    console.log(JwtToken);
    axios
      .post(logoutAPIUrl, {
        headers,
      })
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div class="w-full bg-primarybg  px-8 py-2  rounded-md flex flex-row justify-between">
      <img src={Bell} alt="bell" class="w-8" />
      <div class="flex flex-row justify-around gap-4 bg-white rounded-md px-5">
        <img src={Profile} alt="bell" class="w-6" />
        <span class="self-center text-sm font-bold text-primarybg">Admin</span>
        <img src={DownArrow} alt="bell" class="w-5 mt-1" />
      </div>
      <button class="text-white" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Header;
