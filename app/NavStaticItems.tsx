'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavStaticItems = () => {
  const pathname = usePathname();
  const navLinks = [
    { href: '/', label: 'Dashboard' },
    { href: '/issues', label: 'Issues' },
  ];

  return (
    <ul className="flex space-x-4 items-center">
      {navLinks.map(({ href, label }) => (
        <li key={href} className="flex items-center">
          <Link
            href={href}
            className={`px-4 py-2 text-lg font-medium rounded-lg transition-all duration-300 ${
              pathname === href
                ? 'text-white bg-gradient-to-r from-[#B590CA] to-[#A8D3DA] shadow-md'
                : 'text-[#4A4A4A] hover:text-white hover:bg-gradient-to-r from-[#B590CA] to-[#F3ECB8]'
            }`}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavStaticItems;
