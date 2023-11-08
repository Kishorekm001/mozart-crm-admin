import React, { useEffect, useState } from "react";
import ImportIcon from "../../assets/icons/import.svg";
import Download from "../../assets/icons/download.svg";
import Add from "../../assets/icons/add.svg";
import Search from "../../assets/icons/search.svg";
import RoleTable from "../../Tables/RoleTable";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import ReportingHeirarchyTable from "../../Tables/ReportingHeirarchyTable";
import EmployeeTable from "../../Tables/EmployeeTable";
import AddEmployeeForm from "../../forms/AddEmployeeForm";
import axios from "axios";

const defaultAddRoleFields = {
  roleId: 4,
  roleName: "",
  isActive: false,
};
const token = localStorage.getItem("JwtToken");
const JwtToken = token;

const AddRoleModal = ({ addRoleModal, setAddRoleModal }) => {
  const [saveRole, setSaveRole] = useState(defaultAddRoleFields);

  const { roleId, roleName, isActive } = saveRole;

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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSaveRole({
      ...saveRole,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const headers = {
    accept: "text/plain",
    Authorization: `Bearer ${JwtToken}`,
    "Content-Type": "application/json",
  };

  const saveRoleBody = {
    roleId: roleId,
    roleName: roleName,
    isActive: isActive,
  };

  const saveRoleAPI = "http://164.52.216.64:8011/api/Profile/SaveRoleDetails";

  const handleAddRole = (e) => {
    e.preventDefault();
    axios
      .post(saveRoleAPI, saveRole, { headers })
      .then((res) => {
        console.log(res);
        if (res.data.isSuccess) {
          console.log("Role saved");
          setSaveRole(defaultAddRoleFields);
          setAddRoleModal(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Modal open={addRoleModal}>
      <Box sx={modalStyles}>
        <h3 class="bg-primarybg text-white w-full py-4 text-2xl pl-6 rounded-t-lg">
          Add Role
        </h3>
        <form class="p-4" onSubmit={handleAddRole}>
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
                name="roleName"
                value={roleName}
                onChange={handleChange}
                className="w-46 h-8 text-sm px-3 py-2 border-1 border-primarybg rounded-md outline-none "
                placeholder="Enter Role Name"
              />
            </div>
            <div class="flex items-center mb-2 ">
              <input
                type="checkbox"
                id="isActive"
                name="isActive"
                checked={isActive}
                onChange={handleChange}
                class=" border rounded-md outline-none mr-2"
                placeholder="Enter Role Name"
                style={{ width: "28px", height: "18px" }}
              />

              <label
                htmlFor="isActive"
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
              onClick={() => setAddRoleModal(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </Box>
    </Modal>
  );
};

const AddHeirarchyModal = ({ addHeirarchyModal, setAddHeirarchyModal }) => {
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
    <Modal open={addHeirarchyModal}>
      <Box sx={modalStyles}>
        <h3 class="bg-primarybg text-white w-full py-4 text-2xl pl-6 rounded-t-lg">
          Add Reporting Heirarchy
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
              Submit
            </button>
            <button
              class="bg-white text-primary  px-6 py-1 rounded-md border-1 border-primarybg"
              onClick={() => setAddHeirarchyModal(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </Box>
    </Modal>
  );
};

const AddEmployeeModal = ({ addEmployeeModal, setAddEmployeeModal }) => {
  const modalStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    boxShadow: 24,
    border: "none",
    background: "white",
    borderRadius: "10px",
  };

  return (
    <Modal open={addEmployeeModal}>
      <Box sx={modalStyles}>
        <h3 class="bg-primarybg text-white w-full py-4 text-2xl pl-6 rounded-t-lg">
          Add Employee
        </h3>
        <form class="p-6">
          <AddEmployeeForm />
          <div class=" flex justify-around mx-20 mt-10 mb-5">
            <button
              type="submit"
              class="bg-primarybg text-white  px-6 py-1 rounded-md"
            >
              Submit
            </button>
            <button
              class="bg-white text-primary  px-6 py-1 rounded-md border-1 border-primarybg"
              onClick={() => setAddEmployeeModal(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </Box>
    </Modal>
  );
};

const ManageProfile = () => {
  const [tab, setTab] = useState("role");
  const [rolesList, setRolesList] = useState([]);
  const [addRoleModal, setAddRoleModal] = useState(false);
  const [addHeirarchyModal, setAddHeirarchyModal] = useState(false);
  const [addEmployeeModal, setAddEmployeeModal] = useState(false);

  const getRolesListAPI = "http://164.52.216.64:8011/api/Profile/GetRolesList";

  const headers = {
    accept: "text/plain",
    Authorization: `Bearer ${JwtToken}`,
    "Content-Type": "application/json",
  };

  const rolesListBody = {
    pagination: {
      pageNo: 0,
      pageSize: 0,
      sortBy: "",
      orderBy: "",
    },
    roleName: "",
    isActive: true,
  };

  useEffect(() => {
    axios
      .post(getRolesListAPI, rolesListBody, { headers })
      .then((res) => {
        // console.log(res);
        setRolesList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log(rolesList);

  useEffect(() => {}, []);

  return (
    <div>
      <div class="flex flex-row justify-between items-center ml-4 mr-4  pt-4 border-b-2 border-primaryborder mb-4">
        <h3 class="text-primary text-2xl">Manage Profile</h3>
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
            class={` px-4 ml-5 pb-1 cursor-pointer ${
              tab === "role" && "border-b-2 border-primarybg"
            }`}
            onClick={() => {
              setTab("role");
            }}
          >
            Role
          </span>
          <span
            class={` px-4 ml-5 pb-1 cursor-pointer ${
              tab === "heirarchy" && "border-b-2 border-primarybg"
            }`}
            onClick={() => {
              setTab("heirarchy");
            }}
          >
            Reporting Hierarchy
          </span>
          <span
            class={` px-4 mr-5 pb-1 cursor-pointer ${
              tab === "employee" && "border-b-2 border-primarybg"
            }`}
            onClick={() => {
              setTab("employee");
            }}
          >
            Employee
          </span>
        </div>
      </div>

      {tab === "role" && (
        <div>
          <div class="bg-secondarybg mx-5 py-3 rounded-b-md flex justify-between">
            <button
              class="bg-primaryblue flex flex-row items-center px-3 py-2 gap-1 rounded-md ml-5"
              onClick={() => {
                setAddRoleModal(true);
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
          <RoleTable rolesList={rolesList} />
          <AddRoleModal
            setAddRoleModal={setAddRoleModal}
            addRoleModal={addRoleModal}
          />
        </div>
      )}

      {tab === "heirarchy" && (
        <div>
          <div class="bg-secondarybg mx-5 py-3 rounded-b-md flex justify-between">
            <button
              class="bg-primaryblue flex flex-row items-center px-3 py-2 gap-1 rounded-md ml-5"
              onClick={() => {
                setAddHeirarchyModal(true);
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
          <AddHeirarchyModal
            setAddHeirarchyModal={setAddHeirarchyModal}
            addHeirarchyModal={addHeirarchyModal}
          />
          <ReportingHeirarchyTable />
        </div>
      )}

      {tab === "employee" && (
        <div>
          <div class="bg-secondarybg mx-5 py-3 rounded-b-md flex justify-between">
            <button
              class="bg-primaryblue flex flex-row items-center px-3 py-2 gap-1 rounded-md ml-5"
              onClick={() => {
                setAddEmployeeModal(true);
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
          <AddEmployeeModal
            addEmployeeModal={addEmployeeModal}
            setAddEmployeeModal={setAddEmployeeModal}
          />
          <EmployeeTable />
        </div>
      )}
    </div>
  );
};

export default ManageProfile;
