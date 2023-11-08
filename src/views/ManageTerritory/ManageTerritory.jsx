import React, { useState } from "react";
import ImportIcon from "../../assets/icons/import.svg";
import Download from "../../assets/icons/download.svg";
import Add from "../../assets/icons/add.svg";
import Search from "../../assets/icons/search.svg";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import StateTable from "../../Tables/TerritoryTables/StateTable";
import RegionTable from "../../Tables/TerritoryTables/RegionTable";
import DistrictTable from "../../Tables/TerritoryTables/districtTable";
import AreaTable from "../../Tables/TerritoryTables/AreaTable";

const AddStateModal = ({ addStateModal, setAddStateModal }) => {
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
    <Modal open={addStateModal}>
      <Box sx={modalStyles}>
        <h3 class="bg-primarybg text-white w-full py-4 text-2xl pl-6 rounded-t-lg">
          Add State
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
              Submit
            </button>
            <button
              class="bg-white text-primary  px-6 py-1 rounded-md border-1 border-primarybg"
              onClick={() => setAddStateModal(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </Box>
    </Modal>
  );
};

const AddRegionModal = ({ addRegionModal, setAddRegionModal }) => {
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
    <Modal open={addRegionModal}>
      <Box sx={modalStyles}>
        <h3 class="bg-primarybg text-white w-full py-4 text-2xl pl-6 rounded-t-lg">
          Add Region
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
              Submit
            </button>
            <button
              class="bg-white text-primary  px-6 py-1 rounded-md border-1 border-primarybg"
              onClick={() => setAddRegionModal(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </Box>
    </Modal>
  );
};

const AddDistrictModal = ({ addDistrictModal, setAddDistrictModal }) => {
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
    <Modal open={addDistrictModal}>
      <Box sx={modalStyles}>
        <h3 class="bg-primarybg text-white w-full py-4 text-2xl pl-6 rounded-t-lg">
          Add District
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
              Submit
            </button>
            <button
              class="bg-white text-primary  px-6 py-1 rounded-md border-1 border-primarybg"
              onClick={() => setAddDistrictModal(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </Box>
    </Modal>
  );
};

const AddAreaModal = ({ addAreaModal, setAddAreaModal }) => {
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
    <Modal open={addAreaModal}>
      <Box sx={modalStyles}>
        <h3 class="bg-primarybg text-white w-full py-4 text-2xl pl-6 rounded-t-lg">
          Add Area
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
                id="region"
                name="region"
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
                id="district"
                name="district"
                className="w-46 h-8 text-sm px-3 py-2 border-1 border-primarybg rounded-md outline-none "
                placeholder="Enter District"
              />
            </div>

            <div>
              <label
                htmlFor="area"
                className="block text-white text-sm font-medium mb-2"
              >
                <span class="text-primary">Area </span>
                <span class="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="area"
                name="area"
                className="w-46 h-8 text-sm px-3 py-2 border-1 border-primarybg rounded-md outline-none "
                placeholder="Enter Area"
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
                <span class="text-primary ">Is Active </span>
                <span class="text-red-500">*</span>
              </label>
            </div>
          </div>
          <div class=" flex justify-center gap-16 mx-20 mt-10 mb-5">
            <button
              type="submit"
              class="bg-primarybg text-white  px-6 py-1 rounded-md"
            >
              Submit
            </button>
            <button
              class="bg-white text-primary  px-6 py-1 rounded-md border-1 border-primarybg"
              onClick={() => setAddAreaModal(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </Box>
    </Modal>
  );
};

const ManageTerritory = () => {
  const [tab, setTab] = useState("state");
  const [addStateModal, setAddStateModal] = useState(false);
  const [addRegionModal, setAddRegionModal] = useState(false);
  const [addDistrictModal, setAddDistrictModal] = useState(false);
  const [addAreaModal, setAddAreaModal] = useState(false);
  return (
    <div>
      <div class="flex flex-row justify-between items-center ml-4 mr-4  pt-4 border-b-2 border-primaryborder mb-4">
        <h3 class="text-primary text-2xl">Manage Territory</h3>
        <h5 class="text-sm font-thin text-primary">ADMINISTRATOR</h5>
      </div>
      <div class="flex items-center ml-5 justify-between mr-5 mb-10">
        <div class="flex justify-between items-center text-primary gap-3">
          <button class="border-1 border-primaryborder py-1 px-4 rounded-md text-sm">
            Excel
          </button>
          <button class="border-1 border-primaryborder py-1 px-4 rounded-md text-sm">
            PDF
          </button>
        </div>
        <div class="flex flex-row items-center gap-3">
          <button class="bg-primaryblue flex flex-row items-center px-6 py-2 gap-2 rounded-md">
            <img src={ImportIcon} class="w-5" />
            <span class="text-white text-sm">Import Manage Profile</span>
          </button>
          <button class="bg-primaryblue flex flex-row items-center px-6 py-2 gap-2 rounded-md">
            <img src={Download} class="w-5" />
            <span class="text-white text-sm">
              Sample Download Manage Profile
            </span>
          </button>
        </div>
      </div>

      <div class="bg-secondarybg mx-5 py-3 rounded-t-md ">
        <div class="flex flex-row justify-between border-b-1 border-primaryborder ">
          <span
            class={` px-8 ml-5 pb-1 cursor-pointer ${
              tab === "state" && "border-b-2 border-primarybg"
            }`}
            onClick={() => {
              setTab("state");
            }}
          >
            State
          </span>
          <span
            class={` px-8 ml-5 pb-1 cursor-pointer ${
              tab === "region" && "border-b-2 border-primarybg"
            }`}
            onClick={() => {
              setTab("region");
            }}
          >
            Region
          </span>
          <span
            class={` px-8 mr-5 pb-1 cursor-pointer ${
              tab === "district" && "border-b-2 border-primarybg"
            }`}
            onClick={() => {
              setTab("district");
            }}
          >
            District
          </span>

          <span
            class={` px-8 mr-5 pb-1 cursor-pointer ${
              tab === "area" && "border-b-2 border-primarybg"
            }`}
            onClick={() => {
              setTab("area");
            }}
          >
            Area
          </span>
        </div>
      </div>

      {tab === "state" && (
        <div>
          <div class="bg-secondarybg mx-5 py-3 rounded-b-md flex justify-between">
            <button
              class="bg-primaryblue flex flex-row items-center px-3 py-2 gap-1 rounded-md ml-5"
              onClick={() => {
                setAddStateModal(true);
              }}
            >
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
          <StateTable />
          <AddStateModal
            addStateModal={addStateModal}
            setAddStateModal={setAddStateModal}
          />
        </div>
      )}

      {tab === "region" && (
        <div>
          <div class="bg-secondarybg mx-5 py-3 rounded-b-md flex justify-between">
            <button
              class="bg-primaryblue flex flex-row items-center px-3 py-2 gap-1 rounded-md ml-5"
              onClick={() => {
                setAddRegionModal(true);
              }}
            >
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
          <RegionTable />
          <AddRegionModal
            setAddRegionModal={setAddRegionModal}
            addRegionModal={addRegionModal}
          />
        </div>
      )}

      {tab === "district" && (
        <div>
          <div class="bg-secondarybg mx-5 py-3 rounded-b-md flex justify-between">
            <button
              class="bg-primaryblue flex flex-row items-center px-3 py-2 gap-1 rounded-md ml-5"
              onClick={() => {
                setAddDistrictModal(true);
              }}
            >
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
          <DistrictTable />
          <AddDistrictModal
            addDistrictModal={addDistrictModal}
            setAddDistrictModal={setAddDistrictModal}
          />
        </div>
      )}

      {tab === "area" && (
        <div>
          <div class="bg-secondarybg mx-5 py-3 rounded-b-md flex justify-between">
            <button
              class="bg-primaryblue flex flex-row items-center px-3 py-2 gap-1 rounded-md ml-5"
              onClick={() => {
                setAddAreaModal(true);
              }}
            >
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
          <AreaTable />
          <AddAreaModal
            addAreaModal={addAreaModal}
            setAddAreaModal={setAddAreaModal}
          />
        </div>
      )}
    </div>
  );
};

export default ManageTerritory;
