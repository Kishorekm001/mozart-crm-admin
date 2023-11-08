import React, { useState } from "react";
import Edit from "../assets/icons/edit.svg";
import View from "../assets/icons/view.svg";
import Setting from "../assets/icons/setting.svg";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const roleTableHeaders = [
  "Role ID",
  "Role",
  "Status",
  "Created By",
  // "Created Date",
  "Action",
  "Manage Access",
];

const token = localStorage.getItem("JwtToken");
const JwtToken = token;

const EditRoleModal = ({ editRoleModal, setEditRoleModal }) => {
  const modalStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "35%",
    boxShadow: 24,
    border: "none",
    background: "white",
    borderRadius: "10px",
  };

  return (
    <Modal open={editRoleModal}>
      <Box sx={modalStyles}>
        <h3 class="bg-primarybg text-white w-full py-4 text-2xl pl-6 rounded-t-lg">
          Edit Role
        </h3>
        <form class="p-4">
          <div class="flex items-end justify-around">
            <div>
              <label
                htmlFor="role_name"
                className="block text-white text-sm font-medium mb-2"
              >
                <span class="text-primary">Role Name</span>
                <span class="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="role_name"
                name="role_name"
                className="w-46 h-8 text-sm px-3 py-2 border-1 border-primarybg rounded-md outline-none "
                placeholder="Enter Role Name"
              />
            </div>
            <div class="flex items-center mb-2 ">
              <input
                type="checkbox"
                id="role_name"
                name="role_name"
                class=" border rounded-md outline-none mr-2"
                placeholder="Enter Role Name"
                style={{ width: "28px", height: "18px" }}
              />

              <label
                htmlFor="role_name"
                className="block text-white text-sm font-medium "
              >
                <span class="text-primary ">Is Active</span>
                <span class="text-red-500">*</span>
              </label>
            </div>
          </div>
          <div class=" flex justify-between mx-20 mt-10 mb-5">
            <button
              type="submit"
              class="bg-primarybg text-white  px-6 py-1 rounded-md"
            >
              Update
            </button>
            <button
              class="bg-white text-primary  px-6 py-1 rounded-md border-1 border-primarybg"
              onClick={() => setEditRoleModal(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </Box>
    </Modal>
  );
};

const ViewRoleModal = ({ viewRoleModal, setViewRoleModal }) => {
  const modalStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "35%",
    boxShadow: 24,
    border: "none",
    background: "white",
    borderRadius: "10px",
  };

  return (
    <Modal open={viewRoleModal}>
      <Box sx={modalStyles}>
        <h3 class="bg-primarybg text-white w-full py-4 text-2xl pl-6 rounded-t-lg">
          View Role
        </h3>
        <form class="p-4">
          <div class="flex items-end justify-around">
            <div>
              <label
                htmlFor="role_name"
                className="block text-white text-sm font-medium mb-2"
              >
                <span class="text-primary">Role Name</span>
                <span class="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="role_name"
                name="role_name"
                className="w-46 h-8 text-sm px-3 py-2 border-1 border-primarybg rounded-md outline-none "
                placeholder="Enter Role Name"
              />
            </div>
            <div class="flex items-center mb-2 ">
              <input
                type="checkbox"
                id="role_name"
                name="role_name"
                class=" border rounded-md outline-none mr-2"
                placeholder="Enter Role Name"
                style={{ width: "28px", height: "18px" }}
              />

              <label
                htmlFor="role_name"
                className="block text-white text-sm font-medium "
              >
                <span class="text-primary ">Is Active</span>
                <span class="text-red-500">*</span>
              </label>
            </div>
          </div>
          <div class=" flex justify-center  mt-10 mb-5">
            <button
              class="bg-white text-primary  px-6 py-1 rounded-md border-1 border-primarybg"
              onClick={() => setViewRoleModal(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </Box>
    </Modal>
  );
};

const RoleTable = ({ rolesList }) => {
  const [editRoleModal, setEditRoleModal] = useState(false);
  const [viewRoleModal, setViewRoleModal] = useState(false);

  const navigate = useNavigate();
  const headers = {
    accept: "text/plain",
    Authorization: `Bearer ${JwtToken}`,
    "Content-Type": "application/json",
  };

  const handleViewRole = (id) => {
    setViewRoleModal(true);
    const viewRoleAPI = `http://164.52.216.64:8011/api/Profile/GetRoleDetails?id=${id}`;
    axios
      .get(viewRoleAPI, { headers })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div class="ml-5 mr-5">
      <table class="border-1 border-primaryborder w-full mt-10 rounded-md">
        <thead>
          {roleTableHeaders.map((header, index) => {
            return (
              <th class="font-light text-sm border-1 border-primaryborder px-3 py-2">
                {header}
              </th>
            );
          })}
        </thead>
        <tbody>
          {rolesList.map((row, index) => {
            return (
              <tr key={index} class="text-primary">
                <td class="font-thin  text-sm border-1 border-primaryborder px-3 py-2 text-center">
                  {row.roleId}
                </td>
                <td class="font-thin text-sm border-1 border-primaryborder px-3 py-2 text-center">
                  {row.roleName}
                </td>
                <td class="font-thin text-sm border-1 border-primaryborder px-3 py-2 text-center text-green-500">
                  {row.isActive && "active"}
                </td>
                <td class="font-thin text-sm border-1 border-primaryborder px-3 py-2 text-center">
                  {row.createdBy}
                </td>
                {/* <td class="font-thin text-sm border-1 border-primaryborder px-3 py-2 text-center">
                  {row.createdOn}
                </td> */}
                <td class="border-1 border-primaryborder  px-3 py-2 flex flex-row gap-5 justify-center">
                  <img
                    src={Edit}
                    alt="edit"
                    class="w-7 cursor-pointer"
                    onClick={() => setEditRoleModal(true)}
                  />
                  <img
                    src={View}
                    alt="view"
                    class="w-7 cursor-pointer"
                    onClick={() => {
                      handleViewRole(row.roleId);
                    }}
                  />
                </td>
                <td class="border-1 border-primaryborder px-3 py-2 ">
                  <img
                    src={Setting}
                    alt="manage"
                    class="w-7 ml-10 cursor-pointer"
                    onClick={() => {
                      navigate("/role-permission");
                    }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <EditRoleModal
        setEditRoleModal={setEditRoleModal}
        editRoleModal={editRoleModal}
      />
      <ViewRoleModal
        setViewRoleModal={setViewRoleModal}
        viewRoleModal={viewRoleModal}
      />
    </div>
  );
};

export default RoleTable;
