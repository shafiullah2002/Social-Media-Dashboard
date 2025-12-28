// src/components/Sidebar.jsx
import React from "react";
import { FaTachometerAlt, FaFileAlt, FaChartPie, FaCog } from "react-icons/fa";

export default function Sidebar({ activePage, setActivePage }) {
  const menu = [
    { name: "Dashboard", icon: <FaTachometerAlt /> },
    { name: "Posts", icon: <FaFileAlt /> },
    { name: "Analytics", icon: <FaChartPie /> },
    { name: "Settings", icon: <FaCog /> },
  ];

  return (
    <div className="w-64 bg-white dark:bg-gray-800 min-h-screen p-6 shadow-lg flex flex-col">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
        Dashboard
      </h2>

      <ul className="flex-1 space-y-4">
        {menu.map((item, index) => (
          <li
            key={index}
            className={`flex items-center space-x-3 px-4 py-2 rounded-lg cursor-pointer transition duration-300
              ${
                activePage === item.name
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            onClick={() => setActivePage(item.name)}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="font-medium">{item.name}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto text-gray-500 dark:text-gray-400 text-sm text-center">
        &copy; 2025 Social Dashboard
      </div>
    </div>
  );
}
