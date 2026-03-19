"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold">
          TaskFlow
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>

          <li>
            <Link href="/features" className="hover:text-blue-600">
              Features
            </Link>
          </li>

          <li>
            <Link href="/pricing" className="hover:text-blue-600">
              Pricing
            </Link>
          </li>

          <li>
            <Link href="/login" className="hover:text-blue-600">
              Login
            </Link>
          </li>

          <li>
            <Link
              href="/signup"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Get Started
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t">
          <ul className="flex flex-col px-6 py-4 gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/features">Features</Link>
            </li>

            <li>
              <Link href="/pricing">Pricing</Link>
            </li>

            <li>
              <Link href="/login">Login</Link>
            </li>

            <li>
              <Link
                href="/signup"
                className="bg-blue-600 text-white px-4 py-2 rounded-md w-fit"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
