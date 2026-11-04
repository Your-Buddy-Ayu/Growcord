const LiveActivity = () => {
  const activities = [
    { name: "Rajesh", action: "just calculated their cost", time: "2 min ago" },
    { name: "Priya", action: "started their e-commerce project", time: "5 min ago" },
    { name: "Amit", action: "got their quote approved", time: "8 min ago" },
    { name: "Sneha", action: "launched their clinic website", time: "12 min ago" },
  ];

  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        <span className="text-sm font-bold text-white">Live Activity</span>
      </div>
      <div className="space-y-3">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start gap-3 text-sm">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 to-purple-400 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
              {activity.name.charAt(0)}
            </div>
            <div className="flex-1">
              <span className="font-semibold text-white">{activity.name}</span>
              <span className="text-gray-300"> {activity.action}</span>
              <div className="text-xs text-gray-400 mt-1">{activity.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveActivity;

