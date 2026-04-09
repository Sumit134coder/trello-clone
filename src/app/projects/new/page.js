import CreateProject from "@/components/forms/project/CreateProject";
import Link from "next/link";

export const metadata = {
  title: "New Project — TaskFlow",
  description: "Create a new TaskFlow project.",
};


export default function NewProjectPage() {
  return (
    <div className="min-h-screen bg-primary-500 text-text-500">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 py-12 md:py-16">
        {/* ── Breadcrumb ── */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-3 mb-12">
          <Link
            href="/projects"
            className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-text-500/30 hover:text-text-500/60 transition-colors group flex items-center gap-2"
          >
            <span className="group-hover:-translate-x-0.5 transition-transform duration-200 inline-block">
              ←
            </span>
            Projects
          </Link>
          <span className="text-text-500/15 font-mono text-xs">/</span>
          <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-text-500/50">
            New Project
          </span>
        </nav>

        {/* ── Page heading ── */}
        <header className="mb-14 border-b border-text-500/8 pb-10">
          <p className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-text-500/30 mb-4">
            Create
          </p>
          <h1 className="text-[clamp(3rem,6vw,6rem)] font-black uppercase leading-none tracking-tight text-text-500">
            New Project
          </h1>
        </header>

        <CreateProject />

      </div>
    </div>
  );
}
