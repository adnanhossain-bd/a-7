"use client";
import { useTimeline } from "@/context/TimelineContext";
import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const Stats = () => {
  const { interactions } = useTimeline();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  
  const data = [
    { name: "Text", value: interactions.filter(i => i.type === "Text").length || 0 },
    { name: "Call", value: interactions.filter(i => i.type === "Call").length || 0 },
    { name: "Video", value: interactions.filter(i => i.type === "Video").length || 0 },
  ];

  const COLORS = ["#8B5CF6", "#1a2e35", "#22C55E"]; 

  if (!isMounted) {
    return <div className="min-h-screen bg-[#F8FAFC]"></div>; 
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-[#1a2e35] mb-8">Friendship Analytics</h1>
        
        {}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 min-h-[450px]">
          <h2 className="text-gray-500 text-sm font-medium mb-12">By Interaction Type</h2>
          
          <div className="w-full h-[300px] flex flex-col items-center justify-center">
            {interactions.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={100}
                    paddingAngle={8}
                    dataKey="value"
                    stroke="none"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Legend 
                    verticalAlign="bottom" 
                    height={36} 
                    iconType="circle"
                    formatter={(value) => <span className="text-gray-600 text-sm">{value}</span>}
                  />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="text-center">
                <p className="text-gray-400 italic">No interaction data available yet.</p>
                <p className="text-xs text-gray-300 mt-2">Try calling or texting a friend from the details page.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;