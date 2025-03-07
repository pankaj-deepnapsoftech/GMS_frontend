import React from 'react';

const recentOwners = [
  {
    id: 1,
    first: 'John',
    last: 'Doe',
    handle: '@fitzone',
    gym: 'FitZone',
    date: '2025-02-06',
  },
  {
    id: 2,
    first: 'Sarah',
    last: 'Smith',
    handle: '@elitefit',
    gym: 'Elite Fitness',
    date: '2025-02-05',
  },
  {
    id: 3,
    first: 'David',
    last: 'Johnson',
    handle: '@powergym',
    gym: 'Power Gym',
    date: '2025-02-04',
  },
];

const RecentOwnersTable = () => {
  return (
    <div className="bg-white shadow-md rounded-lg mt-6 overflow-x-auto">
      <h3 className="text-sm font-semibold px-6 py-4 text-gray-800">
        📌 Recently Added Gym Owners
      </h3>

      <table className="min-w-full border-collapse">
        {/* Table Header */}
        <thead className="border-b border-gray-100 bg-blue-400 text-gray-50 text-sm uppercase">
          <tr>
            <th className="px-6 py-4 text-left">#</th>
            <th className="px-6 py-4 text-left">First Name</th>
            <th className="px-6 py-4 text-left">Last Name</th>
            <th className="px-6 py-4 text-left">Username</th>
            <th className="px-6 py-4 text-left">Gym</th>
            <th className="px-6 py-4 text-left">Date Added</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {recentOwners.map((owner, index) => (
            <tr
              key={owner.id}
              className="border-b border-gray-100 hover:bg-gray-50 transition"
            >
              <td className="px-6 py-4 text-sm font-medium text-gray-900">
                {index + 1}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4">
                {owner.first}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4">
                {owner.last}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4">
                {owner.handle}
              </td>
              <td className="px-6  text-sm py-4">{owner.gym}</td>
              <td className="text-sm text-gray-500 px-6 py-4">{owner.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className='text-center text-indigo-500 py-3 font-normal  text-sm cursor-pointer'>See More</p>
    </div>
  );
};

export default RecentOwnersTable;
