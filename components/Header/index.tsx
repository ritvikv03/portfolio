'use client';
import React, { FC, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '@/app/themecontext';
import { HeaderNavs } from "@/components/Header/constants";
import HeaderNav from "@/components/Navs/HeaderNav";

const Header: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`w-full flex justify-between items-center py-4 md:py-6 relative ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} px-4 sm:px-10`}>
      <div className="flex items-center justify-between w-full">
        <Link href={"/"}>
          <Image
            src={'/images/logo2.jpg'}
            width={105}
            height={105}
            alt={"Logo"}
            className={"rounded-full cursor-pointer bg-transparent"}
          />
        </Link>
        <button
          className="text-black dark:text-white md:hidden"
          onClick={toggleMobileMenu}
          aria-label="menu button"
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      <div className={`w-full md:flex md:items-center md:justify-end ${isMobileMenuOpen ? "block" : "hidden"} md:block`}>
        <nav role="navigation" className="flex flex-col md:flex-row gap-4 md:gap-24 items-center">
          {HeaderNavs.map((el, _i) => (
            <HeaderNav key={_i} value={el.value} id={el.id} href={el.href} />
          ))}
          <button
            className="text-black dark:text-white bg-gray-200 dark:bg-gray-800 p-2 rounded-full ml-4"
            onClick={toggleTheme}
            aria-label="theme toggle button"
          >
            {theme === "light" ? <FaMoon size={24} /> : <FaSun size={24} />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
