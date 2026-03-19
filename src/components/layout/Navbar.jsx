"use client";

import { useState } from "react";
import Link from "next/link";
import { routes } from "@/constants";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-secondary-500 text-text-500 border-b border-secondary-600/20 py-3 fixed top-0 left-0 w-screen z-100">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold">
          TaskFlow
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link href="/" className="link link_dark">
              Home
            </Link>
          </li>

          <li>
            <Link href="/features" className="link link_dark">
              Features
            </Link>
          </li>

          <li>
            <Link href="/pricing" className="link link_dark">
              Pricing
            </Link>
          </li>

          <li>
            <Link href={routes.auth.login} className="link link_dark">
              Login
            </Link>
          </li>

          <li>
            <Link
              href={routes.auth.register}
              className="w-full bg-[#d4c5a9] text-[#0f0e0c]
                font-black text-xs tracking-[0.25em] uppercase
                px-8 py-5
                hover:bg-[#e8dcc8]
                active:scale-[0.98]
                transition-all duration-150
                cursor-pointer
                rounded-none"
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
              <Link href={routes.auth.login}>Login</Link>
            </li>

            <li>
              <Link
                href={routes.auth.register}
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
