import { Button } from "@/components/ui/button";
import Image from "next/image";

type Booking = {
  id: string | number;
  clientName: string;
  service: string;
  date: string;
  time?: string;
  status: string;
  amount?: string | number;
};

type Gym = {
  image: string;
  name: string;
  location: string;
};

type OverviewTabProps = {
  bookingsData: Booking[];
  setActiveTab: (tab: string) => void;
  gym: Gym;
};

export default function OverviewTab({
  bookingsData,
  setActiveTab,
  gym,
}: OverviewTabProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
          <h2 className="text-xl font-bold mb-6">Business Overview</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-gray-700/50 rounded-lg p-4">
              <div className="text-2xl font-bold">24</div>
              <div className="text-sm text-gray-400">Today&apos;s Bookings</div>
            </div>
            <div className="bg-gray-700/50 rounded-lg p-4">
              <div className="text-2xl font-bold">156</div>
              <div className="text-sm text-gray-400">This Week</div>
            </div>
            <div className="bg-gray-700/50 rounded-lg p-4">
              <div className="text-2xl font-bold">$3,450</div>
              <div className="text-sm text-gray-400">Revenue</div>
            </div>
            <div className="bg-gray-700/50 rounded-lg p-4">
              <div className="text-2xl font-bold">92%</div>
              <div className="text-sm text-gray-400">Capacity</div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {bookingsData.slice(0, 3).map((booking) => (
                <div
                  key={booking.id}
                  className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg"
                >
                  <div>
                    <h4 className="font-medium">{booking.clientName}</h4>
                    <p className="text-sm text-gray-400">
                      {booking.service} - {booking.date}
                    </p>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      booking.status === "confirmed"
                        ? "bg-green-900/40 text-green-400"
                        : booking.status === "pending"
                        ? "bg-yellow-900/40 text-yellow-400"
                        : "bg-red-900/40 text-red-400"
                    }`}
                  >
                    {booking.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Gym Performance</h3>
            <div className="bg-gray-700/30 rounded-lg p-4 h-40 flex items-center justify-center">
              <p className="text-gray-400">
                Monthly revenue chart would be displayed here
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
          <h3 className="text-lg font-bold mb-4">My Gym</h3>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-lg overflow-hidden">
              <Image
                src={gym.image}
                alt={gym.name}
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="font-bold">{gym.name}</h4>
              <p className="text-sm text-gray-400">{gym.location}</p>
            </div>
          </div>
          <Button
            onClick={() => setActiveTab("mygym")}
            className="w-full bg-green-600 hover:bg-green-700"
          >
            Manage Gym
          </Button>
        </div>

        <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
          <h3 className="text-lg font-bold mb-4">Upcoming Bookings</h3>
          <div className="space-y-4">
            {bookingsData.slice(0, 3).map((booking) => (
              <div key={booking.id} className="bg-gray-700/30 rounded-lg p-3">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium">{booking.clientName}</h4>
                  <span className="text-green-400 font-bold">
                    {booking.amount}
                  </span>
                </div>
                <p className="text-sm text-gray-400">{booking.service}</p>
                <p className="text-sm text-gray-400">
                  {booking.date} at {booking.time}
                </p>
              </div>
            ))}
          </div>
          <Button
            onClick={() => setActiveTab("bookings")}
            className="w-full mt-4 bg-gray-700 hover:bg-gray-600"
          >
            View All Bookings
          </Button>
        </div>
      </div>
    </div>
  );
}
