import UserModal from "@/components/common/UserModal";
import Header from "@/components/layout/Header";
import { UserProps, UserData } from "@/interfaces";
import { useState } from "react";

const Users: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [users, setUsers] = useState<UserData[]>([]);

  const handleAddUser = (newUser: Omit<UserProps, "id">) => {
    const completeUser: UserData = {
      ...newUser,
      id: users.length + 1, // Generate unique ID
      address: {
        ...newUser.address,
        geo: {
          ...newUser.address.geo,
        },
      },
      company: {
        ...newUser.company,
      },
    };

    setUsers((prevUsers) => [...prevUsers, completeUser]);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Users</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
          >
            Add User
          </button>
        </div>
        <ul className="mt-4">
          {users.map((user) => (
            <li key={user.id} className="border-b p-2">
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      </main>

      {isModalOpen && (
        <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
      )}
    </div>
  );
};

export default Users;
