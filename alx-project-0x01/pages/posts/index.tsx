import React from "react";
import PostCard from "@/components/common/PostCard";

const PostsPage: React.FC = () => {
  const posts = [
    {
      title: "Introduction to React",
      description:
        "A quick overview of the React framework and how to get started.",
      author: "Hachalu Diriba",
      date: "May 30, 2025",
    },
    {
      title: "Next.js for Beginners",
      description: "Learn how to build server-rendered apps using Next.js.",
      author: "Jane Doe",
      date: "June 1, 2025",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">All Posts</h1>
      <div className="grid gap-6 max-w-4xl mx-auto">
        {posts.map((post, index) => (
          <PostCard
            key={index}
            title={post.title}
            description={post.description}
            author={post.author}
            date={post.date}
          />
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
