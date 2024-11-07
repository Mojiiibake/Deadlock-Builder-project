'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className={`fixed top-4 z-50 text-custom-beige transition-all duration-300 left-4`}
        onClick={toggleSidebar}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <nav className={`bg-gray-800 h-full w-1/5 max-w-60 min-w-36 fixed left-0 top-0 p-4 z-40 transition-transform duration-300 ease-in-out transform 
        ${isOpen ? 'translate-x-100' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <Link href="/" className="text-custom-beige text-2xl font-bold mb-8 mt-6">
            Deadlock Calculator
          </Link>
          <ul className="flex flex-col space-y-4 flex-grow">
            <li>
              <Link href="/" className="text-custom-beige hover:text-gray-300 block">
                Home
              </Link>
            </li>
            <li>
              <Link href="/items" className="text-custom-beige hover:text-gray-300 block">
                Items
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;