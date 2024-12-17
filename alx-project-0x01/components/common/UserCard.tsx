// components/common/UserCard.tsx
import React from "react";
import { UserProps } from "../../interfaces";

interface UserCardProps {
  user: UserProps;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
        <p className="text-gray-500">{user.username}</p>
      </div>
      <p className="text-gray-600">
        <strong>Email:</strong> {user.email}
      </p>
      <p className="text-gray-600">
        <strong>Phone:</strong> {user.phone}
      </p>
      <p className="text-gray-600">
        <strong>Website:</strong>{" "}
        <a
          href={`https://${user.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {user.website}
        </a>
      </p>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">Address</h3>
        <p className="text-gray-600">
          {user.address.street}, {user.address.suite}, {user.address.city},{" "}
          {user.address.zipcode}
        </p>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">Company</h3>
        <p className="text-gray-600">
          <strong>Name:</strong> {user.company.name}
        </p>
        
      </div>
    </div>
  );
};

export default UserCard;
