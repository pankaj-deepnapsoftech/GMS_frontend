import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const Graph = () => {
  const data = [
    { month: "Jan", registrations: 20 },
    { month: "Feb", registrations: 35 },
    { month: "Mar", registrations: 50 },
    { month: "Apr", registrations: 45 },
    { month: "May", registrations: 60 },
    { month: "Jun", registrations: 80 },
    { month: "Jul", registrations: 70 },
    { month: "Aug", registrations: 90 },
    { month: "Sep", registrations: 100 },
    { month: "Oct", registrations: 95 },
    { month: "Nov", registrations: 110 },
    { month: "Dec", registrations: 120 },
  ];

  return (
    <div className="w-full p-4 bg-white shadow-md">
      <h2 className="text-sm font-semibold text-gray-500 mb-4">Gym Registrations Over Time</h2>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="gradientColor" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="5%" stopColor="#706fd3" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#a29bfe" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area 
            type="monotone" 
            dataKey="registrations" 
            stroke="#706fd3" 
            fill="url(#gradientColor)" 
            strokeWidth={2} 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
