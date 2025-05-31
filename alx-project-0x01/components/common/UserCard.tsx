// Create a new functional component
import React from 'react';

type UserProps = {
  name: string;
  email: string;
  phone: string;
  website: string;
};

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
