import React, { useState } from "react";
import Edit from "../assets/icons/edit.svg";
import View from "../assets/icons/view.svg";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const roleTableHeaders = [
  "Action",
  "Role",
  "Reporting to",
  "Status",
  "Created By",
  "Created Date",
];

const roleTableBody = [
  {
    role: "role 1",
    reporting_to: "Manager",
    status: "active",
    created_by: "created_by 1",
    created_date: 1699379999,
    id: "1",
  },
  {
    role: "role 2",
    reporting_to: "Manager",
    status: "active",
    created_by: "created_by 2",
    created_date: 1699379939,
    id: "2",
  },
  {
    role: "role 3",
    reporting_to: "Manager",
    status: "active",
    created_by: "created_by 3",
    created_date: 1699379879,
    id: "3",
  },
  {
    role: "role 4",
    reporting_to: "Manager",
    status: "active",
    created_by: "created_by 4",
    created_date: 1699379819,
    id: "4",
  },
  {
    role: "role 5",
    reporting_to: "Manager",
    status: "active",
    created_by: "created_by 5",
    created_date: 1699379759,
    id: "5",
  },
];

const EditHeirarchyModal = ({ editheirarchyModal, setEditheirarchyModal }) => {
  const modalStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "42%",
    boxShadow: 24,
    border: "none",
    background: "white",
    borderRadius: "10px",
  };

  return (
    <Modal open={editheirarchyModal}>
      <Box sx={modalStyles}>
        <h3 class="bg-primarybg text-white w-full py-4 text-2xl pl-6 rounded-t-lg">
          Edit Reporting Heirarchy
        </h3>
        <form class="p-6">
          <div class="flex items-end  gap-8 flex-wrap">
            <div>
              <label
                htmlFor="role_name"
                className="block text-white text-sm font-medium mb-2"
              >
                <span class="text-primary">Role Name</span>
                <span class="text-red-500">*</span>
              </label>

              <select
                className="w-56 h-8 text-sm px-3 text-primary border-1 border-primarybg rounded-md outline-none "
                name="role_name"
                id="role_name"
              >
                <option value="role_1">Role 1</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="reporting_heirarchy"
                className="block text-white text-sm font-medium mb-2"
              >
                <span class="text-primary">Reporting Heirarchy</span>
                <span class="text-red-500">*</span>
              </label>
              <select
                className="w-56 h-8 text-sm px-3 text-primary border-1 border-primarybg rounded-md outline-none "
                name="reporting_heirarchy"
                id="reporting_heirarchy"
              >
                <option value="">Manager</option>
              </select>
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
              onClick={() => setEditheirarchyModal(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </Box>
    </Modal>
  );
};

const ViewHeirarchyModal = ({ viewheirarchyModal, setViewheirarchyModal }) => {
  const modalStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "42%",
    boxShadow: 24,
    border: "none",
    background: "white",
    borderRadius: "10px",
  };

  return (
    <Modal open={viewheirarchyModal}>
      <Box sx={modalStyles}>
        <h3 class="bg-primarybg text-white w-full py-4 text-2xl pl-6 rounded-t-lg">
          View Reporting Heirarchy
        </h3>
        <form class="p-6">
          <div class="flex items-end  gap-8 flex-wrap">
            <div>
              <label
                htmlFor="role_name"
                className="block text-white text-sm font-medium mb-2"
              >
                <span class="text-primary">Role Name</span>
                <span class="text-red-500">*</span>
              </label>

              <select
                className="w-56 h-8 text-sm px-3 text-primary border-1 border-primarybg rounded-md outline-none "
                name="role_name"
                id="role_name"
              >
                <option value="role_1">Role 1</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="reporting_heirarchy"
                className="block text-white text-sm font-medium mb-2"
              >
                <span class="text-primary">Reporting Heirarchy</span>
                <span class="text-red-500">*</span>
              </label>
              <select
                className="w-56 h-8 text-sm px-3 text-primary border-1 border-primarybg rounded-md outline-none "
                name="reporting_heirarchy"
                id="reporting_heirarchy"
              >
                <option value="">Manager</option>
              </select>
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
          <div class=" flex justify-center mx-20 mt-10 mb-5">
            <button
              class="bg-white text-primary  px-6 py-1 rounded-md border-1 border-primarybg"
              onClick={() => setViewheirarchyModal(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </Box>
    </Modal>
  );
};

const ReportingHeirarchyTable = () => {
  const [editheirarchyModal, setEditheirarchyModal] = useState(false);
  const [viewheirarchyModal, setViewheirarchyModal] = useState(false);
  return (
    <div class="ml-5 mr-5">
      <table class="border-1 border-primaryborder w-full mt-10 rounded-md">
        <thead>
          <th class="font-light text-sm border-1 border-primaryborder px-3 py-2">
            S No.
          </th>
          {roleTableHeaders.map((header, index) => {
            return (
              <th class="font-light text-sm border-1 border-primaryborder px-3 py-2">
                {header}
              </th>
            );
          })}
        </thead>
        <tbody>
          {roleTableBody.map((row, index) => {
            return (
              <tr key={index} class="text-primary">
                <td class="font-thin  text-sm border-1 border-primaryborder px-3 py-2 text-center">
                  {row.id}
                </td>
                <td class="border-1 border-primaryborder px-3 py-2 flex flex-row gap-5 justify-center">
                  <img
                    src={Edit}
                    alt="edit"
                    class="w-7 cursor-pointer"
                    onClick={() => setEditheirarchyModal(true)}
                  />
                  <img
                    src={View}
                    alt="view"
                    class="w-7 cursor-pointer"
                    onClick={() => {
                      setViewheirarchyModal(true);
                    }}
                  />
                </td>
                <td class="font-thin text-sm border-1 border-primaryborder px-3 py-2 text-center">
                  {row.role}
                </td>
                <td class="font-thin text-sm border-1 border-primaryborder px-3 py-2 text-center">
                  {row.reporting_to}
                </td>
                <td class="font-thin text-sm border-1 border-primaryborder px-3 py-2 text-center text-green-500">
                  {row.status}
                </td>
                <td class="font-thin text-sm border-1 border-primaryborder px-3 py-2 text-center">
                  {row.created_by}
                </td>
                <td class="font-thin text-sm border-1 border-primaryborder px-3 py-2 text-center">
                  {row.created_date}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <EditHeirarchyModal
        editheirarchyModal={editheirarchyModal}
        setEditheirarchyModal={setEditheirarchyModal}
      />
      <ViewHeirarchyModal
        setViewheirarchyModal={setViewheirarchyModal}
        viewheirarchyModal={viewheirarchyModal}
      />
    </div>
  );
};

export default ReportingHeirarchyTable;
