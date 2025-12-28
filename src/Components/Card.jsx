// src/components/Card.jsx
import React from "react";

export default function Card({ title, value, icon }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
      <div className="flex items-center justify-between">
        {/* Text */}
        <div>
          <p className="text-gray-500 dark:text-gray-300">{title}</p>
          <p className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-2">{value}</p>
        </div>

        {/* Icon */}
        <div className="text-3xl">{icon}</div>
      </div>
    </div>
  );
}
