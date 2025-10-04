import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    if (!username || !password) {
      alert("Please fill all the fields");
      return;
    }

    const allUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userMatch = allUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (userMatch) {
      localStorage.setItem("isLoggedIn", "true");
      alert("Login successful");
      window.location.href = "/dash";
    } else {
      alert("Invalid user");
    }
  };

  return (
    <>
      <div className="w-full h-[80vh]  flex items-center justify-center overflow-hidden">
        <div className="w-[90%] max-w-sm md:max-w-md lg:max-w-md p-5 bg-gray-100 flex flex-col items-center gap-3 rounded-xl shadow-lg shadow-slate-500 ">
          <h1 className=" text-black text-2xl font-bold ">
            My Word <span className="text-green-500">Vault</span>
          </h1>
          <h2 className="text-lg md:text-xl font-semibold">Welcome Back</h2>

          <div className="w-full flex flex-col gap-3">
            <div className="w-full flex  items-center p-2 rounded-xl bg-green-200 gap-2">
              <FaUser />
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-transparent text-black border-0 w-full outline-none text-sm md:text-base"
              />
            </div>
            <div className="w-full flex  items-center p-2 rounded-xl bg-green-200  gap-2">
              <FaLock />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-transparent border-0 w-full outline-none text-sm md:text-base"
              />
            </div>
          </div>
          <button
            className="w-full p-2 bg-green-500 rounded-xl mt-3 hover:bg-green-600 text-sm md:text-base"
            onClick={onLogin}
          >
            Login
          </button>
          <p className="text-xs md:text-sm text-gray-500 text-center">
            Dont have an account?{" "}
            <span className="text-blue-800 font-medium hover:underline">
              <Link to={"/register"}>Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
