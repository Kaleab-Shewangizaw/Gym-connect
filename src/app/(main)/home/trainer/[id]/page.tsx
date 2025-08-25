"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Edit3,
  Save,
  X,
  User,
  Clock,
  DollarSign,
  MapPin,
  Bell,
  Settings,
  BarChart3,
  Users,
  CreditCard,
  LogOut,
} from "lucide-react";
import Image from "next/image";
import { BsStarFill } from "react-icons/bs";

// Mock data for the trainer
const trainerData = {
  name: "Kebedech Chane",
  age: 32,
  rating: 4.9,
  reviews: 147,
  image: "/trainers/t4.jpg",
  specialty: "Bodybuilding, Powerlifting, Flexibility",
  experience: "8 years",
  clients: 200,
  location: "Addis Ababa, Ethiopia",
  responseTime: "Within 2 hours",
  bio: "Certified personal trainer with 8 years of experience specializing in bodybuilding and powerlifting. My approach combines scientific training methods with personalized attention to help clients achieve their fitness goals.",
  status: "available", // available, busy, offline
  hourlyRate: 75,
  certifications: [
    "NASM Certified Personal Trainer",
    "ISSA Strength and Conditioning Coach",
    "Precision Nutrition Level 1",
  ],
  socialMedia: {
    instagram: "kebedech_fitness",
    facebook: "kebedech.fitness",
    twitter: "kebedech_fit",
  },
};

// Mock data for sessions
const upcomingSessions = [
  {
    id: 1,
    clientName: "Michael Johnson",
    date: "2023-11-15",
    time: "10:00 AM",
    duration: "60 mins",
    type: "One-on-One Training",
    status: "confirmed",
  },
  {
    id: 2,
    clientName: "Sarah Williams",
    date: "2023-11-16",
    time: "2:00 PM",
    duration: "45 mins",
    type: "Flexibility Program",
    status: "confirmed",
  },
  {
    id: 3,
    clientName: "David Brown",
    date: "2023-11-17",
    time: "4:30 PM",
    duration: "75 mins",
    type: "Powerlifting Coaching",
    status: "pending",
  },
];

// Mock data for clients
const clients = [
  {
    id: 1,
    name: "Michael Johnson",
    joinDate: "2023-05-10",
    sessionsCompleted: 24,
    progress: "Excellent",
    avatar: "/clients/c1.jpg",
  },
  {
    id: 2,
    name: "Sarah Williams",
    joinDate: "2023-07-22",
    sessionsCompleted: 16,
    progress: "Good",
    avatar: "/clients/c2.jpg",
  },
  {
    id: 3,
    name: "David Brown",
    joinDate: "2023-09-05",
    sessionsCompleted: 8,
    progress: "Very Good",
    avatar: "/clients/c3.jpg",
  },
  {
    id: 4,
    name: "Emily Davis",
    joinDate: "2023-10-18",
    sessionsCompleted: 5,
    progress: "Fair",
    avatar: "/clients/c4.jpg",
  },
];

export default function TrainerDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isEditing, setIsEditing] = useState(false);
  const [trainer, setTrainer] = useState(trainerData);
  const [editedTrainer, setEditedTrainer] = useState(trainerData);

  const handleSave = () => {
    setTrainer(editedTrainer);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedTrainer(trainer);
    setIsEditing(false);
  };

  interface Trainer {
    name: string;
    age: number;
    rating: number;
    reviews: number;
    image: string;
    specialty: string;
    experience: string;
    clients: number;
    location: string;
    responseTime: string;
    bio: string;
    status: "available" | "busy" | "offline";
    hourlyRate: number;
    certifications: string[];
    socialMedia: {
      instagram: string;
      facebook: string;
      twitter: string;
    };
  }

  interface Session {
    id: number;
    clientName: string;
    date: string;
    time: string;
    duration: string;
    type: string;
    status: "confirmed" | "pending";
  }

  interface Client {
    id: number;
    name: string;
    joinDate: string;
    sessionsCompleted: number;
    progress: "Excellent" | "Good" | "Very Good" | "Fair";
    avatar: string;
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setEditedTrainer({ ...editedTrainer, [name]: value });
  };

  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-gray-800/40 backdrop-blur-sm min-h-screen border-r border-gray-700">
          <div className="p-5 border-b border-gray-700">
            <h1 className="text-xl font-bold">Trainer Portal</h1>
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
                  onClick={() => setActiveTab("sessions")}
                  className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 ${
                    activeTab === "sessions"
                      ? "bg-green-600/20 text-green-400"
                      : "text-gray-400 hover:bg-gray-700/50"
                  }`}
                >
                  <Calendar size={20} />
                  Sessions
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("clients")}
                  className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 ${
                    activeTab === "clients"
                      ? "bg-green-600/20 text-green-400"
                      : "text-gray-400 hover:bg-gray-700/50"
                  }`}
                >
                  <Users size={20} />
                  Clients
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("availability")}
                  className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 ${
                    activeTab === "availability"
                      ? "bg-green-600/20 text-green-400"
                      : "text-gray-400 hover:bg-gray-700/50"
                  }`}
                >
                  <Clock size={20} />
                  Availability
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("earnings")}
                  className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 ${
                    activeTab === "earnings"
                      ? "bg-green-600/20 text-green-400"
                      : "text-gray-400 hover:bg-gray-700/50"
                  }`}
                >
                  <DollarSign size={20} />
                  Earnings
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("settings")}
                  className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 ${
                    activeTab === "settings"
                      ? "bg-green-600/20 text-green-400"
                      : "text-gray-400 hover:bg-gray-700/50"
                  }`}
                >
                  <Settings size={20} />
                  Settings
                </button>
              </li>
            </ul>
          </nav>
          <div className="absolute bottom-0 w-64 p-4 border-t border-gray-700">
            <button className="w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 text-gray-400 hover:bg-gray-700/50">
              <LogOut size={20} />
              Logout
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 mt-16">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Trainer Dashboard</h1>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-full bg-gray-800 text-gray-400 hover:text-white">
                <Bell size={20} />
              </button>
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-green-500">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <div className="flex justify-between items-start mb-6">
                    <h2 className="text-xl font-bold">Profile Overview</h2>
                    <Button
                      onClick={() => setIsEditing(true)}
                      className="bg-green-600 hover:bg-green-700 flex items-center gap-2"
                    >
                      <Edit3 size={16} /> Edit Profile
                    </Button>
                  </div>

                  {isEditing ? (
                    <div className="space-y-6">
                      <div className="flex items-center gap-6">
                        <div className="relative">
                          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-green-500">
                            <Image
                              src={editedTrainer.image}
                              alt={editedTrainer.name}
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
                            value={editedTrainer.name}
                            onChange={handleChange}
                            className="bg-gray-700 text-white text-xl font-bold rounded-lg px-3 py-2 w-full mb-2"
                          />
                          <input
                            type="text"
                            name="specialty"
                            value={editedTrainer.specialty}
                            onChange={handleChange}
                            className="bg-gray-700 text-green-400 rounded-lg px-3 py-1 w-full text-sm"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-gray-400 text-sm">Age</label>
                          <input
                            type="number"
                            name="age"
                            value={editedTrainer.age}
                            onChange={handleChange}
                            className="bg-gray-700 text-white rounded-lg px-3 py-2 w-full"
                          />
                        </div>
                        <div>
                          <label className="text-gray-400 text-sm">
                            Hourly Rate
                          </label>
                          <input
                            type="number"
                            name="hourlyRate"
                            value={editedTrainer.hourlyRate}
                            onChange={handleChange}
                            className="bg-gray-700 text-white rounded-lg px-3 py-2 w-full"
                          />
                        </div>
                        <div>
                          <label className="text-gray-400 text-sm">
                            Location
                          </label>
                          <input
                            type="text"
                            name="location"
                            value={editedTrainer.location}
                            onChange={handleChange}
                            className="bg-gray-700 text-white rounded-lg px-3 py-2 w-full"
                          />
                        </div>
                        <div>
                          <label className="text-gray-400 text-sm">
                            Status
                          </label>
                          <select
                            name="status"
                            value={editedTrainer.status}
                            onChange={handleChange}
                            className="bg-gray-700 text-white rounded-lg px-3 py-2 w-full"
                          >
                            <option value="available">Available</option>
                            <option value="busy">Busy</option>
                            <option value="offline">Offline</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="text-gray-400 text-sm">Bio</label>
                        <textarea
                          name="bio"
                          value={editedTrainer.bio}
                          onChange={handleChange}
                          rows={4}
                          className="bg-gray-700 text-white rounded-lg px-3 py-2 w-full"
                        />
                      </div>

                      <div className="flex justify-end gap-3">
                        <Button
                          onClick={handleCancel}
                          className="bg-gray-700 hover:bg-gray-600"
                        >
                          <X size={16} className="mr-1" /> Cancel
                        </Button>
                        <Button
                          onClick={handleSave}
                          className="bg-green-600 hover:bg-green-700"
                        >
                          <Save size={16} className="mr-1" /> Save Changes
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="flex items-center gap-6">
                        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-green-500">
                          <Image
                            src={trainer.image}
                            alt={trainer.name}
                            width={96}
                            height={96}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{trainer.name}</h3>
                          <p className="text-green-400">{trainer.specialty}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <div
                              className={`h-2 w-2 rounded-full ${
                                trainer.status === "available"
                                  ? "bg-green-500"
                                  : trainer.status === "busy"
                                  ? "bg-yellow-500"
                                  : "bg-red-500"
                              }`}
                            ></div>
                            <span className="text-sm capitalize">
                              {trainer.status}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-gray-700/50 rounded-lg p-4">
                          <div className="text-2xl font-bold">
                            {trainer.rating}
                          </div>
                          <div className="text-sm text-gray-400">Rating</div>
                        </div>
                        <div className="bg-gray-700/50 rounded-lg p-4">
                          <div className="text-2xl font-bold">
                            {trainer.clients}
                          </div>
                          <div className="text-sm text-gray-400">Clients</div>
                        </div>
                        <div className="bg-gray-700/50 rounded-lg p-4">
                          <div className="text-2xl font-bold">
                            {trainer.experience}
                          </div>
                          <div className="text-sm text-gray-400">
                            Experience
                          </div>
                        </div>
                        <div className="bg-gray-700/50 rounded-lg p-4">
                          <div className="text-2xl font-bold">
                            ${trainer.hourlyRate}
                          </div>
                          <div className="text-sm text-gray-400">
                            Hourly Rate
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold mb-2">About Me</h4>
                        <p className="text-gray-300">{trainer.bio}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold mb-2">
                          Certifications
                        </h4>
                        <ul className="space-y-2">
                          {trainer.certifications.map((cert, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-2 text-gray-300"
                            >
                              <div className="text-green-400 mt-1">•</div>
                              <span>{cert}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <h3 className="text-lg font-bold mb-4">Upcoming Sessions</h3>
                  <div className="space-y-4">
                    {upcomingSessions.slice(0, 3).map((session) => (
                      <div
                        key={session.id}
                        className="bg-gray-700/30 rounded-lg p-3"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium">
                              {session.clientName}
                            </h4>
                            <p className="text-sm text-gray-400">
                              {session.type}
                            </p>
                          </div>
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              session.status === "confirmed"
                                ? "bg-green-900/40 text-green-400"
                                : "bg-yellow-900/40 text-yellow-400"
                            }`}
                          >
                            {session.status}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400 mt-2">
                          <Calendar size={14} />
                          <span>
                            {session.date} at {session.time}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Clock size={14} />
                          <span>{session.duration}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4 bg-gray-700 hover:bg-gray-600">
                    View All Sessions
                  </Button>
                </div>

                <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                  <h3 className="text-lg font-bold mb-4">Recent Clients</h3>
                  <div className="space-y-4">
                    {clients.slice(0, 3).map((client) => (
                      <div key={client.id} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-700">
                          <Image
                            src={client.avatar}
                            alt={client.name}
                            width={40}
                            height={40}
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">{client.name}</h4>
                          <p className="text-xs text-gray-400">
                            {client.sessionsCompleted} sessions
                          </p>
                        </div>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            client.progress === "Excellent"
                              ? "bg-green-900/40 text-green-400"
                              : client.progress === "Good"
                              ? "bg-blue-900/40 text-blue-400"
                              : "bg-yellow-900/40 text-yellow-400"
                          }`}
                        >
                          {client.progress}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4 bg-gray-700 hover:bg-gray-600">
                    View All Clients
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Sessions Tab */}
          {activeTab === "sessions" && (
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h2 className="text-xl font-bold mb-6">Session Management</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 px-4">Client</th>
                      <th className="text-left py-3 px-4">Date & Time</th>
                      <th className="text-left py-3 px-4">Type</th>
                      <th className="text-left py-3 px-4">Duration</th>
                      <th className="text-left py-3 px-4">Status</th>
                      <th className="text-left py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {upcomingSessions.map((session) => (
                      <tr
                        key={session.id}
                        className="border-b border-gray-700/50"
                      >
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gray-700"></div>
                            <span>{session.clientName}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          {session.date} at {session.time}
                        </td>
                        <td className="py-3 px-4">{session.type}</td>
                        <td className="py-3 px-4">{session.duration}</td>
                        <td className="py-3 px-4">
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              session.status === "confirmed"
                                ? "bg-green-900/40 text-green-400"
                                : "bg-yellow-900/40 text-yellow-400"
                            }`}
                          >
                            {session.status}
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
                              Reschedule
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

          {/* Clients Tab */}
          {activeTab === "clients" && (
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h2 className="text-xl font-bold mb-6">Client Management</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {clients.map((client) => (
                  <div
                    key={client.id}
                    className="bg-gray-700/30 rounded-xl p-4"
                  >
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
                        <div className="text-lg font-bold">
                          {client.progress}
                        </div>
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
          )}

          {/* Other tabs would be implemented similarly */}
          {(activeTab === "availability" ||
            activeTab === "earnings" ||
            activeTab === "settings") && (
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h2 className="text-xl font-bold mb-6">
                {activeTab === "availability" && "Availability Settings"}
                {activeTab === "earnings" && "Earnings Overview"}
                {activeTab === "settings" && "Account Settings"}
              </h2>
              <div className="text-center py-10 text-gray-400">
                <div className="text-5xl mb-4">⚙️</div>
                <p>
                  {activeTab === "availability" &&
                    "Set your working hours and availability"}
                  {activeTab === "earnings" &&
                    "View your earnings and financial reports"}
                  {activeTab === "settings" &&
                    "Manage your account settings and preferences"}
                </p>
                <Button className="mt-4 bg-green-600 hover:bg-green-700">
                  Configure{" "}
                  {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
