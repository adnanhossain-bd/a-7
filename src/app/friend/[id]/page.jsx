"use client";
import { useParams } from "next/navigation";
import friendsData from "@/data/friends.json";
import { useTimeline } from "@/context/TimelineContext";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";

const FriendDetails = () => {
  const { id } = useParams();
  const { addInteraction } = useTimeline();

  const friend = friendsData.find((f) => f.id === parseInt(id));

  if (!friend) return <div className="p-20 text-center">Friend not found!</div>;

  const handleAction = (type) => {
    addInteraction(friend.name, type);
    toast.success(`${type} logged successfully!`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Toaster />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Profile Card */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
          <img
            src={friend.picture}
            className="w-32 h-32 rounded-full mb-6"
            alt={friend.name}
          />
          <h2 className="text-2xl font-bold">{friend.name}</h2>
          <span className="mt-2 px-4 py-1 bg-red-100 text-red-600 rounded-full font-bold uppercase text-xs">
            {friend.status}
          </span>
          <p className="mt-6 text-gray-500 text-center">{friend.bio}</p>
          <div className="mt-8 flex flex-col w-full gap-3">
            <button className="py-3 bg-gray-100 rounded-lg font-medium">
              ⏰ Snooze 2 Weeks
            </button>
            <button className="py-3 bg-gray-100 rounded-lg font-medium">
              📦 Archive
            </button>
            <button className="py-3 text-red-500 font-medium">🗑️ Delete</button>
          </div>
        </div>

        {/* Right Column - Stats & Actions */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <p className="text-gray-400 text-sm">Last Contact</p>
              <h3 className="text-xl font-bold">
                {friend.days_since_contact} Days
              </h3>
            </div>
           
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold mb-6">Quick Check-In</h3>
            <div className="flex gap-4">
              <button
                onClick={() => handleAction("Call")}
                className="flex-1 py-4 bg-[#264D3E] text-white rounded-xl flex justify-center items-center gap-2"
              >
                <Image
                  src="https://i.ibb.co/j940Y8Mf/call.png"
                  alt="Icon"
                  width={20}
                  height={20}
                />
                Call
              </button>
              <button
                onClick={() => handleAction("Text")}
                className="flex-1 py-4 bg-[#264D3E] text-white rounded-xl flex justify-center items-center gap-2"
              >
                <Image
                  src="https://i.ibb.co/sJ2jR3gq/text.png"
                  alt="Icon"
                  width={20}
                  height={20}
                />
                Text
              </button>
              <button
                onClick={() => handleAction("Video")}
                className="flex-1 py-4 bg-[#264D3E] text-white rounded-xl flex justify-center items-center gap-2"
              >
                <Image
                  src="https://i.ibb.co/chJzG1d8/video.png"
                  alt="Icon"
                  width={20}
                  height={20}
                />
                Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
