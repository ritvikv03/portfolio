// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-center">
        <ul className="flex space-x-8">
          <li>
            <Link href="/about">
            <span className="hover:text-gray-400">About Me</span>
            </Link>
          </li>
          <li>
            <Link href="/projects">
            <span className="hover:text-gray-400">Projects</span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
            <span className="hover:text-gray-400">Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;