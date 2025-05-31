import React from "react";

interface ButtonProps {
  title: string;
  styles?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, styles = "", onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-blue-600 text-white rounded-md ${styles}`}
    >
      {title}
    </button>
  );
};

export default Button;
