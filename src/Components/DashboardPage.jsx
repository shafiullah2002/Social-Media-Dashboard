// src/components/DashboardPage.jsx
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Card from "./Card";
import Chart from "./Chart";
import PostsPage from "./PostsPage";
import PostAnalyticsPage from "./PostAnalyticsPage";
import SettingPage from "./SettingsPage";

export default function DashboardPage() {
  const [activePage, setActivePage] = useState("Dashboard");

  const stats = [
    { title: "Followers", value: "1.2K", icon: "👥" },
    { title: "Likes", value: "3.4K", icon: "❤️" },
    { title: "Comments", value: "500", icon: "💬" },
    { title: "Engagement", value: "25%", icon: "📈" },
  ];

  // 🔥 Render content based on sidebar click
  const renderContent = () => {
    switch (activePage) {
      case "Dashboard":
        return (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <Card key={index} {...stat} />
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Chart title="Followers Growth" type="line" />
              <Chart title="Engagement Rate" type="pie" />
            </div>
          </>
        );

      case "Posts":
        return <PostsPage />;

      case "Analytics":
        return <PostAnalyticsPage />;

      case "Settings":
        return <SettingPage />;

      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <div className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          {activePage}
        </h1>

        {renderContent()}
      </div>
    </div>
  );
}
