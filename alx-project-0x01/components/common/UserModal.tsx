import React, { useState } from "react";
import { UserProps, AddressProps, GeoProps, CompanyProps } from "@/interfaces";

interface UserModalProps {
  onClose: () => void;
  onSubmit: (user: Omit<UserProps, "id">) => void; // Exclude `id` as it's generated
}

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<Omit<UserProps, "id">>({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: { lat: "", lng: "" },
    },
    phone: "",
    website: "",
    company: { name: "", catchPhrase: "", bs: "" },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name.startsWith("address.geo.")) {
      const [_, __, field] = name.split(".");
      setUser((prevUser) => ({
        ...prevUser,
        address: {
          ...prevUser.address,
          geo: { ...prevUser.address.geo, [field]: value },
        },
      }));
    } else if (name.startsWith("address.")) {
      const [_, field] = name.split(".");
      setUser((prevUser) => ({
        ...prevUser,
        address: { ...prevUser.address, [field]: value },
      }));
    } else if (name.startsWith("company.")) {
      const [_, field] = name.split(".");
      setUser((prevUser) => ({
        ...prevUser,
        company: { ...prevUser.company, [field]: value },
      }));
    } else {
      setUser((prevUser) => ({ ...prevUser, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit}>
          {/* Basic Fields */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={user.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter username"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter email"
            />
          </div>

          {/* Address Fields */}
          <h3 className="text-lg font-semibold mb-2">Address</h3>
          <div className="mb-4">
            <label htmlFor="address.street" className="block text-gray-700 font-medium mb-2">
              Street
            </label>
            <input
              type="text"
              id="address.street"
              name="address.street"
              value={user.address.street}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter street"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address.city" className="block text-gray-700 font-medium mb-2">
              City
            </label>
            <input
              type="text"
              id="address.city"
              name="address.city"
              value={user.address.city}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter city"
            />
          </div>
          {/* Repeat for other address fields like suite, zipcode, geo.lat, geo.lng */}

          {/* Company Fields */}
          <h3 className="text-lg font-semibold mb-2">Company</h3>
          <div className="mb-4">
            <label htmlFor="company.name" className="block text-gray-700 font-medium mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="company.name"
              name="company.name"
              value={user.company.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter company name"
            />
          </div>
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
