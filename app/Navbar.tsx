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
    <nav className="flex items-center justify-between h-14 border-b mb-5 px-5">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <FaBug size={20} />
        <h1 className="font-black text-blue-400 text-[20px]">Trace</h1>
      </Link>

      {/* Navigation Links */}
      <ul className="flex space-x-6">
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`text-mist hover:text-yellow-500 hover:border-b-2 ${
                pathname === href ? 'text-yellow-500 border-b-2' : ''
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
