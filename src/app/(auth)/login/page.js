import LoginForm from "@/components/forms/LoginForm";
import { metaData, routes } from "@/constants";
import Link from "next/link";


export const metadata = metaData.login

const Login = () => {
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
            Welcome back
          </p>
          <h1 className="font-black uppercase leading-[0.85] tracking-tight text-[clamp(4.5rem,8.5vw,8.5rem)] text-text-500">
            Pick Up
            <br />
            Where
            <br />
            You
            <br />
            <span className="text-text-500/20">Left.</span>
          </h1>
        </div>

        {/* Bottom tagline */}
        <div className="border-t border-text-500/10 pt-8">
          <p className="text-sm text-text-500/35 font-light leading-relaxed max-w-xs">
            Your boards, your lists, your tasks — exactly as you left them. Sign
            in and keep moving.
          </p>
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
              Sign In
            </h2>
            <p className="text-text-500/40 text-sm font-light">
              Don&apos;t have an account?{" "}
              <Link
                href={routes.auth.register}
                className="text-text-500 underline underline-offset-4 decoration-text-500/30 hover:decoration-text-500 transition-all"
              >
                Create one — it&apos;s free
              </Link>
            </p>
          </header>

          {/* ── LOGIN FORM ── */}
          <LoginForm />

          {/* ── OR separator ── */}
          <div
            className="relative flex items-center my-10"
            role="separator"
            aria-label="or"
          >
            <div className="flex-1 border-t border-text-500/10" />
            <span className="mx-5 font-mono text-[0.6rem] tracking-[0.3em] uppercase text-text-500/25">
              or
            </span>
            <div className="flex-1 border-t border-text-500/10" />
          </div>

          {/* ── Create account CTA ── */}
          <div className="border border-text-500/10 p-8 flex flex-col gap-5 hover:border-text-500/22 transition-colors">
            <div>
              <p className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-text-500/30 mb-2">
                New here?
              </p>
              <p className="text-xl font-black uppercase leading-tight text-text-500">
                Create Your
                <br />
                Free Account
              </p>
            </div>
            <p className="text-xs text-text-500/35 font-light leading-relaxed">
              Set up your workspace in under a minute. No credit card required.
            </p>
            <Link
              href={routes.auth.register}
              className="
                 btn btn_primary_outline inline-block self-start
                px-6 py-3 text-[0.65rem] tracking-[0.2em]
              "
            >
              Get Started — Free →
            </Link>
          </div>
        </div>

        {/* Footer note */}
        <footer className="mt-auto pt-14 w-full max-w-md mx-auto lg:mx-0">
          <p className="font-mono text-[0.6rem] tracking-widest uppercase text-text-500/18 leading-relaxed">
            By signing in you agree to our{" "}
            <Link
              href="/terms"
              className="underline underline-offset-2 hover:text-text-500/40 transition-colors"
            >
              Terms
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-2 hover:text-text-500/40 transition-colors"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Login;
