import React from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { name: '3 Months', value: 45 },
  { name: '6 Months', value: 25 },
  { name: '1 Year', value: 30 },
];
const COLORS = ['#9c88ff', '#706fd3', '#0abde3'];

const PlansGraph = () => {
  return (
    <div className='flex items-center justify-center flex-col'>
    <h3 className="text-xl font-semibold mb-2 text-gray-700 text-center">User Plan Distribution</h3>
    <PieChart width={300} height={300}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  </div>
  )
}

export default PlansGraph