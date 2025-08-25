import { BarChart3, Calendar, MapPin, Settings, Users } from "lucide-react";

export default function OwnerSideBar({ activeTab, setActiveTab }) {
  return (
    <div className="w-64 bg-gray-800/40 backdrop-blur-sm min-h-screen border-r border-gray-700">
      <div className="p-5 border-b border-gray-700">
        <h1 className="text-xl font-bold">Gym Owner Portal</h1>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => setActiveTab("overview")}
              className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 ${
                activeTab === "overview"
                  ? "bg-green-600/20 text-green-400"
                  : "text-gray-400 hover:bg-gray-700/50"
              }`}
            >
              <BarChart3 size={20} />
              Overview
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("mygym")}
              className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 ${
                activeTab === "mygym"
                  ? "bg-green-600/20 text-green-400"
                  : "text-gray-400 hover:bg-gray-700/50"
              }`}
            >
              <MapPin size={20} />
              My Gym
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("trainers")}
              className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 ${
                activeTab === "trainers"
                  ? "bg-green-600/20 text-green-400"
                  : "text-gray-400 hover:bg-gray-700/50"
              }`}
            >
              <Users size={20} />
              Trainers
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("bookings")}
              className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 ${
                activeTab === "bookings"
                  ? "bg-green-600/20 text-green-400"
                  : "text-gray-400 hover:bg-gray-700/50"
              }`}
            >
              <Calendar size={20} />
              Bookings
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("customers")}
              className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 ${
                activeTab === "customers"
                  ? "bg-green-600/20 text-green-400"
                  : "text-gray-400 hover:bg-gray-700/50"
              }`}
            >
              <Users size={20} />
              Customers
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("account")}
              className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 ${
                activeTab === "account"
                  ? "bg-green-600/20 text-green-400"
                  : "text-gray-400 hover:bg-gray-700/50"
              }`}
            >
              <Settings size={20} />
              Account
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
