import Link from "next/link";

const FriendCard = ({ friend }) => {
  // স্ট্যাটাস অনুযায়ী কালার কোড
  const statusStyles = {
    "overdue": "bg-red-100 text-red-600",
    "almost due": "bg-orange-100 text-orange-600",
    "on-track": "bg-green-100 text-green-600",
  };

  return (
    <Link href={`/friend/${friend.id}`}>
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50 flex flex-col items-center text-center hover:shadow-md transition-shadow cursor-pointer h-full">
        <img 
          src={friend.picture} 
          alt={friend.name} 
          className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-gray-50"
        />
        <h3 className="text-lg font-bold text-[#1a2e35]">{friend.name}</h3>
        <p className="text-xs text-gray-400 mb-3">{friend.days_since_contact}d ago</p>
        
        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {friend.tags.map(tag => (
            <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-gray-100 text-gray-500 rounded">
              {tag}
            </span>
          ))}
        </div>

        {/* Status Badge */}
        <span className={`text-xs font-bold px-4 py-1.5 rounded-full capitalize ${statusStyles[friend.status]}`}>
          {friend.status}
        </span>
      </div>
    </Link>
  );
};

export default FriendCard;