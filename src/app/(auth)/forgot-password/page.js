import Link from "next/link";
import ForgotPasswordForm from "@/components/forms/auth/ForgotPasswordForm";
import ResetPasswordForm from "@/components/forms/auth/ResetPasswordForm";
import { metaData, routes } from "@/constants";

export const metadata = metaData.forgotPassword

const ForgotPassword = async ({searchParams}) => {

  const queryParams = await searchParams;
  const forgotToken = queryParams.token;

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
            Account Recovery
          </p>
          <h1 className="font-black uppercase leading-[0.85] tracking-tight text-[clamp(4.5rem,8.5vw,8.5rem)] text-text-500">
            Locked
            <br />
            Out?
            <br />
            <span className="text-text-500/20">
              We&apos;ve
              <br />
              Got You.
            </span>
          </h1>
        </div>

        {/* How it works */}
        <div className="border-t border-text-500/10 pt-8 flex flex-col gap-5">
          <p className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-text-500/30 mb-1">
            How it works
          </p>
          {[
            { n: "01", label: "Enter your email address" },
            { n: "02", label: "Check your inbox for a reset link" },
            { n: "03", label: "Set a new password & sign in" },
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

      {/* ── RIGHT PANEL — Content ── */}
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
          {/* Back link */}
          <Link
            href={routes.auth.login}
            className="inline-flex items-center gap-2 font-mono text-[0.65rem] tracking-[0.2em] uppercase text-text-500/30 hover:text-text-500 transition-colors mb-12 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform duration-200">
              ←
            </span>
            Back to Sign In
          </Link>

          {/* Page heading */}
          <header className="mb-12">
            <h2 className="text-[clamp(2.8rem,6vw,4.5rem)] font-black uppercase leading-none tracking-tight text-text-500 mb-3">
              Reset
              <br />
              Password
            </h2>
            <p className="text-text-500/40 text-sm font-light leading-relaxed max-w-sm">
              Enter the email address tied to your account. We&apos;ll send a
              secure reset link — no fuss.
            </p>
          </header>

          {/* ── FORGOT PASSWORD FORM ── */}
         { forgotToken ? <ResetPasswordForm />:  <ForgotPasswordForm />}

          {/* ── Divider ── */}
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

          {/* ── Auth options ── */}
          <div className="flex flex-col gap-4">
            {/* Sign in */}
            <div className="border border-text-500/10 p-7 flex items-center justify-between gap-4 hover:border-text-500/22 transition-colors group">
              <div>
                <p className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-text-500/30 mb-1">
                  Remember it?
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

            {/* Create account */}
            <div className="border border-text-500/10 p-7 flex items-center justify-between gap-4 hover:border-text-500/22 transition-colors group">
              <div>
                <p className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-text-500/30 mb-1">
                  New here?
                </p>
                <p className="text-lg font-black uppercase text-text-500 leading-tight">
                  Create Account
                </p>
              </div>
              <Link
                href={routes.auth.register}
                className="
                  btn btn_primary_outline shrink-0 
                font-mono text-[0.65rem] tracking-[0.2em] uppercase
                px-5 py-3
                "
              >
                Get Started →
              </Link>
            </div>
          </div>

          {/* ── Need help notice ── */}
          <aside
            aria-label="Support notice"
            className="mt-8 border-l-2 border-text-500/20 pl-5 py-1"
          >
            <p className="font-mono text-[0.6rem] tracking-widest uppercase text-text-500/25 leading-relaxed">
              Still can&apos;t get in?{" "}
              <Link
                href="/support"
                className="text-text-500/45 underline underline-offset-2 hover:text-text-500 transition-colors"
              >
                Contact support
              </Link>{" "}
              and we&apos;ll sort it out.
            </p>
          </aside>

          {/* Footer */}
          <footer className="mt-12">
            <p className="font-mono text-[0.6rem] tracking-widest uppercase text-text-500/18 leading-relaxed">
              Reset links expire after{" "}
              <strong className="text-text-500/30 font-semibold">
                30 minutes
              </strong>{" "}
              for your security.
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default ForgotPassword;
