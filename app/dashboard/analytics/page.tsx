import React from "react";

const Analytics = () => {
  const metrics = [
    {
      title: "Total Sales",
      value: "$120,000",
      change: "+12%",
      isPositive: true,
    },
    {
      title: "Active Users",
      value: "$1,200",
      change: "+5%",
      isPositive: true,
    },
    {
      title: "New Sign-Ups",
      value: "$8,500",
      change: "-8%",
      isPositive: false,
    },
    {
      title: "Website Vists",
      value: "$1,200",
      change: "+5%",
      isPositive: true,
    },
  ];
  return (
    <div className=" min-h-screen bg-gradient-to-br from-green-100 to-green-700 p-8">
      <div className=" max-w-7xl mx-auto bg-gray-200 rounded-lg shadow-xl p-8">
        <h1 className=" text-3xl font-bold text-gray-800 mb-8">
          Analytics Dashboard
        </h1>
      </div>
    </div>
  );
};

export default Analytics;
