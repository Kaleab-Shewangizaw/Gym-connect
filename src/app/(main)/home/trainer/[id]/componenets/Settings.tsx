import { Button } from "@/components/ui/button";
import { Edit3, Save, X } from "lucide-react";
import Image from "next/image";

export default function TrainerSettings({
  isEditing,
  setIsEditing,
  editedTrainer,
  handleChange,
  handleCancel,
  handleSave,
}) {
  return (
    <>
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-xl font-bold">Profile Overview</h2>
        <Button
          onClick={() => setIsEditing(true)}
          className="bg-green-600 hover:bg-green-700 flex items-center gap-2"
        >
          <Edit3 size={16} /> Edit Profile
        </Button>
      </div>

      {isEditing && (
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
              <label className="text-gray-400 text-sm">Hourly Rate</label>
              <input
                type="number"
                name="hourlyRate"
                value={editedTrainer.hourlyRate}
                onChange={handleChange}
                className="bg-gray-700 text-white rounded-lg px-3 py-2 w-full"
              />
            </div>
            <div>
              <label className="text-gray-400 text-sm">Location</label>
              <input
                type="text"
                name="location"
                value={editedTrainer.location}
                onChange={handleChange}
                className="bg-gray-700 text-white rounded-lg px-3 py-2 w-full"
              />
            </div>
            <div>
              <label className="text-gray-400 text-sm">Status</label>
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
      )}
    </>
  );
}
