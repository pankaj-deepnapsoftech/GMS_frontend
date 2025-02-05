import React from 'react';

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div
      className={`absolute bg-gray-800 text-white w-56 min-h-screen overflow-y-auto transition-transform transform md:translate-x-0 ${
        isSidebarOpen ? '' : '-translate-x-full'
      } ease-in-out duration-300 md:relative md:block`}
      id="sidebar"
    >
      <div className="p-4">
        <h1 className="text-2xl font-semibold">Sidebar</h1>
        <ul className="mt-4">
          <li className="mb-2">
            <a href="#" className="block hover:text-indigo-400">
              Home
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="block hover:text-indigo-400">
              About
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="block hover:text-indigo-400">
              Services
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="block hover:text-indigo-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
