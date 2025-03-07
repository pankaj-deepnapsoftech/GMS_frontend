import React from 'react';
import { FaDumbbell, FaUserTie, FaExclamationTriangle } from 'react-icons/fa';

const Cards = () => {
  const stats = [
    {
      id: 1,
      title: 'Total Gyms',
      value: 50,
      icon: <FaDumbbell className="text-green-500 text-3xl" />,
      from: 'from-green-400',
      to: 'to-green-500',
    },
    {
      id: 2,
      title: 'Total Owners',
      value: 120,
      icon: <FaUserTie className="text-blue-500 text-3xl" />,
      from: 'from-blue-400',
      to: 'to-blue-500',
    },
    {
      id: 5,
      title: 'Pending Approvals',
      value: 3,
      icon: <FaExclamationTriangle className="text-orange-500 text-3xl" />,
      from: 'from-orange-400',
      to: 'to-orange-500',
    },
  ];

  return (
    <div class="grid grid-cols-1 gap-5 sm:grid-cols-3 mt-4">
      {stats.map((stat) => (
        <div
          class="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900"
          key={stat.id}
        >
          <div class="px-4 py-5 sm:p-6">
            <dl>
              <dt class="text-sm leading-5 font-medium text-gray-500 truncate dark:text-gray-400">
                {stat.title}
              </dt>
              <dd class="mt-1 text-3xl leading-9 font-semibold text-indigo-600 dark:text-indigo-400">
                {stat.value}
              </dd>
            </dl>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
