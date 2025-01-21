'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useMediaQuery } from 'react-responsive';

export default function Header() {
  const router = useRouter();
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-black text-gray-100 sticky top-0 z-50">
      {/* NEUX Logo */}
      <div
        onClick={() => router.push('/')}
        className="text-3xl font-extrabold text-blue-400 cursor-pointer"
      >
        NEUX
      </div>

      {/* Navigation Links */}
      {isMobile ? (
        <div className="relative">
          {/* Menu Toggle Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-300 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg">
              <a
                href="/portfolio"
                className="block px-4 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-700 rounded-md transition-colors"
              >
                Portfolio
              </a>
              <a
                href="/about"
                className="block px-4 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-700 rounded-md transition-colors"
              >
                About
              </a>
              <a
                href="/docs"
                className="block px-4 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-700 rounded-md transition-colors"
              >
                Docs
              </a>
              <a
                href="/blogs"
                className="text-gray-300 font-semibold hover:text-blue-400 transition-colors"
              >
                Blogs
              </a>
              <a
                href="/contact"
                className="block px-4 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-700 rounded-md transition-colors"
              >
                Contact
              </a>
            </div>
          )}
        </div>
      ) : (
        <nav className="flex space-x-6">
          <a
            href="/portfolio"
            className="text-gray-300 font-semibold hover:text-blue-400 transition-colors"
          >
            Portfolio
          </a>
          <a
            href="/about"
            className="text-gray-300 font-semibold hover:text-blue-400 transition-colors"
          >
            About
          </a>
          <a
            href="/docs"
            className="text-gray-300 font-semibold hover:text-blue-400 transition-colors"
          >
            Docs
          </a>
          <a
            href="/blogs"
            className="text-gray-300 font-semibold hover:text-blue-400 transition-colors"
          >
            Blogs
          </a>
          <a
            href="/contact"
            className="text-gray-300 font-semibold hover:text-blue-400 transition-colors"
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}
