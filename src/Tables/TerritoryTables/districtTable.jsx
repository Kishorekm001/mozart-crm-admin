import React, { useState } from "react";
import Edit from "../../assets/icons/edit.svg";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const districtTableHeaders = [
  "Action",
  "State",
  "Region",
  "District",
  "Created By",
  "Created Date",
];

const districtTableBody = [
  {
    state: "state 1",
    region: "Region 1",
    district: "District 1",
    created_by: "created_by 1",
    created_date: 1699379999,
    id: "1",
  },
  {
    state: "state 2",
    region: "Region 2",
    district: "District 2",
    created_by: "created_by 2",
    created_date: 1699379939,
    id: "2",
  },
  {
    state: "state 3",
    region: "Region 3",
    district: "District 3",
    created_by: "created_by 3",
    created_date: 1699379879,
    id: "3",
  },
  {
    state: "state 4",
    region: "Region 4",
    district: "District 4",
    created_by: "created_by 4",
    created_date: 1699379819,
    id: "4",
  },
  {
    state: "state 5",
    region: "Region 5",
    district: "District 5",
    created_by: "created_by 5",
    created_date: 1699379759,
    id: "5",
  },
];

const EditDistrictModal = ({ editDistrictModal, setEditDistrictModal }) => {
  const modalStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    boxShadow: 24,
    border: "none",
    background: "white",
    borderRadius: "10px",
  };

  return (
    <Modal open={editDistrictModal}>
      <Box sx={modalStyles}>
        <h3 class="bg-primarybg text-white w-full py-4 text-2xl pl-6 rounded-t-lg">
          Edit District
        </h3>
        <form class="p-4">
          <div class="flex items-end justify-between gap-5 flex-wrap m-5">
            <div>
              <label
                htmlFor="state"
                className="block text-white text-sm font-medium mb-2"
              >
                <span class="text-primary">State </span>
                <span class="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="state"
                name="state"
                className="w-46 h-8 text-sm px-3 py-2 border-1 border-primarybg rounded-md outline-none "
                placeholder="Enter State"
              />
            </div>

            <div>
              <label
                htmlFor="region"
                className="block text-white text-sm font-medium mb-2"
              >
                <span class="text-primary">Region </span>
                <span class="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="role_name"
                name="role_name"
                className="w-46 h-8 text-sm px-3 py-2 border-1 border-primarybg rounded-md outline-none "
                placeholder="Enter Region"
              />
            </div>

            <div>
              <label
                htmlFor="district"
                className="block text-white text-sm font-medium mb-2"
              >
                <span class="text-primary">District </span>
                <span class="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="role_name"
                name="role_name"
                className="w-46 h-8 text-sm px-3 py-2 border-1 border-primarybg rounded-md outline-none "
                placeholder="Enter District"
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
          <div class=" flex justify-center gap-16 mx-20 mt-10 mb-5">
            <button
              type="submit"
              class="bg-primarybg text-white  px-6 py-1 rounded-md"
            >
              Update
            </button>
            <button
              class="bg-white text-primary  px-6 py-1 rounded-md border-1 border-primarybg"
              onClick={() => setEditDistrictModal(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </Box>
    </Modal>
  );
};

const DistrictTable = () => {
  const [editDistrictModal, setEditDistrictModal] = useState(false);
  return (
    <div class="ml-5 mr-5">
      <table class="border-1 border-primaryborder w-full mt-10 rounded-md">
        <thead>
          <th class="font-light text-sm border-1 border-primaryborder px-3 py-2">
            S No.
          </th>
          {districtTableHeaders.map((header, index) => {
            return (
              <th class="font-light text-sm border-1 border-primaryborder px-3 py-2">
                {header}
              </th>
            );
          })}
        </thead>
        <tbody>
          {districtTableBody.map((row, index) => {
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
                    onClick={() => setEditDistrictModal(true)}
                  />
                </td>
                <td class="font-thin text-sm border-1 border-primaryborder px-3 py-2 text-center">
                  {row.state}
                </td>
                <td class="font-thin text-sm border-1 border-primaryborder px-3 py-2 text-center">
                  {row.region}
                </td>
                <td class="font-thin text-sm border-1 border-primaryborder px-3 py-2 text-center">
                  {row.district}
                </td>
                <td class="font-thin text-sm border-1 border-primaryborder px-3 py-2 text-center ">
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
      <EditDistrictModal
        setEditDistrictModal={setEditDistrictModal}
        editDistrictModal={editDistrictModal}
      />
    </div>
  );
};
export default DistrictTable;
