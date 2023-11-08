import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./views/Login/Login";
import RootLayout from "./Layouts/RootLayout";
import ManageProfile from "./views/ManageProfile/ManageProfile";
import Upcoming from "./views/Upcoming/Upcoming";
import RolePermission from "./views/ManageProfile/RolePermission";
import ManageAttendance from "./views/ManageAttendance/ManageAttendance";
import ManageTerritory from "./views/ManageTerritory/ManageTerritory";
import { useEffect } from "react";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} index />
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Upcoming />} />
          <Route path="/dashboard" element={<Upcoming />} />
          <Route path="/manage-item" element={<Upcoming />} />
          <Route path="/manage-customer" element={<Upcoming />} />
          <Route path="/manage-leave" element={<Upcoming />} />
          <Route path="/manage-attendance" element={<ManageAttendance />} />
          <Route path="/manage-territory" element={<ManageTerritory />} />
          <Route path="/manage-blood-group" element={<Upcoming />} />
          <Route path="/manage-profile" element={<ManageProfile />} />
          <Route path="/manage-leave-type" element={<Upcoming />} />
          <Route path="/customer" element={<Upcoming />} />
          <Route path="/design-master" element={<Upcoming />} />
          <Route path="/manage-leave" element={<Upcoming />} />
          <Route path="/visit" element={<Upcoming />} />
          <Route path="/notification" element={<Upcoming />} />
          <Route path="/broadcast" element={<Upcoming />} />
          <Route path="/role-permission" element={<RolePermission />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
