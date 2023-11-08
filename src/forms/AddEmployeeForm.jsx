import React from "react";

const AddEmployeeForm = () => {
  return (
    <div class="flex items-end justify-center  gap-8 flex-wrap overflow-y-scroll h-modalheight">
      <div>
        <label
          htmlFor="emp_name"
          className="block text-white text-sm font-medium mb-2"
        >
          <span class="text-primary">Employee Name</span>
          <span class="text-red-500">*</span>
        </label>

        <input
          type="text"
          id="emp_name"
          name="emp_name"
          className="w-46 h-8 text-sm px-3 py-2 border-1 border-primarybg rounded-md outline-none "
          placeholder="Enter Employee Name"
        />
      </div>

      <div>
        <label
          htmlFor="emp_name"
          className="block text-white text-sm font-medium mb-2"
        >
          <span class="text-primary">Employee Code</span>
          <span class="text-red-500">*</span>
        </label>

        <input
          type="text"
          id="emp_name"
          name="emp_name"
          className="w-46 h-8 text-sm px-3 py-2 border-1 border-primarybg rounded-md outline-none "
          placeholder="Enter Employee Name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-white text-sm font-medium mb-2"
        >
          <span class="text-primary">Email ID</span>
          <span class="text-red-500">*</span>
        </label>

        <input
          type="email"
          id="email"
          name="email"
          className="w-46 h-8 text-sm px-3 py-2 border-1 border-primarybg rounded-md outline-none "
          placeholder="Enter Employee Name"
        />
      </div>

      <div>
        <label
          htmlFor="mobile"
          className="block text-white text-sm font-medium mb-2"
        >
          <span class="text-primary">Mobile Number</span>
          <span class="text-red-500">*</span>
        </label>

        <input
          type="text"
          id="mobile"
          name="mobile"
          className="w-46 h-8 text-sm px-3 py-2 border-1 border-primarybg rounded-md outline-none "
          placeholder="Enter Employee Name"
        />
      </div>

      <div>
        <label
          htmlFor="role"
          className="block text-white text-sm font-medium mb-2"
        >
          <span class="text-primary">Role</span>
          <span class="text-red-500">*</span>
        </label>
        <select
          className="w-56 h-8 text-sm px-3 text-primary border-1 border-primarybg rounded-md outline-none "
          name="role"
          id="role"
        >
          <option value="">Select</option>
          <option value="">Role 1</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="reporting"
          className="block text-white text-sm font-medium mb-2"
        >
          <span class="text-primary">Reporting To</span>
          <span class="text-red-500">*</span>
        </label>
        <select
          className="w-56 h-8 text-sm px-3 text-primary border-1 border-primarybg rounded-md outline-none "
          name="role"
          id="role"
        >
          <option value="">Select</option>
          <option value="">Manager</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="address"
          className="block text-white text-sm font-medium mb-2"
        >
          <span class="text-primary">Address</span>
          <span class="text-red-500">*</span>
        </label>

        <input
          type="text"
          id="address"
          name="address"
          className="w-46 h-8 text-sm px-3 py-2 border-1 border-primarybg rounded-md outline-none "
          placeholder="Enter Address"
        />
      </div>
      <div>
        <label
          htmlFor="state"
          className="block text-white text-sm font-medium mb-2"
        >
          <span class="text-primary">State</span>
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
          <span class="text-primary">Region</span>
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
          <span class="text-primary">District</span>
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
          <span class="text-primary">Area</span>
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
      <div>
        <label
          htmlFor="pincode"
          className="block text-white text-sm font-medium mb-2"
        >
          <span class="text-primary">Pincode</span>
          <span class="text-red-500">*</span>
        </label>

        <input
          type="number"
          id="pincode"
          name="pincode"
          className="w-46 h-8 text-sm px-3 py-2 border-1 border-primarybg rounded-md outline-none "
          placeholder="Enter Pincode"
        />
      </div>

      <div>
        <label
          htmlFor="dateofbirth"
          className="block text-white text-sm font-medium mb-2"
        >
          <span class="text-primary">Date Of Birth</span>
          <span class="text-red-500">*</span>
        </label>

        <input
          type="text"
          id="dateofbirth"
          name="dateofbirth"
          className="w-46 h-8 text-sm px-3 py-2 border-1 border-primarybg rounded-md outline-none "
          placeholder="Enter Date of birth"
        />
      </div>
      <div>
        <label
          htmlFor="dateofjoining"
          className="block text-white text-sm font-medium mb-2"
        >
          <span class="text-primary">Date Of Joining</span>
          <span class="text-red-500">*</span>
        </label>

        <input
          type="text"
          id="dateofjoining"
          name="dateofjoining"
          className="w-46 h-8 text-sm px-3 py-2 border-1 border-primarybg rounded-md outline-none "
          placeholder="Enter Date of joining"
        />
      </div>

      <div>
        <label
          htmlFor="contact"
          className="block text-white text-sm font-medium mb-2"
        >
          <span class="text-primary">Emergency Contact Number</span>
          <span class="text-red-500">*</span>
        </label>

        <input
          type="text"
          id="contact"
          name="contact"
          className="w-46 h-8 text-sm px-3 py-2 border-1 border-primarybg rounded-md outline-none "
          placeholder="Enter Emergency contact"
        />
      </div>
      <div>
        <label
          htmlFor="bloodGroup"
          className="block text-white text-sm font-medium mb-2"
        >
          <span class="text-primary">Blood Group</span>
          <span class="text-red-500">*</span>
        </label>

        <input
          type="text"
          id="bloodGroup"
          name="bloodGroup"
          className="w-46 h-8 text-sm px-3 py-2 border-1 border-primarybg rounded-md outline-none "
          placeholder="Enter Blood Group"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-white text-sm font-medium mb-2"
        >
          <span class="text-primary">Password</span>
          <span class="text-red-500">*</span>
        </label>

        <input
          type="password"
          id="password"
          name="password"
          className="w-46 h-8 text-sm px-3 py-2 border-1 border-primarybg rounded-md outline-none "
          placeholder="Enter Password"
        />
      </div>
      <div>
        <label
          htmlFor="uniqueid"
          className="block text-white text-sm font-medium mb-2"
        >
          <span class="text-primary">Mobile Unique ID</span>
          <span class="text-red-500">*</span>
        </label>

        <input
          type="text"
          id="uniqueid"
          name="uniqueid"
          className="w-46 h-8 text-sm px-3 py-2 border-1 border-primarybg rounded-md outline-none "
          placeholder="Enter Unique Id"
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
          <span class="text-primary ">Is Web User?</span>
          <span class="text-red-500">*</span>
        </label>
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
          <span class="text-primary ">Is Mobile User?</span>
          <span class="text-red-500">*</span>
        </label>
      </div>
    </div>
  );
};

export default AddEmployeeForm;
