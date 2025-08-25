"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  Calendar,
  Dumbbell,
  User,
  Star,
  Clock,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

interface Notfications {
  id: string;
  gymName: string;
  news: string;
  date: string;
  status: "new" | "old";
}

interface Gym {
  id: string;
  name: string;
  location: string;
  nextSession: string;
}

interface Trainer {
  id: string;
  name: string;
  specialty: string;
  nextSession: string;
}

export default function MemberDashboard() {
  const params = useParams();
  const memberId = params.id as string;
  const [notfications, setNotfications] = useState<Notfications[]>([]);
  const [recentGyms, setRecentGyms] = useState<Gym[]>([]);
  const [myTrainer, setMyTrainer] = useState<Trainer | null>(null);
  const [stats, setStats] = useState({
    totalSessions: 0,
    activeGyms: 0,
    workoutsThisMonth: 0,
  });

  useEffect(() => {
    // Mock data - replace with actual API calls
    setNotfications([
      {
        id: "1",
        gymName: "Iron Paradise",
        news: "Pools are now available!",
        date: "2024-01-15",
        status: "new",
      },
      {
        id: "2",
        gymName: "Flex Fitness",
        news: "new trainer added",
        date: "2024-01-17",
        status: "old",
      },
    ]);

    setRecentGyms([
      {
        id: "2",
        name: "Flex Fitness",
        location: "Midtown",
        nextSession: "2024-01-17",
      },
    ]);

    setMyTrainer({
      id: "1",
      name: "Alex Johnson",
      specialty: "Strength Training",
      nextSession: "2024-01-15",
    });

    setStats({
      totalSessions: 12,
      activeGyms: 2,
      workoutsThisMonth: 4,
    });
  }, [memberId]);

  return (
    <div className=" mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-white mb-2">Welcome Back!</h1>
        <p className="text-gray-400">Here&apos;s your Dashboard</p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gray-800/50 rounded-xl p-6 border border-gray-700"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Sessions</p>
              <p className="text-2xl font-bold text-white">
                {stats.totalSessions}
              </p>
            </div>
            <div className="p-3 bg-green-500/10 rounded-lg">
              <Calendar className="w-6 h-6 text-green-400" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-800/50 rounded-xl p-6 border border-gray-700"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Active Gyms</p>
              <p className="text-2xl font-bold text-white">
                {stats.activeGyms}
              </p>
            </div>
            <div className="p-3 bg-blue-500/10 rounded-lg">
              <Dumbbell className="w-6 h-6 text-blue-400" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-800/50 rounded-xl p-6 border border-gray-700"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">This Month</p>
              <p className="text-2xl font-bold text-white">
                {stats.workoutsThisMonth}
              </p>
            </div>
            <div className="p-3 bg-purple-500/10 rounded-lg">
              <Clock className="w-6 h-6 text-purple-400" />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upcoming Sessions */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-800/50 rounded-xl p-6 border border-gray-700"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-white">Notfications</h2>
          </div>

          <div className="space-y-4">
            {notfications.map((notfication, index) => (
              <motion.div
                key={notfication.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg"
              >
                <div>
                  <p className="font-medium text-white">
                    {notfication.gymName}
                  </p>
                  <p className="text-sm text-gray-400">{notfication.news}</p>
                </div>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    notfication.status === "new"
                      ? "bg-green-500/20 text-green-400"
                      : notfication.status === "old"
                      ? "bg-gray-500/20 text-gray-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {notfication.status}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Gyms & Trainer */}
        <div className="space-y-6">
          {/* My Trainer */}
          {myTrainer && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-white">My Trainer</h2>
                <Link
                  href={`/home/member/${memberId}/my-trainer`}
                  className="text-green-400 hover:text-green-300 text-sm flex items-center gap-1"
                >
                  View <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="font-medium text-white">{myTrainer.name}</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Recent Gyms */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gray-800/50 rounded-xl p-6 border border-gray-700"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-white">My Gym</h2>
              <Link
                href={`/home/member/${memberId}/my-gyms`}
                className="text-green-400 hover:text-green-300 text-sm flex items-center gap-1"
              >
                View <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-3">
              {recentGyms.map((gym, index) => (
                <motion.div
                  key={gym.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg"
                >
                  <div>
                    <p className="font-medium text-white">{gym.name}</p>
                    <p className="text-sm text-gray-400">{gym.location}</p>
                  </div>
                  <button className="p-2 bg-gray-600/50 rounded-lg hover:bg-gray-600 transition-colors">
                    <Star className="w-4 h-4 text-yellow-400" />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
