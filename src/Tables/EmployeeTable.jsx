import React, { useState } from "react";
import Edit from "../assets/icons/edit.svg";
import View from "../assets/icons/view.svg";
import Setting from "../assets/icons/setting.svg";
import { useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import AddEmployeeForm from "../forms/AddEmployeeForm";

const roleTableHeaders = [
  "Action",
  "Manage Access",
  "Employee Code",
  "Employee Name",
  "Email ID",
  "Design",
];

const roleTableBody = [
  {
    emp_code: "1234",
    emp_name: "Employee 1",
    email: "emp1@gmail.com",
    design: 1699379999,
    id: "1",
  },
  {
    emp_code: "1234",
    emp_name: "Employee 2",
    email: "emp2@gmail.com",
    design: 1699379999,
    id: "2",
  },
  {
    emp_code: "1234",
    emp_name: "Employee 3",
    email: "emp3@gmail.com",
    design: 1699379999,
    id: "3",
  },
  {
    emp_code: "1234",
    emp_name: "Employee 4",
    email: "emp4@gmail.com",
    design: 1699379999,
    id: "4",
  },
  {
    emp_code: "1234",
    emp_name: "Employee 5",
    email: "emp5@gmail.com",
    design: 1699379999,
    id: "5",
  },
];

const EditEmployeeModal = ({ editEmployeeModal, setEditEmployeeModal }) => {
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
    <Modal open={editEmployeeModal}>
      <Box sx={modalStyles}>
        <h3 class="bg-primarybg text-white w-full py-4 text-2xl pl-6 rounded-t-lg">
          Edit Employee
        </h3>
        <form class="p-6">
          <AddEmployeeForm />
          <div class=" flex justify-around mx-20 mt-10 mb-5">
            <button
              type="submit"
              class="bg-primarybg text-white  px-6 py-1 rounded-md"
            >
              Update
            </button>
            <button
              class="bg-white text-primary  px-6 py-1 rounded-md border-1 border-primarybg"
              onClick={() => setEditEmployeeModal(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </Box>
    </Modal>
  );
};

const ViewEmployeeModal = ({ viewEmployeeModal, setViewEmployeeModal }) => {
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
    <Modal open={viewEmployeeModal}>
      <Box sx={modalStyles}>
        <h3 class="bg-primarybg text-white w-full py-4 text-2xl pl-6 rounded-t-lg">
          View Employee
        </h3>
        <form class="p-6">
          <AddEmployeeForm />
          <div class=" flex justify-center mx-20 mt-10 mb-5">
            <button
              class="bg-white text-primary  px-6 py-1 rounded-md border-1 border-primarybg"
              onClick={() => setViewEmployeeModal(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </Box>
    </Modal>
  );
};

const EmployeeTable = () => {
  const [editEmployeeModal, setEditEmployeeModal] = useState(false);
  const [viewEmployeeModal, setViewEmployeeModal] = useState(false);
  const navigate = useNavigate();
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
                    onClick={() => setEditEmployeeModal(true)}
                  />
                  <img
                    src={View}
                    alt="view"
                    class="w-7 cursor-pointer"
                    onClick={() => {
                      setViewEmployeeModal(true);
                    }}
                  />
                </td>

                <td class="border-1 border-primaryborder px-3 py-2 ">
                  <img
                    src={Setting}
                    alt="manage"
                    class="w-7 ml-12 cursor-pointer"
                    onClick={() => {
                      navigate("/role-permission");
                    }}
                  />
                </td>
                <td class="font-thin text-sm border-1 border-primaryborder px-3 py-2 text-center">
                  {row.emp_code}
                </td>
                <td class="font-thin text-sm border-1 border-primaryborder px-3 py-2 text-center">
                  {row.emp_name}
                </td>
                <td class="font-thin text-sm border-1 border-primaryborder px-3 py-2 text-center">
                  {row.email}
                </td>
                <td class="font-thin text-sm border-1 border-primaryborder px-3 py-2 text-center">
                  {row.design}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <EditEmployeeModal
        setEditEmployeeModal={setEditEmployeeModal}
        editEmployeeModal={editEmployeeModal}
      />
      <ViewEmployeeModal
        setViewEmployeeModal={setViewEmployeeModal}
        viewEmployeeModal={viewEmployeeModal}
      />
    </div>
  );
};

export default EmployeeTable;
