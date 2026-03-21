"use client";

import { useState } from "react";
import Link from "next/link";
import { routes } from "@/constants";

const user = { name: "Ada Lovelace", username: "ada_lovelace", initials: "AL" };


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isLoggedIn = true;

  if (isLoggedIn) {
    return (
      <header className="sticky top-0 z-50 bg-primary-500/90 backdrop-blur-sm border-b border-text-500/8">
        <div className="flex items-center justify-between px-6 md:px-10 py-4 gap-6">
          {/* Logo + nav */}
          <div className="flex items-center gap-10">
            <Link href="/" aria-label="TaskFlow home">
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-text-500/40 hover:text-text-500 transition-colors">
                TaskFlow
              </span>
            </Link>
            <nav
              className="hidden md:flex items-center gap-7"
              aria-label="Primary navigation"
            >
              {[
                { label: "For You", href: "/dashboard", active: true },
                { label: "Projects", href: "/projects", active: false },
                { label: "My Tasks", href: "/tasks", active: false },
                { label: "Team", href: "/team", active: false },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`font-mono text-[0.65rem] tracking-[0.2em] uppercase transition-colors ${
                    item.active
                      ? "text-text-500 border-b border-text-500 pb-0.5"
                      : "text-text-500/35 hover:text-text-500/70"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <button
              aria-label="Search"
              className="hidden sm:flex items-center gap-3 bg-secondary-500 border border-text-500/10 px-4 py-2 text-text-500/30 hover:border-text-500/25 hover:text-text-500/50 transition-all"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden
              >
                <circle
                  cx="5"
                  cy="5"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <line
                  x1="8.5"
                  y1="8.5"
                  x2="11"
                  y2="11"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="square"
                />
              </svg>
              <span className="font-mono text-[0.6rem] tracking-widest uppercase hidden md:block">
                Search
              </span>
              <kbd className="hidden lg:block font-mono text-[0.5rem] border border-text-500/15 px-1.5 py-0.5 text-text-500/20">
                ⌘K
              </kbd>
            </button>

            {/* Notifications */}
            <button
              aria-label="Notifications"
              className="relative w-8 h-8 flex items-center justify-center border border-text-500/10 hover:border-text-500/30 text-text-500/35 hover:text-text-500/60 transition-all"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden
              >
                <path
                  d="M7 1.5C4.79 1.5 3 3.29 3 5.5V9L1.5 10.5h11L11 9V5.5C11 3.29 9.21 1.5 7 1.5Z"
                  stroke="currentColor"
                  strokeWidth="1.1"
                />
                <path
                  d="M5.5 10.5C5.5 11.33 6.17 12 7 12C7.83 12 8.5 11.33 8.5 10.5"
                  stroke="currentColor"
                  strokeWidth="1.1"
                />
              </svg>
              {/* Unread dot */}
              <span
                className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-text-500 rounded-full"
                aria-label="Unread notifications"
              />
            </button>

            {/* Avatar */}
            <button
              aria-label="User menu"
              className="flex items-center gap-3 border border-text-500/10 hover:border-text-500/30 pl-1 pr-4 py-1 transition-all group"
            >
              <span className="w-7 h-7 rounded-full bg-secondary-500 border border-text-500/20 font-mono text-[0.6rem] tracking-wider uppercase text-text-500/60 flex items-center justify-center">
                {user.initials}
              </span>
              <span className="hidden md:block font-mono text-[0.6rem] tracking-widest uppercase text-text-500/40 group-hover:text-text-500/60 transition-colors">
                {user.username}
              </span>
            </button>
          </div>
        </div>
      </header>
    );
  }

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
