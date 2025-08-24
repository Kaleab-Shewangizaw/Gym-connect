"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Edit3, Save, X, Bell, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { BsStarFill } from "react-icons/bs";
import OwnerSideBar from "../components/Sidebar";
import OverviewTab from "../components/OverviewTab";
import MyGymTab from "../components/MyGymTab";

// Mock data for the gym owner
const ownerData = {
  name: "Michael Johnson",
  email: "michael@ironparadise.com",
  phone: "+1 (555) 123-4567",
  image: "/owners/o1.jpg",
};

// Mock data for the gym
const gymData = {
  name: "Iron Paradise",
  image: "/Gym-images/g1.jpg",
  rating: 4.8,
  price: "15",
  desc: "State-of-the-art equipment with expert trainers. Perfect for strength training enthusiasts.",
  available: true,
  location: "Downtown",
  address: "123 Fitness Street, Downtown, CA 90210",
  equipment: [
    "Free Weights",
    "Cardio Machines",
    "Pool",
    "Sauna",
    "Yoga Studio",
  ],
  amenities: ["Wi-Fi", "Locker Rooms", "Showers", "Parking", "Protein Bar"],
  hours: {
    weekdays: "5:00 AM - 11:00 PM",
    weekends: "7:00 AM - 9:00 PM",
  },
  images: [
    "/Gym-images/g1.jpg",
    "/Gym-images/g2.jpg",
    "/Gym-images/g3.jpg",
    "/Gym-images/g4.jpg",
  ],
};

// Mock data for trainers
const trainersData = [
  {
    id: 1,
    name: "Alex Carter",
    rating: 4.8,
    image: "/trainers/t1.jpg",
    specialty: "Strength Training, HIIT, Nutrition",
    experience: "5 years",
    status: "active",
  },
  {
    id: 2,
    name: "Maya Lee",
    rating: 4.9,
    image: "/trainers/t2.jpg",
    specialty: "Yoga, Pilates, Meditation",
    experience: "7 years",
    status: "active",
  },
  {
    id: 3,
    name: "Jake Smith",
    rating: 4.7,
    image: "/trainers/t3.jpg",
    specialty: "Cardio, CrossFit, Endurance",
    experience: "4 years",
    status: "inactive",
  },
];

// Mock data for bookings
const bookingsData = [
  {
    id: 1,
    clientName: "Sarah Williams",
    date: "2023-11-15",
    time: "10:00 AM",
    service: "Gym Membership",
    status: "confirmed",
    amount: "$15",
  },
  {
    id: 2,
    clientName: "David Brown",
    date: "2023-11-16",
    time: "2:00 PM",
    service: "Personal Training",
    status: "pending",
    amount: "$75",
  },
  {
    id: 3,
    clientName: "Emily Davis",
    date: "2023-11-17",
    time: "4:30 PM",
    service: "Yoga Class",
    status: "confirmed",
    amount: "$20",
  },
  {
    id: 4,
    clientName: "James Wilson",
    date: "2023-11-18",
    time: "6:00 PM",
    service: "Gym Membership",
    status: "cancelled",
    amount: "$15",
  },
];

// Mock data for customers
const customersData = [
  {
    id: 1,
    name: "Sarah Williams",
    joinDate: "2023-05-10",
    membership: "Premium",
    visits: 24,
    avatar: "/clients/c1.jpg",
  },
  {
    id: 2,
    name: "David Brown",
    joinDate: "2023-07-22",
    membership: "Standard",
    visits: 16,
    avatar: "/clients/c2.jpg",
  },
  {
    id: 3,
    name: "Emily Davis",
    joinDate: "2023-09-05",
    membership: "Premium",
    visits: 8,
    avatar: "/clients/c3.jpg",
  },
  {
    id: 4,
    name: "James Wilson",
    joinDate: "2023-10-18",
    membership: "Basic",
    visits: 5,
    avatar: "/clients/c4.jpg",
  },
];

export default function GymOwnerDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isEditingGym, setIsEditingGym] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [owner, setOwner] = useState(ownerData);
  const [gym, setGym] = useState(gymData);
  const [editedOwner, setEditedOwner] = useState(ownerData);
  const [editedGym, setEditedGym] = useState(gymData);
  const [newImage, setNewImage] = useState("");

  const handleSaveGym = () => {
    setGym(editedGym);
    setIsEditingGym(false);
  };

  const handleCancelGym = () => {
    setEditedGym(gym);
    setIsEditingGym(false);
  };

  const handleSaveProfile = () => {
    setOwner(editedOwner);
    setIsEditingProfile(false);
  };

  const handleCancelProfile = () => {
    setEditedOwner(owner);
    setIsEditingProfile(false);
  };

  const handleGymChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedGym({ ...editedGym, [name]: value });
  };

  const handleOwnerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedOwner({ ...editedOwner, [name]: value });
  };

  const handleAddImage = () => {
    if (newImage) {
      setEditedGym({
        ...editedGym,
        images: [...editedGym.images, newImage],
      });
      setNewImage("");
    }
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = [...editedGym.images];
    updatedImages.splice(index, 1);
    setEditedGym({
      ...editedGym,
      images: updatedImages,
    });
  };

  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="flex">
        {/* Sidebar */}
        <OwnerSideBar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Main Content */}
        <div className="flex-1 p-6 ">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Gym Owner Dashboard</h1>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-full bg-gray-800 text-gray-400 hover:text-white">
                <Bell size={20} />
              </button>
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-green-500">
                <Image
                  src={owner.image}
                  alt={owner.name}
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Overview Tab */}
          {activeTab === "overview" && (
            <OverviewTab
              gym={gym}
              setActiveTab={setActiveTab}
              bookingsData={bookingsData}
            />
          )}

          {/* My Gym Tab */}
          {activeTab === "mygym" && (
            <MyGymTab
              isEditingGym={isEditingGym}
              handleCancelGym={handleCancelGym}
              handleSaveGym={handleSaveGym}
              setIsEditingGym={setIsEditingGym}
              editedGym={editedGym}
              newImage={newImage}
              setNewImage={setNewImage}
              handleRemoveImage={handleRemoveImage}
              handleAddImage={handleAddImage}
              gym={gym}
              setEditedGym={setEditedGym}
              handleGymChange={handleGymChange}
            />
          )}

          {/* Trainers Tab */}
          {activeTab === "trainers" && (
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Manage Trainers</h2>
                <Button className="bg-green-600 hover:bg-green-700 flex items-center gap-2">
                  <Plus size={16} /> Add Trainer
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {trainersData.map((trainer) => (
                  <div
                    key={trainer.id}
                    className="bg-gray-700/30 rounded-xl p-4"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={trainer.image}
                          alt={trainer.name}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold">{trainer.name}</h3>
                        <p className="text-sm text-gray-400">
                          {trainer.specialty}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        <BsStarFill className="text-yellow-400" />
                        <span>{trainer.rating}</span>
                      </div>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          trainer.status === "active"
                            ? "bg-green-900/40 text-green-400"
                            : "bg-gray-700 text-gray-400"
                        }`}
                      >
                        {trainer.status}
                      </span>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-400">
                        {trainer.experience} experience
                      </p>
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
                        Edit
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bookings Tab */}
          {activeTab === "bookings" && (
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h2 className="text-xl font-bold mb-6">Booking Management</h2>

              <div className="flex gap-2 mb-6">
                <Button className="bg-green-600 hover:bg-green-700">All</Button>
                <Button
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700"
                >
                  Confirmed
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700"
                >
                  Pending
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700"
                >
                  Cancelled
                </Button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 px-4">Client</th>
                      <th className="text-left py-3 px-4">Date & Time</th>
                      <th className="text-left py-3 px-4">Service</th>
                      <th className="text-left py-3 px-4">Amount</th>
                      <th className="text-left py-3 px-4">Status</th>
                      <th className="text-left py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookingsData.map((booking) => (
                      <tr
                        key={booking.id}
                        className="border-b border-gray-700/50"
                      >
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gray-700"></div>
                            <span>{booking.clientName}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          {booking.date} at {booking.time}
                        </td>
                        <td className="py-3 px-4">{booking.service}</td>
                        <td className="py-3 px-4 font-bold">
                          {booking.amount}
                        </td>
                        <td className="py-3 px-4">
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
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              className="bg-green-600 hover:bg-green-700"
                            >
                              Confirm
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-gray-600 text-gray-300 hover:bg-gray-700"
                            >
                              View
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Customers Tab */}
          {activeTab === "customers" && (
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h2 className="text-xl font-bold mb-6">Customer Management</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {customersData.map((customer) => (
                  <div
                    key={customer.id}
                    className="bg-gray-700/30 rounded-xl p-4"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden">
                        <Image
                          src={customer.avatar}
                          alt={customer.name}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold">{customer.name}</h3>
                        <p className="text-sm text-gray-400">
                          Joined {customer.joinDate}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                        <div className="text-lg font-bold">
                          {customer.visits}
                        </div>
                        <div className="text-xs text-gray-400">Visits</div>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                        <div className="text-lg font-bold">
                          {customer.membership}
                        </div>
                        <div className="text-xs text-gray-400">Plan</div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="flex-1 bg-green-600 hover:bg-green-700"
                      >
                        Profile
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
          )}

          {/* Account Tab */}
          {activeTab === "account" && (
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-xl font-bold">Account Settings</h2>
                {isEditingProfile ? (
                  <div className="flex gap-2">
                    <Button
                      onClick={handleCancelProfile}
                      className="bg-gray-700 hover:bg-gray-600"
                    >
                      <X size={16} className="mr-1" /> Cancel
                    </Button>
                    <Button
                      onClick={handleSaveProfile}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      <Save size={16} className="mr-1" /> Save Changes
                    </Button>
                  </div>
                ) : (
                  <Button
                    onClick={() => setIsEditingProfile(true)}
                    className="bg-green-600 hover:bg-green-700 flex items-center gap-2"
                  >
                    <Edit3 size={16} /> Edit Profile
                  </Button>
                )}
              </div>

              {isEditingProfile ? (
                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-green-500">
                        <Image
                          src={editedOwner.image}
                          alt={editedOwner.name}
                          width={96}
                          height={96}
                          className="object-cover"
                        />
                      </div>
                      <button className="absolute bottom-0 right-0 bg-green-600 text-white p-1.5 rounded-full">
                        <Edit3 size={14} />
                      </button>
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        name="name"
                        value={editedOwner.name}
                        onChange={handleOwnerChange}
                        className="bg-gray-700 text-white text-xl font-bold rounded-lg px-3 py-2 w-full mb-2"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-gray-400 text-sm">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={editedOwner.email}
                        onChange={handleOwnerChange}
                        className="bg-gray-700 text-white rounded-lg px-3 py-2 w-full"
                      />
                    </div>
                    <div>
                      <label className="text-gray-400 text-sm">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={editedOwner.phone}
                        onChange={handleOwnerChange}
                        className="bg-gray-700 text-white rounded-lg px-3 py-2 w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold mb-3">Change Password</h3>
                    <div className="space-y-3">
                      <input
                        type="password"
                        placeholder="Current Password"
                        className="bg-gray-700 text-white rounded-lg px-3 py-2 w-full"
                      />
                      <input
                        type="password"
                        placeholder="New Password"
                        className="bg-gray-700 text-white rounded-lg px-3 py-2 w-full"
                      />
                      <input
                        type="password"
                        placeholder="Confirm New Password"
                        className="bg-gray-700 text-white rounded-lg px-3 py-2 w-full"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-green-500">
                      <Image
                        src={owner.image}
                        alt={owner.name}
                        width={96}
                        height={96}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{owner.name}</h3>
                      <p className="text-gray-400">Gym Owner</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold mb-3">Contact Information</h4>
                      <div className="space-y-2">
                        <p className="text-gray-300">{owner.email}</p>
                        <p className="text-gray-300">{owner.phone}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold mb-3">Security</h4>
                      <Button className="bg-gray-700 hover:bg-gray-600">
                        Change Password
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold mb-3">Subscription</h4>
                    <div className="bg-gray-700/30 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-bold">Premium Business Plan</p>
                          <p className="text-gray-400">
                            Renews on Jan 15, 2024
                          </p>
                        </div>
                        <Button className="bg-green-600 hover:bg-green-700">
                          Manage Subscription
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
