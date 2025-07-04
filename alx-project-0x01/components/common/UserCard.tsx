// Create a new functional component
import React from 'react';
import { UserProps } from "@/interfaces/UserProps";
const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="user-card">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
    </div>
  );
};

export default UserCard;
