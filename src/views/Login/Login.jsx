import React, { useState } from "react";
import LoginBg from "../../assets/images/loginBg.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [loginErrors, setLoginErrors] = useState({});
  const [loginDetails, setLoginDetails] = useState({
    login_id: "",
    password: "",
  });

  const { login_id, password } = loginDetails;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const navigate = useNavigate();

  const validateLogin = (values) => {
    const errors = {};
    if (values?.login_id === "") {
      errors.login_id = "Login ID is required";
    }
    if (values?.password === "") {
      errors.password = "Password is required";
    }
    return errors;
  };

  const dummnyLogin = {
    id: "001",
    pass: "admin",
  };

  const loginAPIUrl = " http://164.52.216.64:8011/api/Login/Login";

  let jwtToken = "";

  const requestData = {
    mobileNo: login_id,
    password: password,
    mobileUniqueId: "",
    isWebOrMobileUser: "W",
    remember: true,
  };

  // const headers = {
  //   // Authorization: `Bearer ${jwtToken}`,
  //   accept: "text/plain",
  //   "Content-Type": "application/json",
  // };

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(loginAPIUrl, {
        mobileNo: login_id,
        password: password,
        mobileUniqueId: "",
        isWebOrMobileUser: "W",
        remember: true,
      })
      .then((res) => {
        if (res.data.isSuccess) {
          localStorage.setItem("JwtToken", res.data.data.token);
          navigate("/manage-profile");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   const validated = validateLogin(loginDetails);
  //   setLoginErrors(validated);
  //   if (!Object.keys(validated)?.length) {
  //     if (login_id === dummnyLogin.id && password === dummnyLogin.pass) {
  //
  //     }
  //   }
  // };

  return (
    <div
      class="bg-cover bg-no-repeat bg-center h-screen"
      style={{ backgroundImage: `url(${LoginBg})` }}
    >
      <div className="min-h-screen flex items-center justify-end mr-20">
        <div className="bg-loginBg p-8  shadow-md w-96 rounded-xl border-2 border-sky-500">
          <h2 className="text-2xl font-semibold mb-6 text-white">Login</h2>
          <form onSubmit={handleLogin} class="flex flex-col">
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-white text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                name="login_id"
                value={login_id}
                onChange={handleChange}
                className="w-full px-3 h-10 text-sm py-2 border rounded-md outline-none "
                placeholder="Enter your Email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-white text-sm font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full px-3 h-10 text-sm py-2 border rounded-md outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-56 bg-white text-gray-600 font-semibold py-2 rounded-md align-middle self-center "
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
