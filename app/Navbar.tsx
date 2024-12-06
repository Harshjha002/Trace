'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaBug } from "react-icons/fa6";

const Navbar = () => {
    const pathname = usePathname()

  return (
    <nav className="flex  space-x-6 border-b mb-5 px-5 h-14 items-center justify-between">
      {/* Logo */}
      <Link href="/" className='flex gap-2 items-center '>
        <FaBug size={20} />
        <h1 className='font-black text-blue-400 text-[20px]'>Trace</h1>
      </Link>
        
        {/* navigation */}
      <ul className="flex space-x-6">
        <li>
          <Link
            href="/"
            className={`text-mist hover:text-yellow-500 hover:border-b-2 ${pathname==='/' ? "text-yellow-500 border-b-2" : null}`}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            href="/issues"
            className={`text-mist hover:text-yellow-500 hover:border-b-2 ${pathname==='/issues' ? "text-yellow-500 border-b-2" : null}`}
          >
            Issues
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
