// src/components/Chart.jsx
import React from "react";

export default function Chart({ title, type }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
        {title}
      </h3>

      {/* Chart Placeholder */}
      <div className="flex items-center justify-center h-48 text-gray-400 dark:text-gray-500 border border-dashed border-gray-300 dark:border-gray-700 rounded-lg">
        <p>{type.toUpperCase()} Chart Placeholder</p>
      </div>
    </div>
  );
}
