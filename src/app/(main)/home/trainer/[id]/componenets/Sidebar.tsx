import { BarChart3, Dumbbell, Settings, Users } from "lucide-react";

const barItems = ["Profile", "Clients", "Gyms", "Settings"];

export default function TrainerSidebar({ setActiveTab, activeTab }) {
  return (
    <div className="w-64 bg-gray-800/40 backdrop-blur-sm min-h-screen border-r border-gray-700 pt-16 hidden md:block">
      <nav className="p-4">
        <ul className="space-y-2">
          {barItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => setActiveTab(item)}
                className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 ${
                  activeTab === item
                    ? "bg-green-600/20 text-green-400"
                    : "text-gray-400 hover:bg-gray-700/50"
                }`}
              >
                {item === "Profile" ? (
                  <BarChart3 size={20} />
                ) : item === "Clients" ? (
                  <Users size={20} />
                ) : item === "Gyms" ? (
                  <Dumbbell size={20} />
                ) : (
                  <Settings size={20} />
                )}
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
