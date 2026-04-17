"use client";
import { useTimeline } from "@/context/TimelineContext";
import { useState } from "react";

const Timeline = () => {
  const { interactions } = useTimeline();
  const [filter, setFilter] = useState("All");

  const filteredInteractions = filter === "All" 
    ? interactions 
    : interactions.filter(item => item.type === filter);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-[#1a2e35]">Timeline</h1>
        
    
        <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
          {["All", "Call", "Text", "Video"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                filter === type ? "bg-white shadow-sm text-[#264D3E]" : "text-gray-500"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {interactions.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
          <p className="text-gray-400">No history found. Try contacting a friend first!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredInteractions.map((item) => (
            <div key={item.id} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#F0F5F3] rounded-full flex items-center justify-center text-xl">
                  {item.type === "Call" ? "📞" : item.type === "Text" ? "💬" : "📹"}
                </div>
                <div>
                  <h3 className="font-bold text-[#1a2e35]">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Timeline;