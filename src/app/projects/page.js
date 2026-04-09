import AvatarStack from "@/components/common/AvatarStack";
import FormDropdown from "@/components/common/inputs/FormDropdown";
import StatusBadge from "@/components/common/StatusBadge";
import ProjectRowProgress from "@/components/projects/ProjectRowProgress";
import { projectSortOptions } from "@/constants/filtersSortOptions";
import Link from "next/link";
import dummyProjects from "@/constants/json/dummyProjects.json";
import { progressPct } from "@/lib/utils/helpers";

export const metadata = {
  title: "Projects — TaskFlow",
  description: "All your TaskFlow projects in one place.",
};

// ── Mock Data ─────────────────────────────────────────────────────────────────

const user = { name: "Ada Lovelace", username: "ada_lovelace", initials: "AL" };

const allProjects = dummyProjects


const statusConfig = {
  "In Progress": {
    label: "In Progress",
    dot: "bg-text-500",
    text: "text-text-500",
    border: "border-text-500/30",
  },
  "In Review": {
    label: "In Review",
    dot: "bg-text-500/60",
    text: "text-text-500/70",
    border: "border-text-500/20",
  },
  Done: {
    label: "Done",
    dot: "bg-text-500/25",
    text: "text-text-500/35",
    border: "border-text-500/12",
  },
  Blocked: {
    label: "Blocked",
    dot: "bg-text-500/80",
    text: "text-text-500/80",
    border: "border-text-500/50",
  },
};

const statsSummary = {
  total: allProjects.length,
  inProgress: allProjects.filter((p) => p.status === "In Progress").length,
  inReview: allProjects.filter((p) => p.status === "In Review").length,
  done: allProjects.filter((p) => p.status === "Done").length,
  blocked: allProjects.filter((p) => p.status === "Blocked").length,
};

// ── Sub-components ────────────────────────────────────────────────────────────

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-primary-500 text-text-500 flex flex-col">
      {/* ══ PAGE BODY ════════════════════════════════════════════════════════ */}
      <div className="flex-1 px-6 md:px-10 py-10 md:py-14 max-w-[1600px] mx-auto w-full">
        {/* ── Page Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 border-b border-text-500/8 pb-10">
          <div>
            <p className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-text-500/30 mb-3">
              Workspace
            </p>
            <h1 className="text-[clamp(2.5rem,5vw,5rem)] font-black uppercase leading-none tracking-tight text-text-500">
              All Projects
            </h1>
          </div>

          {/* New project CTA */}
          <Link
            href="/projects/new"
            className="
              self-start sm:self-auto
              bg-text-500 text-primary-500
              font-black text-xs tracking-[0.25em] uppercase
              px-7 py-4 shrink-0
              hover:opacity-90 active:scale-[0.98]
              transition-all duration-150
            "
          >
            + New Project
          </Link>
        </div>

        {/* ── Stats Bar ── */}
        <section
          aria-label="Project statistics"
          className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-text-500/8 mb-14"
        >
          {[
            { label: "Total", value: statsSummary.total },
            { label: "In Progress", value: statsSummary.inProgress },
            { label: "In Review", value: statsSummary.inReview },
            { label: "Completed", value: statsSummary.done },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-primary-500 flex flex-col gap-1 px-7 py-6"
            >
              <span className="text-3xl md:text-4xl font-black text-text-500 leading-none">
                {s.value}
              </span>
              <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-text-500/30">
                {s.label}
              </span>
            </div>
          ))}
        </section>

        {/* ── Filter / Sort bar ── */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div
            className="flex flex-wrap items-center gap-2"
            role="group"
            aria-label="Filter by status"
          >
            {["All", "In Progress", "In Review", "Done", "Blocked"].map((f) => (
              <button
                key={f}
                className={`
                  font-mono text-[0.6rem] tracking-[0.2em] uppercase px-4 py-2
                  border transition-all duration-150
                  ${
                    f === "All"
                      ? "bg-text-500 text-primary-500 border-text-500"
                      : "border-text-500/15 text-text-500/35 hover:border-text-500/35 hover:text-text-500/60"
                  }
                `}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-[0.6rem] tracking-widest uppercase text-text-500/25">
              Sort
            </span>
            <FormDropdown aria-label="Sort projects" options={projectSortOptions} />
          </div>
        </div>

        {/* ── Project List ── */}
        <section aria-label="Project list">
          <ul className="flex flex-col gap-px bg-text-500/6" role="list">
            {allProjects.map((p) => {
              const pct = progressPct(p.done, p.tasks);
              const status =
                statusConfig[p.status] ?? statusConfig["In Progress"];

              return (
                <li key={p.id} role="listitem">
                  <Link
                    href={`/projects/${p.slug}`}
                    className="
                      group flex flex-col lg:flex-row lg:items-center gap-6
                      bg-secondary-500 px-6 py-6 md:px-8 md:py-7
                      hover:bg-secondary-500/60
                      border-l-2 border-transparent
                      hover:border-text-500/40
                      transition-all duration-200
                    "
                  >
                    {/* ── Name + description ── */}
                    <div className="flex-1 min-w-0 flex flex-col gap-1.5">
                      <div className="flex flex-wrap items-center gap-3">
                        <h2 className="text-base md:text-lg font-black uppercase tracking-tight text-text-500 group-hover:text-text-500 leading-none">
                          {p.name}
                        </h2>
                        {/* Status badge */}
                        <StatusBadge status={status} />
                      </div>
                      <p className="text-sm text-text-500/35 font-light leading-relaxed line-clamp-1 max-w-2xl">
                        {p.description}
                      </p>
                    </div>

                    {/* ── Lists ── */}
                    <div className="hidden xl:flex items-center gap-2 shrink-0">
                      {p.lists.map((list) => (
                        <span
                          key={list}
                          className="font-mono text-[0.55rem] tracking-widest uppercase text-text-500/25 border border-text-500/10 px-2.5 py-1"
                        >
                          {list}
                        </span>
                      ))}
                    </div>

                    {/* ── Progress ── */}
                    <ProjectRowProgress doneTask={p.done} totalTask={p.tasks} />

                    {/* ── Members ── */}
                    <div className="flex items-center gap-3 shrink-0">
                      <AvatarStack members={p.members}/>
                    </div>

                    {/* ── Meta ── */}
                    <div className="hidden md:flex flex-col items-end gap-1 shrink-0 w-24 text-right">
                      <span className="font-mono text-[0.55rem] tracking-widest uppercase text-text-500/25">
                        Updated
                      </span>
                      <span className="font-mono text-[0.6rem] tracking-widest uppercase text-text-500/40">
                        {p.updated}
                      </span>
                    </div>

                    {/* Arrow */}
                    <span
                      aria-hidden
                      className="hidden lg:block text-text-500/15 group-hover:text-text-500/50 group-hover:translate-x-1 transition-all duration-200 text-lg shrink-0"
                    >
                      →
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        {/* ── Empty state (shown when filtered to 0 results) ── */}
        
        { allProjects.length === 0 && <div className="flex flex-col items-center justify-center py-32 gap-6 border border-dashed border-text-500/12">
          <span className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-text-500/20">No projects match</span>
          <Link href="/projects/new" className="bg-text-500 text-primary-500 font-black text-xs tracking-[0.2em] uppercase px-7 py-4 hover:opacity-90 transition-all">
            + Create First Project
          </Link>
        </div>}
       
      </div>

      {/* ══ FOOTER ═══════════════════════════════════════════════════════════ */}
      <footer className="border-t border-text-500/8 px-6 md:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 mt-10">
        <span className="font-mono text-xs tracking-[0.3em] uppercase text-text-500/20">
          TaskFlow
        </span>
        <p className="font-mono text-[0.6rem] tracking-widest uppercase text-text-500/15">
          © {new Date().getFullYear()} TaskFlow. All rights reserved.
        </p>
        <nav className="flex gap-5" aria-label="Footer navigation">
          {["Privacy", "Terms", "Support"].map((l) => (
            <Link
              key={l}
              href={`/${l.toLowerCase()}`}
              className="font-mono text-[0.6rem] tracking-widest uppercase text-text-500/20 hover:text-text-500/45 transition-colors"
            >
              {l}
            </Link>
          ))}
        </nav>
      </footer>
    </div>
  );
}
