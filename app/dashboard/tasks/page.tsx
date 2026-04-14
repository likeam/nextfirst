import React from "react";

const Tasks = () => {
  const tasks = [
    {
      id: 1,
      title: "Complete project proposal",
      description:
        "Draft and submit the project proposal by the end of the week.",
      status: "In Progress",
      dueDate: "2024-07-01",
    },
    {
      id: 2,
      title: "Team meeting",
      description: "Discuss project milestones and assign tasks.",
      status: "Scheduled",
      dueDate: "2024-07-03",
    },
    {
      id: 3,
      title: "Code review",
      description: "Review code for the new feature implementation.",
      status: "Pending",
      dueDate: "2024-07-05",
    },
    {
      id: 4,
      title: "Client presentation",
      description:
        "Prepare slides and present the project progress to the client.",
      status: "Scheduled",
      dueDate: "2024-07-10",
    },
    {
      id: 5,
      title: "Documentation update",
      description:
        "Update project documentation with the latest changes and features.",
      status: "In Progress",
      dueDate: "2024-07-15",
    },
  ];
  return (
    <div className=" min-h-screen bg-gradient-to-br from gray-50 to to-blue-500 p-8">
      <div className=" max-w-7xl max-auto bg-gray-200 rounded-lg shadow-sm p-8 ">
        <h1 className=" text-3xl font-bold text-gray-900 mb-8">Tasks</h1>
        <section className=" space-y-6">
          {tasks.map((task) => (
            <div
              key={task.id}
              className=" bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border-l-4"
              style={{
                borderColor:
                  task.status === "Completed"
                    ? "goldenrod"
                    : task.status === "In Progress"
                      ? "blue"
                      : task.status === "Scheduled"
                        ? "green"
                        : task.status === "Pending"
                          ? "yellow"
                          : "red",
              }}
            >
              <h2 className=" text-xl font-semibold text-gray-900">
                {task.title}
              </h2>
              <p className=" text-gray-600 mt-2">{task.description}</p>
              <div className=" flex items-center justify-between mt-4">
                <span
                  className={` px-3 py-1 rounded-full text-sm font-medium ${
                    task.status === "In Progress"
                      ? "bg-blue-100 text-blue-800"
                      : task.status === "Scheduled"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {task.status}
                </span>
                <span className=" text-sm text-gray-500 gap-4 flex items-center">
                  <button className=" px-4 py-2 bg-blue-300 rounded-lg text-blue-60 hover:bg-blue-200 hover:text-blue-800">
                    Edit
                  </button>
                  <button className=" px-4 py-2 bg-red-300 rounded-lg text-red-600 hover:text-red-800 hover:bg-red-200">
                    Delete
                  </button>
                  <span className=" text-sm text-gray-500">
                    Due: {task.dueDate}
                  </span>
                </span>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Tasks;
