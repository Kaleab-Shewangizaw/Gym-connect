"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Client {
  id: number;
  name: string;
  joinDate: string;
  sessionsCompleted: number;
  progress: "Excellent" | "Good" | "Very Good" | "Fair";
  avatar: string;
}

export default function Clients({ clients }: { clients: Client[] }) {
  return (
    <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
      <h2 className="text-xl font-bold mb-6">Client Management</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clients.map((client) => (
          <div key={client.id} className="bg-gray-700/30 rounded-xl p-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-600">
                <Image
                  src={client.avatar}
                  alt={client.name}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold">{client.name}</h3>
                <p className="text-sm text-gray-400">
                  Joined {client.joinDate}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                <div className="text-lg font-bold">
                  {client.sessionsCompleted}
                </div>
                <div className="text-xs text-gray-400">Sessions</div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                <div className="text-lg font-bold">{client.progress}</div>
                <div className="text-xs text-gray-400">Progress</div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                className="flex-1 bg-green-600 hover:bg-green-700"
              >
                View Profile
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-700"
              >
                Message
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
