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
      address: newUser.address,
      company: newUser.company,
    };

    setUsers((prevUsers) => [...prevUsers, completeUser]);
  };

  return (
    <div>
      <Header />
      <button onClick={() => setModalOpen(true)}>Add User</button>
      {isModalOpen && (
        <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
      )}
    </div>
  );
};

export default Users;
