import { profile } from "console";
import React from "react";

const UserDetails = () => {
  const user = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
    status: "Active",
    createdAt: "2024-01-01",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    profilePicture:
      "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    activites: [
      { id: 1, type: "Login", date: "2024-01-01" },
      { id: 2, type: "Profile Update", date: "2024-01-02" },
      { id: 3, type: "Password Change", date: "2024-01-03" },
    ],
  };
  return (
    <div className=" min-h-screen bg-gradient-to-br form-blue-200 to-blue-900 p-8">
      <img
        src={user.profilePicture}
        alt={user.name}
        className=" rounded-full w-32 h-32 object-cover mx-auto mb-4"
      />

      <div className=" max-w-4xl mx-auto">
        <h1 className=" text-3xl font-bold">User Details</h1>
        <p className=" mt-4 text-lg">
          <strong>ID:</strong> {user.id}
        </p>
        <p className=" text-lg">
          <strong>Name:</strong> {user.name}
        </p>
        <p className=""></p>
        <p className=" text-lg">
          <strong>Bio:</strong> {user.bio}
        </p>
        <p className=" text-lg">
          <strong>Email:</strong> {user.email}
        </p>
        <p className=" text-lg">
          <strong>Role:</strong> {user.role}
        </p>
        <p className=" text-lg">
          <strong>Status:</strong> {user.status}
        </p>
        <p className=" text-lg">
          <strong>Created At:</strong> {user.createdAt}
        </p>
      </div>
    </div>
  );
};

export default UserDetails;
