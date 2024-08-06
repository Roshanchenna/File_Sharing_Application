import React, { useState } from 'react';
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [visibility, setVisibility] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('http://localhost:8000/login', { username, password });
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        navigate('/Generate'); // Redirect to the Generate page after successful login
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
      console.error('Login error:', error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-4">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="bg-gray-800 shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
          <h2 className="text-3xl font-bold text-center text-white mb-8">Welcome Back</h2>
          <div className="mb-6">
            <input
              className="appearance-none bg-gray-700 border-b-2 border-gray-600 w-full py-3 px-3 text-white leading-tight focus:outline-none focus:border-blue-500 transition duration-300"
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-6 relative">
            <input
              className="appearance-none bg-gray-700 border-b-2 border-gray-600 w-full py-3 px-3 text-white leading-tight focus:outline-none focus:border-blue-500 transition duration-300"
              id="password"
              type={visibility ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center px-2"
              onClick={() => setVisibility(!visibility)}
            >
              {visibility ? 
                <EyeOff className="h-5 w-5 text-gray-400" /> : 
                <Eye className="h-5 w-5 text-gray-400" />
              }
            </button>
          </div>
          {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
          <div className="flex items-center justify-between mb-6">
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-400" href="#">
              Forgot Password?
            </a>
          </div>
          <div className="mb-6">
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
        <p className="text-center text-gray-400 text-sm">
          Don't have an account? 
          <a className="font-bold text-blue-500 hover:text-blue-400 ml-1" onClick={() => navigate('/signup')}>Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;