"use client";
import { useState, useEffect } from "react";
import Banner from "@/components/home/Banner";
import FriendCard from "@/components/home/FriendCard";
import friendsData from "@/data/friends.json";

export default function Home() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // লোডিং অ্যানিমেশন দেখানোর জন্য সামান্য ডিলে
    const timer = setTimeout(() => {
      setFriends(friendsData);
      setLoading(false);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-12 h-12 border-4 border-[#264D3E] border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-500 font-medium">Loading your friends...</p>
      </div>
    );
  }

  return (
    <div className="bg-[#F8FAFC] pb-20">
      <Banner />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { label: "Total Friends", value: friends.length },
            { label: "On Track", value: friends.filter(f => f.status === "on-track").length },
            { label: "Need Attention", value: friends.filter(f => f.status !== "on-track").length },
            { label: "Interactions", value: 12 },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-50">
              <h2 className="text-3xl font-bold text-[#1a2e35]">{stat.value}</h2>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Friends Grid */}
        <h2 className="text-2xl font-bold text-[#1a2e35] mb-8">Your Friends</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {friends.map(friend => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </div>
    </div>
  );
}