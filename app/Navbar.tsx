'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaBug } from "react-icons/fa6";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Dashboard' },
    { href: '/issues', label: 'Issues' },
  ];

  return (
    <nav className="flex items-center justify-between h-16 border-b-2 border-[#B590CA] bg-gradient-to-b from-[#A8D3DA] to-[#F3ECB8] px-6 shadow-md">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 text-[#4A4A4A] hover:text-[#B590CA] transition-colors duration-200">
        <FaBug size={24} />
        <h1 className="font-black text-[22px]">Trace</h1>
      </Link>

      {/* Navigation Links */}
      <ul className="flex space-x-6">
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`px-3 py-1 text-lg font-medium text-[#4A4A4A] rounded-md transition-all duration-200 ${
                pathname === href
                  ? 'text-[#B590CA] bg-[#F5CAB3]'
                  : 'hover:text-[#B590CA] hover:bg-[#F5CAB3]'
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
