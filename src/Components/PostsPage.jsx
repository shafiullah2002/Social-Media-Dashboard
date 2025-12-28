// src/components/PostsPage.jsx
import React, { useState } from "react";

export default function PostsPage() {
  // Example posts data
  const [posts] = useState([
    { id: 1, title: "New Product Launch", likes: 120, comments: 15, shares: 10 },
    { id: 2, title: "Holiday Sale Announcement", likes: 200, comments: 30, shares: 25 },
    { id: 3, title: "Social Media Tips", likes: 90, comments: 10, shares: 5 },
    { id: 4, title: "Behind the Scenes", likes: 150, comments: 20, shares: 12 },
  ]);

  const [search, setSearch] = useState("");

  // Filter posts based on search
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
        Posts
      </h1>

      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
        />
      </div>

      {/* Posts Table */}
      <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-xl shadow">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Post Title
              </th>
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Likes
              </th>
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Comments
              </th>
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Shares
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredPosts.map((post) => (
              <tr key={post.id} className="hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300">
                <td className="px-6 py-4 whitespace-nowrap text-gray-800 dark:text-gray-100">
                  {post.title}
                </td>
                <td className="px-6 py-4 text-center text-gray-800 dark:text-gray-100">{post.likes}</td>
                <td className="px-6 py-4 text-center text-gray-800 dark:text-gray-100">{post.comments}</td>
                <td className="px-6 py-4 text-center text-gray-800 dark:text-gray-100">{post.shares}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
