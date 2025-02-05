import Content from '@/Components/Dashboard/Content';
import Navbar from '@/Components/Dashboard/Navbar';
import Sidebar from '@/Components/Dashboard/Sidebar';
import React, { useState, useEffect } from 'react';


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
    // If the screen width is larger than or equal to 1024px, open the sidebar by default
    if (window.innerWidth >= 1024) {
      setIsSidebarOpen(true);
    } else {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    // Check the screen size when the component mounts
    checkScreenSize();

    // Add event listener to handle screen resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  useEffect(() => {
    // Close the sidebar when clicking outside of it
    document.addEventListener('click', closeSidebar);

    return () => {
      document.removeEventListener('click', closeSidebar);
    };
  }, []);

  return (
    <div className="bg-gray-100">
      <div className="h-screen flex overflow-hidden bg-gray-200">
        {/* Sidebar */}
        <Sidebar isSidebarOpen={isSidebarOpen} />

        {/* Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Navbar */}
          <Navbar toggleSidebar={toggleSidebar} />

          {/* Content Body */}
          <Content />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
