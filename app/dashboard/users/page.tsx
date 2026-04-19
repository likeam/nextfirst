import Link from "next/link";
import React from "react";

const Users = () => {
  return (
    <div className=" min-h-screen bg-gradient-to-br form-blue-200 to-blue-900 p-8">
      <div className=" max-w-4xl mx-auto bg-gray-300 rounded-lg shadow-2xl p-8">
        <h1 className=" text-3xl font-bold text-gray-900 mb-4">Users</h1>
        <p className=" text-lg text-gray-700">
          Manage your users here. You can view, edit, and delete user accounts
          as needed.
        </p>
        <div className=" grid grid-col-1 md:grid-col-2  lg:grid-cols-2 gap-8">
          <Link
            href="/dashboard/users/user-details"
            className=" px-6 py-2 text-white bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors"
          >
            <h2 className=" text-xl font-semibold text-teal-800 mb-2">
              Users Details
            </h2>
            <p className=" text-gray-700">
              View and manage individual user details.
            </p>
          </Link>
          <div className=" grid grid-col-1 md:grid-col-2 gap-8">
            <Link
              href="/dashboard/users/users-list"
              className=" px-6 py-2 text-white bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors"
            >
              <h2 className=" text-xl font-semibold text-red-800 mb-2">
                Users List
              </h2>
              <p className=" text-gray-700">
                Browse and manage the list of all users.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
