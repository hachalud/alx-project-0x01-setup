import React from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

const posts = [
  { id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890", website: "johndoe.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "234-567-8901", website: "janesmith.com" },
  { id: 3, name: "Ali Yusuf", email: "ali@example.com", phone: "345-678-9012", website: "aliyusuf.com" },
];

const Users: React.FC = () => {
  return (
    <div className="p-4">
      <Header />
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      {posts.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  return {
    props: {
      users,
    },
  };
}
export default Users;
