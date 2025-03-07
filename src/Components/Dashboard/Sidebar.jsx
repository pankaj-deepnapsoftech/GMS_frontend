import React from 'react';
import {
  MdDashboardCustomize,
  MdLogout,
  MdPerson,
  MdSettings,
  MdSubscriptions,
} from 'react-icons/md';
import { GiGymBag } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div
      className={`absolute bg-white z-10 text-gray-800 border-r border-gray-100 w-64 min-h-screen overflow-y-auto transition-transform transform md:translate-x-0 ${
        isSidebarOpen ? '' : '-translate-x-full'
      } ease-in-out duration-300 md:relative md:block`}
      id="sidebar"
    >
      <div className="flex flex-col h-full">
        <div className="p-4">
          <div className=" flex items-center space-x-3">
            {/* Logo */}
            <img
              src="/logo.svg"
              alt="Logo"
              className="w-10 h-10 object-contain"
            />
            {/* Title */}
            <h1 className="text-2xl py-4 text-gray-700 font-bold">GMS</h1>
          </div>

          <ul className="mt-5 space-y-5">
            <li className="w-full flex items-center justify-start hover:bg-blue-50 rounded-lg transition-colors duration-300">
              <NavLink
                to="overview"
                className="flex items-center space-x-3 p-2 rounded-lg "
              >
                <MdDashboardCustomize className="text-gray-400 text-2xl" />
                <p className="font-semibold text-gray-700 ">Dashboard</p>
              </NavLink>
            </li>
            <li className="w-full flex items-center justify-start hover:bg-blue-50 rounded-lg transition-colors duration-300">
              <a
                href="#"
                className="flex items-center space-x-3 p-2 rounded-lg "
              >
                <GiGymBag className="text-gray-400 text-2xl" /> {/* Example icon */}
                <p className="font-semibold text-gray-700 ">Registered Gym</p>
              </a>
            </li>
            <li className="w-full flex items-center justify-start hover:bg-blue-50 rounded-lg transition-colors duration-300 text-gray-700">
              <NavLink
                to="owner"
                className="flex items-center space-x-3 p-2 rounded-lg "
              >
                <MdPerson className="text-gray-400 text-2xl" /> {/* Example icon */}
                <p className="font-semibold text-gray-700 ">Owners</p>
              </NavLink>
            </li>
            <li className="w-full flex items-center justify-start hover:bg-blue-50 rounded-lg transition-colors duration-300">
              <NavLink
                to="subscription  "
                className="flex items-center space-x-3 p-2 rounded-lg "
              >
                <MdSubscriptions className="text-gray-400 text-2xl" />{' '}
                {/* Example icon */}
                <p className="font-semibold text-gray-700 ">Subscriptions</p>
              </NavLink>
            </li>
            <li className="w-full flex items-center justify-start hover:bg-blue-50 rounded-lg transition-colors duration-300">
              <a
                href="#"
                className="flex items-center space-x-3 p-2 rounded-lg "
              >
                <MdSettings className="text-gray-400 text-2xl" /> {/* Example icon */}
                <p className="font-semibold text-gray-700 ">Settings</p>
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-auto mb-10 p-4 w-full flex items-center justify-start space-x-3 text-red-500 hover:text-red-700 cursor-pointer ">
          <MdLogout />
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
