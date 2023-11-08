import React, { useState } from "react";
import Edit from "../../assets/icons/edit.svg";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const stateTableHeaders = [
  "State",
  "Created By",
  "Created Date",
  "Status",
  "Action",
];

const stateTableBody = [
  {
    state: "state 1",
    created_by: "created_by 1",
    created_date: 1699379999,
    status: "active",
    id: "1",
  },
  {
    state: "state 2",
    status: "active",
    created_by: "created_by 2",
    created_date: 1699379939,
    id: "2",
  },
  {
    state: "state 3",
    status: "active",
    created_by: "created_by 3",
    created_date: 1699379879,
    id: "3",
  },
  {
    state: "state 4",
    status: "active",
    created_by: "created_by 4",
    created_date: 1699379819,
    id: "4",
  },
  {
    state: "state 5",
    status: "active",
    created_by: "created_by 5",
    created_date: 1699379759,
    id: "5",
  },
];

const EditStateModal = ({ editStateModal, setEditStateModal }) => {
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
    <Modal open={editStateModal}>
      <Box sx={modalStyles}>
        <h3 class="bg-primarybg text-white w-full py-4 text-2xl pl-6 rounded-t-lg">
          Edit State
        </h3>
        <form class="p-4">
          <div class="flex items-end justify-around">
            <div>
              <label
                htmlFor="role_name"
                className="block text-white text-sm font-medium mb-2"
              >
                <span class="text-primary">State </span>
                <span class="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="role_name"
                name="role_name"
                className="w-46 h-8 text-sm px-3 py-2 border-1 border-primarybg rounded-md outline-none "
                placeholder="Enter State"
              />
            </div>
            <div class="flex items-center mb-2 ">
              <input
                type="checkbox"
                id="role_name"
                name="role_name"
                class=" border rounded-md outline-none mr-2"
                placeholder="Enter State"
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
              onClick={() => setEditStateModal(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </Box>
    </Modal>
  );
};

const StateTable = () => {
  const [editStateModal, setEditStateModal] = useState(false);
  return (
    <div class="ml-5 mr-5">
      <table class="border-1 border-primaryborder w-full mt-10 rounded-md">
        <thead>
          <th class="font-light text-sm border-1 border-primaryborder px-3 py-2">
            S No.
          </th>
          {stateTableHeaders.map((header, index) => {
            return (
              <th class="font-light text-sm border-1 border-primaryborder px-3 py-2">
                {header}
              </th>
            );
          })}
        </thead>
        <tbody>
          {stateTableBody.map((row, index) => {
            return (
              <tr key={index} class="text-primary">
                <td class="font-thin  text-sm border-1 border-primaryborder px-3 py-2 text-center">
                  {row.id}
                </td>
                <td class="font-thin text-sm border-1 border-primaryborder px-3 py-2 text-center">
                  {row.state}
                </td>
                <td class="font-thin text-sm border-1 border-primaryborder px-3 py-2 text-center ">
                  {row.created_by}
                </td>
                <td class="font-thin text-sm border-1 border-primaryborder px-3 py-2 text-center">
                  {row.created_date}
                </td>
                <td class="font-thin text-sm border-1 border-primaryborder px-3 py-2 text-center text-green-500">
                  {row.status}
                </td>
                <td class="border-1 border-primaryborder px-3 py-2 flex flex-row gap-5 justify-center">
                  <img
                    src={Edit}
                    alt="edit"
                    class="w-7 cursor-pointer"
                    onClick={() => setEditStateModal(true)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <EditStateModal
        setEditStateModal={setEditStateModal}
        editStateModal={editStateModal}
      />
    </div>
  );
};
export default StateTable;
