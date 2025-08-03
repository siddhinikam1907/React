import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext.js";
import UserContextProvider from "../Context/UserContextProvider.jsx";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPass] = useState("");
  const { SetUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    SetUser({ username, password });
  };
  return (
    <div>
      <h2 className="text-4xl text-white ">Login</h2>
      <div className="flex flex-col  justify-center items-center gap-2">
        <input
          className="h-12 w-96 m-5 p-4 rounded-md bg-white text-black"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
        />
        <input
          className="h-12 w-96 m-5 p-4 rounded-md bg-white text-black"
          type="password"
          value={password}
          onChange={(e) => setPass(e.target.value)}
          placeholder="Enter password"
        />
        <button
          className="h-10 w-32 bg-blue-300 text-black rounded-md mb-6"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Login;
