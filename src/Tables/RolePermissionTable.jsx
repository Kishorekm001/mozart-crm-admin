import React from "react";

const RolePermissionTable = ({
  permissionTableBody,
  permissionTableHeaders,
}) => {
  return (
    <div class="ml-5 mr-5">
      <table class="border-1 border-primaryborder w-full mt-10 rounded-md">
        <thead>
          <th class="font-light text-sm border-1 border-primaryborder px-3 py-2">
            S No.
          </th>
          {permissionTableHeaders.map((header, index) => {
            return (
              <th class="font-light text-sm border-1 border-primaryborder px-3 py-2">
                {header}
              </th>
            );
          })}
        </thead>
        <tbody>
          {permissionTableBody.map((row, index) => {
            return (
              <tr key={index} class="text-primary">
                <td class="font-thin  text-sm border-1 border-primaryborder px-3 py-2 text-center">
                  {row.id}
                </td>
                <td class="font-thin  text-sm border-1 border-primaryborder px-3 py-2 text-center">
                  {row.permission_name}
                </td>
                <td class="font-thin  text-sm border-1 border-primaryborder px-3 py-2 text-center">
                  <input
                    type="checkbox"
                    name="view_permission"
                    class=" border rounded-md outline-none mr-2 text-sm"
                    style={{ width: "28px", height: "18px" }}
                    checked={row.view}
                  />
                </td>
                <td class="font-thin  text-sm border-1 border-primaryborder px-3 py-2 text-center">
                  <input
                    type="checkbox"
                    name="add_permission"
                    class=" border rounded-md outline-none mr-2 text-sm"
                    style={{ width: "28px", height: "18px" }}
                    checked={row.add}
                  />
                </td>
                <td class="font-thin  text-sm border-1 border-primaryborder px-3 py-2 text-center">
                  <input
                    type="checkbox"
                    name="edit_permission"
                    class=" border rounded-md outline-none mr-2 text-sm"
                    style={{ width: "28px", height: "18px" }}
                    checked={row.edit}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RolePermissionTable;
