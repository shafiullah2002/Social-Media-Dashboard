import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate("/dashboard"); // Navigate to Dashboard
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 p-6">
      {/* Main Container */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-4xl flex overflow-hidden">
        {/* Left Side - Info / Branding */}
        <div className="hidden lg:flex w-1/2 bg-blue-600 text-white flex-col justify-center p-12">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Social Dashboard
          </h1>
          <p className="mb-6 text-lg">
            Track your social media engagement, analyze posts, and manage
            content easily.
          </p>
          <ul className="space-y-2 text-sm">
            <li>✅ Monitor Followers, Likes, Comments</li>
            <li>✅ Visualize Engagement Rate</li>
            <li>✅ Analyze Post Performance</li>
            <li>✅ Manage Settings & Preferences</li>
          </ul>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 text-center">
            Login to Your Account
          </h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
          </form>

          <p className="text-center text-gray-500 text-sm mt-4">
            Don't have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer hover:underline"
              onClick={() => navigate("/signup")}
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
