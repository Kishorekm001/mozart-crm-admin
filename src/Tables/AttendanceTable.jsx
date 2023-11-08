import React from "react";
import View from "../assets/icons/view.svg";

const roleTableHeaders = [
  "Action",
  "Latitude",
  "Longitude",
  "Battery Status",
  "Address",
];

const roleTableBody = [
  {
    latitude: "123'4",
    longitude: "567'5",
    battery_status: "active",
    address: "Lorem Ipsum",
    id: "1",
  },
  {
    latitude: "123'4",
    longitude: "567'5",
    battery_status: "active",
    address: "Lorem Ipsum",
    id: "2",
  },
  {
    latitude: "123'4",
    longitude: "567'5",
    battery_status: "active",
    address: "Lorem Ipsum",
    id: "3",
  },
];

const AttendanceTable = () => {
  return (
    <div>
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
                  <img src={View} alt="view" class="w-7 cursor-pointer" />
                </td>
                <td class="font-thin text-sm border-1 border-primaryborder px-3 py-2 text-center">
                  {row.latitude}
                </td>
                <td class="font-thin text-sm border-1 border-primaryborder px-3 py-2 text-center ">
                  {row.longitude}
                </td>
                <td class="font-thin text-sm border-1 border-primaryborder px-3 py-2 text-center">
                  {row.battery_status}
                </td>
                <td class="font-thin text-sm border-1 border-primaryborder px-3 py-2 text-center">
                  {row.address}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable;
