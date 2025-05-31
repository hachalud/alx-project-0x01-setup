import React from "react";

interface PostCardProps {
  title: string;
  description: string;
  author?: string;
  date?: string;
}

const PostCard: React.FC<PostCardProps> = ({
  title,
  description,
  author,
  date,
}) => {
  return (
    <div className="border rounded-xl shadow-md p-4 max-w-md w-full bg-white">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 mb-3">{description}</p>
      <div className="text-sm text-gray-500">
        {author && <span>By {author}</span>}
        {author && date && <span> · </span>}
        {date && <span>{date}</span>}
      </div>
    </div>
  );
};

export default PostCard;
