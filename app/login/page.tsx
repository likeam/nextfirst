import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className=" min-h-screen bg-gradient-to-br from-purple-300 to-pink-500 flex flex-col items-center justify-center p-6">
      <Link
        href="/login/loginadmin"
        className=" bg-green-600 px-4 py-2 rounded-2xl hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
      >
        Admin Page
      </Link>
      <br />
      <Link
        href="/login/loginuser"
        className=" bg-blue-600 px-4 py-2 rounded-2xl hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
      >
        User Page
      </Link>
    </div>
  );
};

export default Login;
