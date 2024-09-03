'use client'
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTheme } from '@/app/themecontext';
import Link from "next/link";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={`flex flex-col sm:flex-row justify-between items-center p-4 w-full ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} px-4 sm:px-10`}>
      <div className="mb-4 sm:mb-0">
        &copy; {new Date().getFullYear()} Naresh Vasikarla
      </div>
      <div className="flex space-x-4">
        <Link href="https://github.com/iamtechsavvy" target="_blank" rel="noopener noreferrer" aria-label={"github"}>
          <FaGithub size={24} />
        </Link>
        <Link href="https://linkedin.com/in/nareshvasikarla" target="_blank" rel="noopener noreferrer" aria-label={"linkedin"}>
          <FaLinkedin size={24} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
