import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCloudUploadAlt, FaLock } from 'react-icons/fa';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col">
      <header className="flex justify-between items-center p-6">
        <h1 className="text-2xl font-bold">FileShare</h1>
        <nav>
          <button
            onClick={() => navigate('/Login')}
            className="text-sm bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-full transition duration-300 mr-4"
          >
            Login
          </button>
          <button
            onClick={() => navigate('/Signup')}
            className="text-sm bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full transition duration-300"
          >
            Sign Up
          </button>
        </nav>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          Simple, Secure File Sharing
        </h2>
        
        <div className="flex justify-center items-center gap-8 mb-12">
          <div className="flex flex-col items-center">
            <FaCloudUploadAlt className="text-4xl text-blue-500 mb-2" />
            <p className="text-lg">Easy Upload</p>
          </div>
          <div className="flex flex-col items-center">
            <FaLock className="text-4xl text-blue-500 mb-2" />
            <p className="text-lg">Secure Sharing</p>
          </div>
        </div>

        <button
          onClick={() => navigate('/Signup')}
          className="bg-blue-500 hover:bg-blue-600 text-xl font-bold px-8 py-3 rounded-full transition duration-300"
        >
          Get Started
        </button>
      </main>

      <footer className="text-center text-gray-500 text-sm p-4">
        <p>© 2023 FileShare. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Landing;