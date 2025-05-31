import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-blue-600">
        MyApp
      </Link>

      <nav className="space-x-4">
        <Link href="/" className="text-gray-700 hover:text-blue-500">
          Home
        </Link>
        <Link href="/about" className="text-gray-700 hover:text-blue-500">
          About
        </Link>
        <Link href="/contact" className="text-gray-700 hover:text-blue-500">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
