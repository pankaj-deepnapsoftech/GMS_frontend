import React from 'react';

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="bg-white shadow border-b border-gray-200">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4 px-2">
          <h1 className="text-xl text-end w-full mr-5 font-bold text-gray-600">Hi, Admin</h1>

          {/* Toggle button only visible on smaller screens */}
          <button
            className="text-gray-500 hover:text-gray-600 md:hidden"
            id="open-sidebar"
            onClick={toggleSidebar}
          >
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
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
