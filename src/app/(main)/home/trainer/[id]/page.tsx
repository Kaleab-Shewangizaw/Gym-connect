"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Bell } from "lucide-react";
import Image from "next/image";
import TrainerSidebar from "./componenets/Sidebar";
import TrainerSettings from "./componenets/Settings";

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
    <div className=" text-white bg-gradient-to-b from-gray-900 to-gray-950 pt-16">
      <div className="flex">
        {/* Sidebar */}
        <TrainerSidebar setActiveTab={setActiveTab} activeTab={activeTab} />

        {/* Main Content */}
        <div className="flex-1 p-6 ">
          <div className="flex justify-end items-center mb-8">
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
          {activeTab === "Overview" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700"></div>
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

          {/* Clients Tab */}
          {activeTab === "Clients" && (
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
          {activeTab === "Settings" && (
            <TrainerSettings
              isEditing={isEditing}
              setIsEditing={setIsEditing}
              editedTrainer={editedTrainer}
              handleChange={handleChange}
              handleCancel={handleCancel}
              handleSave={handleSave}
            />
          )}
        </div>
      </div>
    </div>
  );
}
