import React, { useState } from "react";
import AdminAddData from "./AdminAddData";
import ViewAllData from "./ViewAllData";

const Dashboard = () => {
  // State to track which panel is selected
  const [activePanel, setActivePanel] = useState("Dashboard");
  
  // State to toggle sidebar visibility on mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Sidebar options
  const menuItems = [
    { name: "Add New Service" },
    { name: "View All Data" },
    { name: "Logout" },
  ];

  // Function to render different panels
  const renderPanel = () => {
    switch (activePanel) {
      case "Add New Service":
        return <div><AdminAddData/></div>;
      case "View All Data":
        return <div><ViewAllData/></div>;
      default:
        return <div>Select an option from the sidebar.</div>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Mobile Hamburger Button */}
      <div className="md:hidden bg-gray-800 p-4 text-white flex justify-between items-center">
        <h2 className="text-xl font-semibold">Admin Panel</h2>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="focus:outline-none"
        >
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "block" : "hidden"
        }  md:w-64 bg-gray-800 text-white p-4 space-y-6 md:flex md:flex-col`}
      >
        <h2 className="text-xl font-semibold mb-4">Dash Board</h2>
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer p-2 rounded ${
                activePanel === item.name ? "bg-gray-600" : ""
              }`}
              onClick={() => setActivePanel(item.name)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-gray-100 p-4 shadow">
          <h1 className="text-2xl font-semibold">{activePanel}</h1>
        </header>

        {/* Main Panel */}
        <main className="flex-1 p-6 bg-white">{renderPanel()}</main>
      </div>
    </div>
  );
};

export default Dashboard;
