import React from "react";

const ProfileSettings = () => {
  return (
    <div className=" min-h-screen bg-gradient-to-br from-blue-300 to-blue-950 p-8">
      <div className=" max-w-4xl mx-auto bg-gray-300 rounded-lg shadow-2xl p-8">
        <h1 className=" text-3xl font-bold text-gray-900 mb-4">
          Profile Settings
        </h1>
        <section className=" mb-8">
          <h2 className=" text-xl font-semibold text-gray-700 mb-4">
            Profile Picture
          </h2>
          <div className=" flex items-center space-x-4">
            <div className=" w-24 h-24 rounded-full bg-gray-400 ">
              <img
                src="https://images.unsplash.com/photo-1654110455429-cf322b40a906?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D"
                alt="Profile"
                className=" w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          <div className="">
            <button className=" px-6 mt-5 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors ">
              Change Picture
            </button>
          </div>
        </section>
        <section className=" mb-8">
          <h2 className=" text-xl font-semibold text-gray-900 mb-4">
            Profile Information
          </h2>
          .{" "}
          <div className=" space-y-4">
            <label className=" block text-sm font-medium text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              defaultValue="Abdul Rehman"
              className=" mt-1 block px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className=" space-y-4">
            <label className=" block text-sm font-medium text-gray-600">
              Username
            </label>
            <input
              type="text"
              defaultValue="A_Rahman"
              className=" mt-1 block px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className=" space-y-4">
            <label className=" block text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              type="text"
              defaultValue="abdul.rehman@example.com"
              className=" mt-1 block px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </section>
        <div className=" flex justify-end space-x-4">
          <button className=" px-6 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-400 transition-colors">
            Cancel
          </button>
          <button className=" px-6 py-2 text-white bg-blue-600 rounded-lg hover:to-blue-700 transition-colors">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
