import React, { useState } from "react";
import { Link } from "react-router-dom";
import RolePermissionTable from "../../Tables/RolePermissionTable";

const permissionTableHeaders = ["Permission Name", "View", "Add", "Edit"];

const websiteTableBody = [
  {
    permission_name: "Permission 1",
    view: true,
    add: false,
    edit: true,
    id: "1",
  },
  {
    permission_name: "Permission 2",
    view: true,
    add: false,
    edit: false,
    id: "2",
  },
  {
    permission_name: "Permission 3",
    view: true,
    add: true,
    edit: false,
    id: "3",
  },
  {
    permission_name: "Permission 4",
    view: true,
    add: false,
    edit: true,
    id: "4",
  },
  {
    permission_name: "Permission 5",
    view: true,
    add: false,
    edit: false,
    id: "5",
  },
];

const mobileTableBody = [
  {
    permission_name: "Permission 1",
    view: false,
    add: false,
    edit: true,
    id: "1",
  },
  {
    permission_name: "Permission 2",
    view: true,
    add: false,
    edit: true,
    id: "2",
  },
  {
    permission_name: "Permission 3",
    view: false,
    add: true,
    edit: false,
    id: "3",
  },
  {
    permission_name: "Permission 4",
    view: true,
    add: false,
    edit: true,
    id: "4",
  },
  {
    permission_name: "Permission 5",
    view: true,
    add: false,
    edit: false,
    id: "5",
  },
];

const RolePermission = () => {
  const [tab, setTab] = useState("website");
  return (
    <div>
      <div class="flex flex-row justify-between items-center ml-4 mr-4  pt-4 border-b-2 border-primaryborder mb-4">
        <h3 class="text-primary text-2xl">Role Permission</h3>
        <h5 class="text-sm font-thin text-primary">ADMINISTRATOR</h5>
      </div>

      <div class="bg-secondarybg mx-5 py-3 rounded-t-md ">
        <div class="flex flex-row justify-between border-b-1 border-primaryborder ">
          <span
            class={` px-16 ml-5 pb-1 cursor-pointer ${
              tab === "website" && "border-b-2 border-primarybg"
            }`}
            onClick={() => {
              setTab("website");
            }}
          >
            Website Application
          </span>
          <span
            class={` px-16 ml-5 pb-1 cursor-pointer ${
              tab === "mobile" && "border-b-2 border-primarybg"
            }`}
            onClick={() => {
              setTab("mobile");
            }}
          >
            Mobile Application
          </span>
        </div>
      </div>

      <div class="flex items-center ml-5 justify-end mr-5 mb-5 mt-3">
        <Link to="/manage-profile">
          <button class="bg-primaryblue  px-6 py-2 gap-2 rounded-md text-white text-sm">
            Back
          </button>
        </Link>
      </div>

      {tab === "website" && (
        <div>
          <div class="flex items-center  m-5 ml-8 ">
            <label
              htmlFor="all_checked"
              className="block text-white text-sm font-medium "
            >
              <span class="text-primary ">Is All Checked?</span>
            </label>
            <input
              type="checkbox"
              id="all_checked"
              name="all_checked"
              class=" border rounded-md outline-none mr-2"
              style={{ width: "28px", height: "18px" }}
            />
          </div>
          <RolePermissionTable
            permissionTableHeaders={permissionTableHeaders}
            permissionTableBody={websiteTableBody}
          />
          <footer class="flex flex-row justify-between ml-16 mr-16 mt-10">
            <Link to="/manage-profile">
              <button class="bg-primarybg text-white  px-6 py-1 rounded-md text-sm">
                Back
              </button>
            </Link>
            <button class="bg-primarybg text-white  px-6 py-1 rounded-md text-sm">
              Update
            </button>
          </footer>
        </div>
      )}

      {tab === "mobile" && (
        <div>
          <div class="flex items-center  m-5 ml-8 ">
            <label
              htmlFor="all_checked"
              className="block text-white text-sm font-medium "
            >
              <span class="text-primary ">Is All Checked?</span>
            </label>
            <input
              type="checkbox"
              id="all_checked"
              name="all_checked"
              class=" border rounded-md outline-none mr-2"
              style={{ width: "28px", height: "18px" }}
            />
          </div>
          <RolePermissionTable
            permissionTableHeaders={permissionTableHeaders}
            permissionTableBody={mobileTableBody}
          />
          <footer class="flex flex-row justify-between ml-16 mr-16 mt-10">
            <Link to="/manage-profile">
              <button class="bg-primarybg text-white  px-6 py-1 rounded-md text-sm">
                Back
              </button>
            </Link>
            <button class="bg-primarybg text-white  px-6 py-1 rounded-md text-sm">
              Update
            </button>
          </footer>
        </div>
      )}
    </div>
  );
};

export default RolePermission;
