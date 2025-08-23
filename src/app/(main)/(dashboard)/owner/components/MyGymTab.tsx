import { Button } from "@/components/ui/button";
import { Edit3, Plus, Save, Trash2 } from "lucide-react";
import Image from "next/image";

export default function MyGymTab({
  isEditingGym,
  handleCancelGym,
  handleSaveGym,
  setIsEditingGym,
  editedGym,
  newImage,
  setNewImage,
  handleRemoveImage,
  handleAddImage,
  gym,
  setEditedGym,
  handleGymChange,
}) {
  return (
    <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-xl font-bold">Manage My Gym</h2>
        {isEditingGym ? (
          <div className="flex gap-2">
            <Button
              onClick={handleCancelGym}
              className="bg-gray-700 hover:bg-gray-600"
            >
              <X size={16} className="mr-1" /> Cancel
            </Button>
            <Button
              onClick={handleSaveGym}
              className="bg-green-600 hover:bg-green-700"
            >
              <Save size={16} className="mr-1" /> Save Changes
            </Button>
          </div>
        ) : (
          <Button
            onClick={() => setIsEditingGym(true)}
            className="bg-green-600 hover:bg-green-700 flex items-center gap-2"
          >
            <Edit3 size={16} /> Edit Gym
          </Button>
        )}
      </div>

      {isEditingGym ? (
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <div className="relative mb-4">
                <div className="w-full h-48 rounded-lg overflow-hidden">
                  <Image
                    src={editedGym.image}
                    alt={editedGym.name}
                    width={192}
                    height={192}
                    className="object-cover w-full h-full"
                  />
                </div>
                <button className="absolute bottom-2 right-2 bg-green-600 text-white p-1.5 rounded-full">
                  <Edit3 size={14} />
                </button>
              </div>

              <div className="mb-4">
                <label className="text-gray-400 text-sm">Main Image URL</label>
                <input
                  type="text"
                  name="image"
                  value={editedGym.image}
                  onChange={handleGymChange}
                  className="bg-gray-700 text-white rounded-lg px-3 py-2 w-full"
                />
              </div>
            </div>

            <div className="md:w-2/3">
              <div className="mb-4">
                <label className="text-gray-400 text-sm">Gym Name</label>
                <input
                  type="text"
                  name="name"
                  value={editedGym.name}
                  onChange={handleGymChange}
                  className="bg-gray-700 text-white rounded-lg px-3 py-2 w-full text-xl font-bold"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-gray-400 text-sm">Price ($/mo)</label>
                  <input
                    type="text"
                    name="price"
                    value={editedGym.price}
                    onChange={handleGymChange}
                    className="bg-gray-700 text-white rounded-lg px-3 py-2 w-full"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={editedGym.location}
                    onChange={handleGymChange}
                    className="bg-gray-700 text-white rounded-lg px-3 py-2 w-full"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="text-gray-400 text-sm">Address</label>
                <input
                  type="text"
                  name="address"
                  value={editedGym.address}
                  onChange={handleGymChange}
                  className="bg-gray-700 text-white rounded-lg px-3 py-2 w-full"
                />
              </div>

              <div className="mb-4">
                <label className="text-gray-400 text-sm">Description</label>
                <textarea
                  name="desc"
                  value={editedGym.desc}
                  onChange={handleGymChange}
                  rows={3}
                  className="bg-gray-700 text-white rounded-lg px-3 py-2 w-full"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold mb-3">Operating Hours</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-gray-400 text-sm">Weekdays</label>
                  <input
                    type="text"
                    name="weekdays"
                    value={editedGym.hours.weekdays}
                    onChange={(e) =>
                      setEditedGym({
                        ...editedGym,
                        hours: {
                          ...editedGym.hours,
                          weekdays: e.target.value,
                        },
                      })
                    }
                    className="bg-gray-700 text-white rounded-lg px-3 py-2 w-full"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm">Weekends</label>
                  <input
                    type="text"
                    name="weekends"
                    value={editedGym.hours.weekends}
                    onChange={(e) =>
                      setEditedGym({
                        ...editedGym,
                        hours: {
                          ...editedGym.hours,
                          weekends: e.target.value,
                        },
                      })
                    }
                    className="bg-gray-700 text-white rounded-lg px-3 py-2 w-full"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3">Gym Images</h3>
              <div className="grid grid-cols-2 gap-2 mb-3">
                {editedGym.images.map((img, index) => (
                  <div key={index} className="relative">
                    <div className="h-24 rounded-lg overflow-hidden">
                      <Image
                        src={img}
                        alt={`Gym image ${index + 1}`}
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <button
                      onClick={() => handleRemoveImage(index)}
                      className="absolute top-1 right-1 bg-red-600 text-white p-1 rounded-full"
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Add image URL"
                  value={newImage}
                  onChange={(e) => setNewImage(e.target.value)}
                  className="bg-gray-700 text-white rounded-lg px-3 py-2 flex-1"
                />
                <Button
                  onClick={handleAddImage}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Plus size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <div className="w-full h-48 rounded-lg overflow-hidden">
                <Image
                  src={gym.image}
                  alt={gym.name}
                  width={192}
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="md:w-2/3">
              <h3 className="text-xl font-bold">{gym.name}</h3>
              <p className="text-green-400">${gym.price}/month</p>
              <p className="text-gray-400 mt-2">{gym.location}</p>
              <p className="text-gray-400">{gym.address}</p>

              <div className="mt-4">
                <h4 className="font-bold mb-2">Description</h4>
                <p className="text-gray-300">{gym.desc}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold mb-3">Operating Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Weekdays</span>
                  <span>{gym.hours.weekdays}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Weekends</span>
                  <span>{gym.hours.weekends}</span>
                </div>
              </div>

              <h3 className="text-lg font-bold mt-6 mb-3">Equipment</h3>
              <div className="flex flex-wrap gap-2">
                {gym.equipment.map((item, index) => (
                  <span
                    key={index}
                    className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3">Amenities</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {gym.amenities.map((item, index) => (
                  <span
                    key={index}
                    className="bg-blue-900/40 text-blue-200 text-sm px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <h3 className="text-lg font-bold mb-3">Gallery</h3>
              <div className="grid grid-cols-2 gap-2">
                {gym.images.map((img, index) => (
                  <div key={index} className="h-24 rounded-lg overflow-hidden">
                    <Image
                      src={img}
                      alt={`Gym image ${index + 1}`}
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
