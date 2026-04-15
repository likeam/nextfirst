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

        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`flex justify-between items-center bg-white rounded-lg shadow-md p-6 border-l-4 ${
                metric.isPositive ? "border-green-500" : "border-red-500"
              }`}
            >
              <div>
                <h3 className=" text-lg font-semibold text-gray-800">
                  {metric.title}
                </h3>
                <p className=" text-2xl font-bold text-gray-900">
                  {metric.value}
                </p>
              </div>
              <span
                className={`text-lg font-bold ${metric.isPositive ? "text-green-500" : "text-red-500"}`}
              >
                {metric.change}
              </span>
            </div>
          ))}
        </div>
        <div className=" mb-8">
          <h2 className=" text-xl font-semibold text-gray-700 mb-4">
            Website Traffic
          </h2>
          <div className=" bg-gray-100 rounded-lg h-72">Charts Placeholder</div>
        </div>
        <div className=" mb-8">
          <h2 className=" text-xl font-semibold text-gray-700 mb-4">
            Website Traffic
          </h2>
          <div className=" bg-gray-100 rounded-lg h-72">Charts Placeholder</div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className=" text-xl font-semibold text-gray-700 mb-4">
          Recent Activites
        </h2>
        <ul className=" space-y-4">
          <li className=" flex max-w-7xl mx-auto flex-col items-center justify-between bg-white rounded-lg shadow-md p-4">
            <div className="">
              <h3 className=" text-lg font-semibold text-gray-800">
                User Registration
              </h3>
              <p className=" text-sm text-gray-600">
                New user singed up on 2026-04-16
              </p>
            </div>
            <div className="">
              <p className=" text-sm text-gray-500 ">+10 Users</p>
            </div>
            <div className="">
              <h3 className=" text-lg font-semibold text-gray-800">
                Sales Increae
              </h3>
              <p className=" text-sm text-gray-600">
                Sale grew by 12% on 2026-04-16
              </p>
            </div>
            <div className="">
              <p className=" text-sm text-gray-500 ">+$10,000</p>
            </div>
            <div className="">
              <h3 className=" text-lg font-semibold text-gray-800">
                Website Traffic Surge
              </h3>
              <p className=" text-sm text-gray-600">
                Traffic increased by 20% on 2026-04-16
              </p>
            </div>
            <div className="">
              <p className=" text-sm text-gray-500 ">+20%</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Analytics;
