"use client";
import { createContext, useContext, useState } from "react";

const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
  const [interactions, setInteractions] = useState([]);

  const addInteraction = (friendName, type) => {
    const newEntry = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      friendName,
      type, // 'Call', 'Text', ba 'Video'
      title: `${type} with ${friendName}`,
    };
    setInteractions((prev) => [newEntry, ...prev]);
  };

  return (
    <TimelineContext.Provider value={{ interactions, addInteraction }}>
      {children}
    </TimelineContext.Provider>
  );
};

export const useTimeline = () => useContext(TimelineContext);