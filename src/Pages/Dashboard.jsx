import Navbar from '@/Components/Dashboard/Navbar';
import Sidebar from '@/Components/Dashboard/Sidebar';
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = (e) => {
    if (!e.target.closest('#sidebar') && !e.target.closest('#open-sidebar')) {
      setIsSidebarOpen(false);
    }
  };

  const checkScreenSize = () => {
    if (window.innerWidth >= 1024) {
      setIsSidebarOpen(true);
    } else {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  useEffect(() => {
    document.addEventListener('click', closeSidebar);

    return () => {
      document.removeEventListener('click', closeSidebar);
    };
  }, []);

  return (
    <div className="bg-gray-100">
      <div className="h-screen flex overflow-hidden">
        <Sidebar isSidebarOpen={isSidebarOpen} />

        <div className="flex-1 flex flex-col overflow-y-scroll">
          <Navbar toggleSidebar={toggleSidebar} />

          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
