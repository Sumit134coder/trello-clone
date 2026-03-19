import React from "react";
import Link from "next/link";

const Register = () => {
  return (
    <div className="min-h-screen bg-primary-500 text-text-500 flex">
      {/* ── LEFT PANEL — Branding ── */}
      <aside className="hidden lg:flex flex-col justify-between w-1/2 bg-secondary-500 px-16 py-14 border-r border-text-500/8">
        {/* Logo */}
        <Link href="/" aria-label="TaskFlow home">
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-text-500/40 hover:text-text-500 transition-colors">
            TaskFlow
          </span>
        </Link>

        {/* Giant headline */}
        <div>
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-text-500/30 mb-8">
            Join for free
          </p>
          <h1 className="font-black uppercase leading-[0.85] tracking-tight text-[clamp(4.5rem,8.5vw,8.5rem)] text-text-500">
            Build.
            <br />
            Track.
            <br />
            <span className="text-text-500/20">Ship.</span>
          </h1>
        </div>

        {/* Steps preview */}
        <div className="border-t border-text-500/10 pt-8 flex flex-col gap-5">
          <p className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-text-500/30 mb-1">
            You&apos;re 3 steps away
          </p>
          {[
            { n: "01", label: "Create your account" },
            { n: "02", label: "Set up your first board" },
            { n: "03", label: "Invite your team" },
          ].map((s) => (
            <div key={s.n} className="flex items-center gap-4">
              <span className="font-mono text-xs text-text-500/20">{s.n}</span>
              <span className="text-sm text-text-500/40 font-light">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </aside>

      {/* ── RIGHT PANEL — Form ── */}
      <main className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-14">
        {/* Mobile logo */}
        <Link
          href="/"
          className="lg:hidden mb-12 font-mono text-xs tracking-[0.3em] uppercase text-text-500/40 hover:text-text-500 transition-colors self-start"
          aria-label="TaskFlow home"
        >
          TaskFlow
        </Link>

        <div className="w-full max-w-md mx-auto lg:mx-0">
          {/* Page heading */}
          <header className="mb-12">
            <h2 className="text-[clamp(2.8rem,6vw,4.5rem)] font-black uppercase leading-none tracking-tight text-text-500 mb-3">
              Get Started
            </h2>
            <p className="text-text-500/40 text-sm font-light">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-text-500 underline underline-offset-4 decoration-text-500/30 hover:decoration-text-500 transition-all"
              >
                Sign in instead
              </Link>
            </p>
          </header>

          {/* ── SIGNUP FORM ── */}
          <form
            method="POST"
            action="/api/auth/register"
            noValidate
            aria-label="Create account form"
            className="flex flex-col gap-6"
          >
            {/* Full name row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="firstName"
                  className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-text-500/40"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  required
                  placeholder="Ada"
                  className="
                    w-full bg-secondary-500 border border-text-500/12
                    text-text-500 placeholder:text-text-500/20
                    px-4 py-4 text-sm font-light rounded-none
                    outline-none
                    focus:border-text-500/50 focus:bg-secondary-500/80
                    hover:border-text-500/22
                    transition-all duration-200
                  "
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="lastName"
                  className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-text-500/40"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  required
                  placeholder="Lovelace"
                  className="
                    w-full bg-secondary-500 border border-text-500/12
                    text-text-500 placeholder:text-text-500/20
                    px-4 py-4 text-sm font-light rounded-none
                    outline-none
                    focus:border-text-500/50 focus:bg-secondary-500/80
                    hover:border-text-500/22
                    transition-all duration-200
                  "
                />
              </div>
            </div>

            {/* Username */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="username"
                className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-text-500/40"
              >
                Username
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-sm text-text-500/25 select-none pointer-events-none">
                  @
                </span>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  placeholder="ada_lovelace"
                  className="
                    w-full bg-secondary-500 border border-text-500/12
                    text-text-500 placeholder:text-text-500/20
                    pl-8 pr-4 py-4 text-sm font-light rounded-none
                    outline-none
                    focus:border-text-500/50 focus:bg-secondary-500/80
                    hover:border-text-500/22
                    transition-all duration-200
                  "
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-text-500/40"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="ada@example.com"
                className="
                  w-full bg-secondary-500 border border-text-500/12
                  text-text-500 placeholder:text-text-500/20
                  px-5 py-4 text-sm font-light rounded-none
                  outline-none
                  focus:border-text-500/50 focus:bg-secondary-500/80
                  hover:border-text-500/22
                  transition-all duration-200
                "
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-text-500/40"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                minLength={8}
                placeholder="Min. 8 characters"
                className="
                  w-full bg-secondary-500 border border-text-500/12
                  text-text-500 placeholder:text-text-500/20
                  px-5 py-4 text-sm font-light rounded-none
                  outline-none
                  focus:border-text-500/50 focus:bg-secondary-500/80
                  hover:border-text-500/22
                  transition-all duration-200
                "
              />
              {/* Password strength hint */}
              <p className="font-mono text-[0.6rem] tracking-widest uppercase text-text-500/25">
                Use 8+ characters, mix letters &amp; numbers
              </p>
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="confirmPassword"
                className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-text-500/40"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                placeholder="Repeat your password"
                className="
                  w-full bg-secondary-500 border border-text-500/12
                  text-text-500 placeholder:text-text-500/20
                  px-5 py-4 text-sm font-light rounded-none
                  outline-none
                  focus:border-text-500/50 focus:bg-secondary-500/80
                  hover:border-text-500/22
                  transition-all duration-200
                "
              />
            </div>

            {/* Terms checkbox */}
            <div className="flex items-start gap-3 mt-1">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="
                  mt-0.5 w-4 h-4 shrink-0 rounded-none
                  border border-text-500/20
                  bg-secondary-500 accent-text-500
                  cursor-pointer
                "
              />
              <label
                htmlFor="terms"
                className="font-mono text-[0.65rem] tracking-wider uppercase text-text-500/30 cursor-pointer select-none leading-relaxed"
              >
                I agree to the{" "}
                <Link
                  href="/terms"
                  className="text-text-500/60 underline underline-offset-2 hover:text-text-500 transition-colors"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="text-text-500/60 underline underline-offset-2 hover:text-text-500 transition-colors"
                >
                  Privacy Policy
                </Link>
              </label>
            </div>

            {/* Divider */}
            <div className="border-t border-text-500/8 mt-1" role="separator" />

            {/* Submit */}
            <button
              type="submit"
              className="
                w-full bg-text-500 text-primary-500
                font-black text-xs tracking-[0.25em] uppercase
                px-8 py-5 rounded-none
                hover:opacity-90
                active:scale-[0.98]
                transition-all duration-150
                cursor-pointer
              "
            >
              Create My Account →
            </button>
          </form>

          {/* Sign in link */}
          <div className="mt-10 border border-text-500/10 p-7 flex items-center justify-between gap-4 hover:border-text-500/22 transition-colors">
            <div>
              <p className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-text-500/30 mb-1">
                Already a member?
              </p>
              <p className="text-lg font-black uppercase text-text-500 leading-tight">
                Sign In
              </p>
            </div>
            <Link
              href="/login"
              className="
                shrink-0 border border-text-500/25 text-text-500/70
                font-mono text-[0.65rem] tracking-[0.2em] uppercase
                px-5 py-3
                hover:border-text-500/60 hover:text-text-500
                hover:bg-text-500/5
                transition-all duration-200
              "
            >
              Sign In →
            </Link>
          </div>

          {/* Footer note */}
          <footer className="mt-10">
            <p className="font-mono text-[0.6rem] tracking-widest uppercase text-text-500/18 leading-relaxed">
              TaskFlow is free forever for individuals.{" "}
              <Link
                href="/pricing"
                className="underline underline-offset-2 hover:text-text-500/40 transition-colors"
              >
                See pricing
              </Link>{" "}
              for team plans.
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Register;
