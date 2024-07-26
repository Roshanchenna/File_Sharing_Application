import React, { useState } from 'react';
import { Eye, EyeOff } from "lucide-react";

const Signup = () => {
  const [visibility, setVisibility] = useState(true);

  function handleSubmit() {
    alert("Signup clicked");
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <div className="bg-white bg-opacity-50 backdrop-blur-md p-8 rounded-lg shadow-lg relative z-10">
        <h1 className="text-3xl font-bold text-center mb-6">Signup Here</h1>
        <div className="mb-4">
          <input
            className="w-full p-2 border border-gray-300 rounded text-black"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="flex items-center mb-4">
          <input
            className="w-full p-2 border border-gray-300 rounded text-black"
            type={visibility ? "password" : "text"}
            placeholder="Password"
          />
          <span
            className="ml-2 cursor-pointer text-gray-600"
            onClick={() => setVisibility(!visibility)}
          >
            {visibility ? <Eye /> : <EyeOff />}
          </span>
        </div>
        <button
          className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={handleSubmit}
        >
          Signup
        </button>
      </div>
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
    </div>
  );
}

export default Signup;
