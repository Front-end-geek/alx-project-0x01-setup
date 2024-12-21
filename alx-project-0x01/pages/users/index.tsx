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
        street: newUser.address?.street || "",
        suite: newUser.address?.suite || "",
        city: newUser.address?.city || "",
        zipcode: newUser.address?.zipcode || "",
        geo: {
          lat: newUser.address?.geo?.lat || "",
          lng: newUser.address?.geo?.lng || "",
        },
      },
      company: {
        name: newUser.company?.name || "",
        catchPhrase: newUser.company?.catchPhrase || "",
        bs: newUser.company?.bs || "",
      },
    };

    setUsers((prevUsers) => [...prevUsers, completeUser]);
  };

  return
