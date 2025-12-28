// src/components/SettingsPage.jsx
import React, { useState, useEffect } from "react";

export default function SettingsPage() {
  // Theme state: "light" or "dark"
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  // Update body class whenever theme changes
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
        Settings
      </h1>

      {/* Theme Toggle */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow mb-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Theme
        </h2>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-300"
        >
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>

      {/* Account Settings Placeholder */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Account Settings
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          Here you can add options like updating your profile, changing
          password, and managing notifications.
        </p>
      </div>
    </div>
  );
}
