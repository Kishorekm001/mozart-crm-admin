import React from "react";
import Add from "../../assets/icons/add.svg";
import Search from "../../assets/icons/search.svg";
import SearchColoured from "../../assets/icons/search_white.svg";
import Refresh from "../../assets/icons/refresh.svg";
import AttendanceTable from "../../Tables/AttendanceTable";

const ManageAttendance = () => {
  return (
    <div>
      <div class="flex flex-row justify-between items-center ml-4 mr-4  pt-4 border-b-2 border-primaryborder mb-4">
        <h3 class="text-primary text-2xl">Manage Attendance</h3>
        <h5 class="text-sm font-thin text-primary">ADMINISTRATOR</h5>
      </div>
      <div class="flex items-center ml-5 justify-between mr-5 mb-5">
        <div class="flex justify-between items-center text-primary gap-3">
          <button class="border-1 border-primaryborder py-1 px-4 rounded-md text-sm">
            Excel
          </button>
          <button class="border-1 border-primaryborder py-1 px-4 rounded-md text-sm">
            PDF
          </button>
        </div>
      </div>
      <div class="bg-secondarybg mx-5 py-3 rounded-b-md flex justify-between items-center">
        <input
          type="text"
          id="date_range"
          name="date_range"
          className="w-46 h-8 text-sm px-3 py-2 border-1 border-primarybg rounded-md outline-none ml-5 "
          placeholder="Date Range"
        />

        <select
          className="w-56 h-8 text-sm px-3 text-primary border-1 border-primarybg rounded-md outline-none "
          name="employee"
          id="employee"
        >
          <option value="">Employee</option>
        </select>
        <div class="flex items-center">
          <img src={Refresh} alt="refresh" class="w-10    " />
          <div class="relative px-6">
            <input
              type="text"
              placeholder="Search"
              class="w-48 h-8 outline-none bg-blue-800 px-5 pr-12 rounded-md text-sm text-white"
            />
            <img
              src={SearchColoured}
              alt=""
              class="absolute top-1 right-10 w-6 "
            />
          </div>
        </div>
      </div>
      <div class=" mx-5 py-3 rounded-b-md flex justify-between">
        <button class="bg-primaryblue flex flex-row items-center px-3 py-2 gap-1 rounded-md ml-5">
          <img src={Add} alt="add" class="w-5" />
          <span class="text-white text-sm">Add</span>
        </button>
        <div class="relative px-6">
          <input
            type="text"
            placeholder="Search"
            class="w-56 h-10 outline-none bg-gray-200 px-5 pr-12 rounded-md "
          />
          <img src={Search} alt="" class="absolute top-3 right-10 " />
        </div>
      </div>
      <AttendanceTable />
    </div>
  );
};

export default ManageAttendance;
