import React, { useState } from "react";
import { UserModalProps } from "@/interfaces";

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
    onSubmit(user); // Pass user data back to the parent component
    onClose(); // Close the modal
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit}>
          {/* Add your input fields here */}
          <button type="submit" className="bg-blue-700 px-4 py-2 text-white rounded-full">
            Submit
          </button>
        </form>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-gray-200 rounded-full p-2"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default UserModal;
