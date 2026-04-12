import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <div className=" min-h-screen bg-gradient-to-br from-bg-red-300 to-red-800 p-8 ">
      <div className=" max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-8">
        <div className=" flex flex-col">
          <h1 className=" text-4xl font-extrabold text-gray-900 mb-4 sm:mb-0">
            Dashboard
          </h1>
          <p className=" text-lg text-gray-600 mt-3">
            Welcome to your dashboard! Here you can manage your tasks and track
            your progress.
          </p>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link
            href="/dashboard/tasks"
            className=" bg-blue-100 hover:bg-blue-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-110"
          >
            <div className=" flex items-center justify-between">
              <h2 className=" text-xl font-semibold text-blue-800">Tasks</h2>
              <span className=" inline-block bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded-full"></span>
            </div>
            <p className=" text-gray-600 mt-2">
              View, organize, and manage your tasks.
            </p>
          </Link>
          <Link
            href="/dashboard/analytics"
            className=" bg-green-100 hover:bg-green-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-110"
          >
            <div className=" flex items-center justify-between">
              <h2 className=" text-xl font-semibold text-green-800">
                Analytics
              </h2>
              <span className=" inline-block bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded-full"></span>
            </div>
            <p className=" text-gray-600 mt-2">
              Gain insights into your productivity and performance.
            </p>
          </Link>
          <Link
            href="/dashboard/settings"
            className=" bg-yellow-100 hover:bg-yellow-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-110"
          >
            <div className=" flex items-center justify-between">
              <h2 className=" text-xl font-semibold text-yellow-800">
                Settings
              </h2>
              <span className=" inline-block bg-yellow-100 text-yellow-800 text-sm font-medium px-2 py-1 rounded-full"></span>
            </div>
            <p className=" text-gray-600 mt-2">
              Customize your experience and manage your account settings.
            </p>
          </Link>
          <Link
            href="/dashboard/users"
            className=" bg-red-100 hover:bg-red-200 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-110"
          >
            <div className=" flex items-center justify-between">
              <h2 className=" text-xl font-semibold text-red-800">Users</h2>
              <span className=" inline-block bg-red-100 text-red-800 text-sm font-medium px-2 py-1 rounded-full"></span>
            </div>
            <p className=" text-gray-600 mt-2">
              View, organize, and manage your users.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
