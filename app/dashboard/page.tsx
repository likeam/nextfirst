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
        <div className="">
          <Link
            href="/dashboard/users/users-list"
            className=" inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            <div className="">
              <h2 className="">Tasks</h2>
              <span className=" inline-block bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded-full"></span>
            </div>
            <p className=" text-gray-600 mt-2">
              View, organize, and manage your tasks.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
