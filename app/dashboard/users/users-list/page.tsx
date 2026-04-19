import React from "react";

const UsersList = () => {
  return (
    <div className=" min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-6">
      <div className=" text-center">
        <h1 className=" text-3xl font-bold text-gray-800">
          {" "}
          Welcome to the Users List
        </h1>
        <div className=" overflow-x-auto min-w-6xl bg-white rounded-lg shadow-md mt-6">
          <table className=" min-h-full table-auto min-w-6xl">
            <thead className=" bg-blue-600 text-white">
              <tr>
                <th className=" px-4 py-2">ID</th>
                <th className=" px-4 py-2">Name</th>
                <th className=" px-4 py-2">Email</th>
                <th className=" px-4 py-2">Role</th>
                <th className=" px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className=" border px-4 py-2">1</td>
                <td className=" border px-4 py-2">John Doe</td>
                <td className=" border px-4 py-2">john.doe@example.com</td>
                <td className=" border px-4 py-2">Admin</td>
                <td className=" border px-4 py-2">Active</td>
              </tr>
              <tr>
                <td className=" border px-4 py-2">2</td>
                <td className=" border px-4 py-2">Jane Smith</td>
                <td className=" border px-4 py-2">jane.smith@example.com</td>
                <td className=" border px-4 py-2">User</td>
                <td className=" border px-4 py-2">Active</td>
              </tr>
              <tr>
                <td className=" border px-4 py-2">3</td>
                <td className=" border px-4 py-2">Bob Johnson</td>
                <td className=" border px-4 py-2">bob.johnson@example.com</td>
                <td className=" border px-4 py-2">User</td>
                <td className=" border px-4 py-2">Inactive</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
