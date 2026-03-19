import Link from "next/link";

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
                href="/register"
                className="text-text-500 underline underline-offset-4 decoration-text-500/30 hover:decoration-text-500 transition-all"
              >
                Create one — it&apos;s free
              </Link>
            </p>
          </header>

          {/* ── LOGIN FORM ── */}
          <form
            method="POST"
            action="/api/auth/login"
            noValidate
            aria-label="Sign in form"
            className="flex flex-col gap-7"
          >
            {/* Email / Username */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="identifier"
                className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-text-500/40"
              >
                Email or Username
              </label>
              <input
                id="identifier"
                name="identifier"
                type="text"
                autoComplete="username email"
                required
                placeholder="you@example.com"
                className="
                  w-full bg-secondary-500 border border-text-500/12
                  text-text-500 placeholder:text-text-500/20
                  px-5 py-4 text-sm font-light
                  outline-none
                  focus:border-text-500/50 focus:bg-secondary-600
                  hover:border-text-500/22
                  transition-all duration-200
                  rounded-none
                "
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-text-500/40"
                >
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="font-mono text-[0.6rem] tracking-widest uppercase text-text-500/30 hover:text-text-500 transition-colors underline underline-offset-4 decoration-transparent hover:decoration-text-500/40"
                >
                  Forgot password?
                </Link>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="••••••••••"
                className="
                  w-full bg-secondary-500 border border-text-500/12
                  text-text-500 placeholder:text-text-500/20
                  px-5 py-4 text-sm font-light
                  outline-none
                  focus:border-text-500/50 focus:bg-secondary-600
                  hover:border-text-500/22
                  transition-all duration-200
                  rounded-none
                "
              />
            </div>

            {/* Remember me */}
            <div className="flex items-center gap-3">
              <input
                id="remember"
                name="remember"
                type="checkbox"
                className="
                  w-4 h-4 rounded-none border border-text-500/20
                  bg-secondary-500 accent-text-500
                  cursor-pointer
                "
              />
              <label
                htmlFor="remember"
                className="font-mono text-[0.65rem] tracking-widest uppercase text-text-500/30 cursor-pointer select-none"
              >
                Keep me signed in
              </label>
            </div>

            {/* Divider */}
            <div
              className="border-t border-text-500/8 mt-1"
              role="separator"
            />

            {/* Submit */}
            <button
              type="submit"
              className="btn btn_light"
            >
              Sign In →
            </button>
          </form>

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
              href="/register"
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
