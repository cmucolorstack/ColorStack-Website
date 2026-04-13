'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="w-full pl-0 pr-4 sm:pr-6 lg:pr-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/documents/colorstacklogo.png"
              alt="ColorStack CMU"
              width={450}
              height={450}
              className="rounded-lg"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link href="/events" className="text-xl font-semibold text-cmu-dark-gray hover:text-cmu-red transition-colors">
              Events
            </Link>
            <Link href="/sponsors" className="text-xl font-semibold text-cmu-dark-gray hover:text-cmu-red transition-colors">
              Sponsors
            </Link>
            <Link href="/meet-us" className="text-xl font-semibold text-cmu-dark-gray hover:text-cmu-red transition-colors">
              Meet Us
            </Link>
            <div className="relative group">
              <button
                className="text-xl font-semibold text-cmu-dark-gray hover:text-cmu-red transition-colors flex items-center gap-1"
                onClick={() => setAboutOpen(!aboutOpen)}
                onMouseEnter={() => setAboutOpen(true)}
              >
                About Us
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Dropdown */}
              <div
                className={`absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-lg border border-gray-100 py-2 transition-all ${aboutOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onMouseLeave={() => setAboutOpen(false)}
              >
                <Link href="/about" className="block px-4 py-2 text-sm text-cmu-dark-gray hover:bg-cmu-light-gray hover:text-cmu-red transition-colors">
                  About
                </Link>
                <Link href="/about#contact" className="block px-4 py-2 text-sm text-cmu-dark-gray hover:bg-cmu-light-gray hover:text-cmu-red transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-cmu-dark-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 mobile-menu-enter">
          <div className="px-4 py-4 space-y-3">
            <Link href="/events" className="block text-lg font-semibold text-cmu-dark-gray hover:text-cmu-red" onClick={() => setMobileOpen(false)}>
              Events
            </Link>
            <Link href="/sponsors" className="block text-lg font-semibold text-cmu-dark-gray hover:text-cmu-red" onClick={() => setMobileOpen(false)}>
              Sponsors
            </Link>
            <Link href="/meet-us" className="block text-lg font-semibold text-cmu-dark-gray hover:text-cmu-red" onClick={() => setMobileOpen(false)}>
              Meet Us
            </Link>
            <Link href="/about" className="block text-lg font-semibold text-cmu-dark-gray hover:text-cmu-red" onClick={() => setMobileOpen(false)}>
              About
            </Link>
            <Link href="/about#contact" className="block text-lg font-semibold text-cmu-dark-gray hover:text-cmu-red" onClick={() => setMobileOpen(false)}>
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
