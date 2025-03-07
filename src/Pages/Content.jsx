// Content.jsx
import Cards from '@/Components/Dashboard/Cards';
import Graph from '@/Components/Dashboard/Graph';
import PlansGraph from '@/Components/Dashboard/PlansGraph';
import RecentOwnersTable from '@/Components/Dashboard/RecentOwnersTable';
import React from 'react';

const Content = () => {
  return (
    <div className="flex-1 p-4 bg-gray-100 h-full">
      <div className='w-full flex items-center justify-between'>
        <h1 className='text-gray-800 font-bold p-5 text-3xl'>Dashboard</h1>
       
      <form className="flex items-center space-x-4 p-4  w-1/2">
      
        <input
          type="date"
          id="date"    
          name="date"
          className="p-2 bg-white border border-gray-300 w-2/3 rounded-md"
        />
        <button className='bg-gray-800 text-gray-50 p-2 w-1/4 rounded-md'>Apply</button>
      </form>

      </div>
      <Cards />
      <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-3">

        <div className="md:col-span-2 ">
          <Graph />
        </div>

        <div className="md:col-span-1">
          <div className="bg-white p-4 shadow-md">
            <PlansGraph />
          </div>
        </div>
      </div>

      {/* recent accs */}
      <RecentOwnersTable />
    </div>
  );
};

export default Content;
