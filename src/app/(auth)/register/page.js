import React from "react";
import Link from "next/link";
import RegisterForm from "@/components/forms/RegisterForm";
import { routes } from "@/constants";

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
                href={routes.auth.login}
                className="text-text-500 underline underline-offset-4 decoration-text-500/30 hover:decoration-text-500 transition-all"
              >
                Sign in instead
              </Link>
            </p>
          </header>

          {/* ── SIGNUP FORM ── */}
          <RegisterForm />

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
              href={routes.auth.login}
              className="
                btn btn_primary_outline shrink-0 
                font-mono text-[0.65rem] tracking-[0.2em] uppercase
                px-5 py-3
               
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
