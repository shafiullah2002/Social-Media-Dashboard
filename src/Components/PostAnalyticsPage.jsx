// src/components/PostAnalyticsPage.jsx
import React from "react";
import Chart from "./Chart";

export default function PostAnalyticsPage({ post }) {
  // Example data if no prop passed
  const postData = post || {
    title: "New Product Launch",
    likes: 120,
    comments: 15,
    shares: 10,
    impressions: 500,
    reach: 450,
  };

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
        Analytics: {postData.title}
      </h1>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <p className="text-gray-500 dark:text-gray-300">Likes</p>
          <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">{postData.likes}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <p className="text-gray-500 dark:text-gray-300">Comments</p>
          <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">{postData.comments}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <p className="text-gray-500 dark:text-gray-300">Shares</p>
          <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">{postData.shares}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <p className="text-gray-500 dark:text-gray-300">Impressions</p>
          <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">{postData.impressions}</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Chart title="Likes Over Time" type="line" />
        <Chart title="Engagement Distribution" type="pie" />
      </div>

      {/* Reach Metric */}
      <div className="mt-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Reach
        </h3>
        <p className="text-gray-700 dark:text-gray-200">{postData.reach}</p>
      </div>
    </div>
  );
}
