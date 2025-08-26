"use client";

import { useState } from "react";
import { Bell } from "lucide-react";

import TrainerSidebar from "./componenets/Sidebar";
import TrainerSettings from "./componenets/Settings";
import Clients from "./componenets/Clients";
import Profile from "./componenets/Profile";

// Mock data for the trainer
const trainerData = {
  name: "Kebedech Chane",
  age: 32,
  email: "some",
  phone: "123",
  rating: 4.9,
  reviews: 147,
  image: "/trainers/t4.jpg",
  specialty: "Bodybuilding, Powerlifting, Flexibility",
  experience: "8 years",
  clients: 200,
  location: "Addis Ababa, Ethiopia",
  responseTime: "Within 2 hours",
  bio: "Certified personal trainer with 8 years of experience specializing in bodybuilding and powerlifting. My approach combines scientific training methods with personalized attention to help clients achieve their fitness goals.",
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
  const [activeTab, setActiveTab] = useState("Profile");
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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setEditedTrainer({ ...editedTrainer, [name]: value });
  };

  return (
    <div className=" mx-auto">
      <div className="h-full text-white bg-gradient-to-b from-gray-900 to-gray-950 pt-16">
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
              </div>
            </div>

            {activeTab === "Profile" && <Profile trainer={trainer} />}

            {/* Sessions Tab */}

            {/* Clients Tab */}
            {activeTab === "Clients" && <Clients clients={clients} />}

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
    </div>
  );
}
