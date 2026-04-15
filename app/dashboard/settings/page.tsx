import Link from "next/link";
import React from "react";

const Settings = () => {
  return (
    <div className=" min-h-screen bg-gradient-to-br from-yellow-50 via-indigo-100 to-yellow-800">
      <div className=" max-w-7xl mx-auto bg-gray-200 rounded-lg shadow-xl p-8">
        <h1 className=" text-3xl font-bold text-gray-800 mb-8">Settings</h1>
        <p className=" text-lg text-gray-600   max-w-2xl">
          {" "}
          Customize your account settings, Profile, and Notification here.
          Choose an option from the sidebar to begin.
        </p>
        <div className=" flex space-x-12">
          <div className=" w-1/4 bg-gray-300 rounded-lg p-6 space-y-6">
            <h2 className=" text-2xl font-semibold text-gray-800 mb-4">
              Quick Links
            </h2>
            <ul className=" space-y-4">
              <li className="">
                <Link
                  className=" flex items-center text-lg text-gray-800 hover:text-indigo-600 transition-colors py-2 px-4 rounded-md hover:bg-indigo-200"
                  href="/dashboard/settings/profile"
                >
                  Profile
                </Link>
              </li>
              <li className="">
                <Link
                  className=" flex items-center text-lg text-gray-800 hover:text-yellow-600 transition-colors py-2 px-4 rounded-md hover:bg-yellow-200"
                  href="/dashboard/settings/notifications"
                >
                  Notifications
                </Link>
              </li>
              <li className="">
                <Link
                  className=" flex items-center text-lg text-gray-800 hover:text-green-600 transition-colors py-2 px-4 rounded-md hover:bg-green-200"
                  href="/dashboard/settings/account"
                >
                  Account
                </Link>
              </li>
            </ul>
          </div>
          <div className=" flex-1 bg-gray-100 shadow-md rounded-lg p-8">
            <h2 className=" text-3xl font-semibold text-gray-800 mb-4">
              Select a Settings Option
            </h2>
            <p className=" text-lg text-gray-600 max-w-3xl">
              {" "}
              Choose an option from the sidebar to manage your account,
              notifications, or profile settings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
