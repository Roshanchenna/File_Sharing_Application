import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800 text-white">
      <div className="text-center p-8 bg-gray-900 bg-opacity-75 rounded-lg shadow-lg">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6">
          Welcome to File <span className="text-blue-600">Sharing</span> Application
        </h1>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button
            onClick={() => navigate('/Login')}
            className="text-xl bg-blue-950 rounded-md border px-5 py-2 border-blue-600 hover:border-blue-300 hover:bg-blue-700 duration-200"
          >
            Login
          </button>
          <button
            onClick={() => navigate('/Signup')}
            className="text-xl bg-blue-950 rounded-md border px-5 py-2 border-blue-600 hover:border-blue-300 hover:bg-blue-700 duration-200"
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
