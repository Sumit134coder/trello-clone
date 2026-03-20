import Link from "next/link";

export const metadata = {
  title: "Projects — TaskFlow",
  description: "All your TaskFlow projects in one place.",
};

// ── Mock Data ─────────────────────────────────────────────────────────────────

const user = { name: "Ada Lovelace", username: "ada_lovelace", initials: "AL" };

const allProjects = [
  {
    id: 1,
    slug: "brand-redesign",
    name: "Brand Redesign",
    description:
      "Overhaul the visual identity — color system, typography, component library, and brand guidelines.",
    tasks: 12,
    done: 7,
    status: "In Progress",
    members: [
      { initials: "AL", name: "Ada Lovelace" },
      { initials: "JD", name: "Jordan Davis" },
      { initials: "SR", name: "Sam Rivera" },
    ],
    lists: ["Backlog", "Design", "Review", "Done"],
    updated: "2h ago",
    created: "Mar 1, 2026",
  },
  {
    id: 2,
    slug: "api-v2",
    name: "API v2 Launch",
    description:
      "Rebuild the public API with rate limiting, versioning, and improved developer documentation.",
    tasks: 28,
    done: 19,
    status: "In Progress",
    members: [
      { initials: "AL", name: "Ada Lovelace" },
      { initials: "MK", name: "Mo Khan" },
    ],
    lists: ["Backlog", "In Dev", "Testing", "Done"],
    updated: "5h ago",
    created: "Feb 10, 2026",
  },
  {
    id: 3,
    slug: "onboarding-flow",
    name: "Onboarding Flow",
    description:
      "Redesign the new-user onboarding sequence based on interview findings and drop-off analytics.",
    tasks: 9,
    done: 2,
    status: "In Progress",
    members: [
      { initials: "SR", name: "Sam Rivera" },
      { initials: "JD", name: "Jordan Davis" },
      { initials: "TW", name: "Taylor Wong" },
      { initials: "AL", name: "Ada Lovelace" },
    ],
    lists: ["Research", "Design", "Dev", "Done"],
    updated: "Yesterday",
    created: "Feb 28, 2026",
  },
  {
    id: 4,
    slug: "mobile-app",
    name: "Mobile App",
    description:
      "Native iOS and Android app with offline support, push notifications, and drag-and-drop boards.",
    tasks: 41,
    done: 34,
    status: "In Review",
    members: [
      { initials: "MK", name: "Mo Khan" },
      { initials: "TW", name: "Taylor Wong" },
    ],
    lists: ["Backlog", "In Dev", "QA", "Done"],
    updated: "3d ago",
    created: "Jan 15, 2026",
  },
  {
    id: 5,
    slug: "data-pipeline",
    name: "Data Pipeline",
    description:
      "Kafka-based event ingestion pipeline with consumer groups, retry policies, and monitoring dashboards.",
    tasks: 15,
    done: 15,
    status: "Done",
    members: [
      { initials: "JD", name: "Jordan Davis" },
      { initials: "AL", name: "Ada Lovelace" },
    ],
    lists: ["Planning", "Build", "Testing", "Done"],
    updated: "1w ago",
    created: "Dec 20, 2025",
  },
  {
    id: 6,
    slug: "design-system",
    name: "Design System",
    description:
      "Build a shared component library in Storybook — tokens, primitives, and composite patterns.",
    tasks: 22,
    done: 8,
    status: "In Progress",
    members: [
      { initials: "SR", name: "Sam Rivera" },
      { initials: "AL", name: "Ada Lovelace" },
      { initials: "JD", name: "Jordan Davis" },
    ],
    lists: ["Tokens", "Components", "Docs", "Done"],
    updated: "4h ago",
    created: "Mar 5, 2026",
  },
  {
    id: 7,
    slug: "security-audit",
    name: "Security Audit",
    description:
      "Third-party penetration testing, vulnerability remediation, and SOC 2 compliance prep.",
    tasks: 18,
    done: 18,
    status: "Done",
    members: [{ initials: "MK", name: "Mo Khan" }],
    lists: ["Scope", "Testing", "Fixes", "Signed Off"],
    updated: "2w ago",
    created: "Jan 5, 2026",
  },
  {
    id: 8,
    slug: "growth-q1",
    name: "Growth Q1",
    description:
      "Landing pages, SEO sprints, and referral program mechanics for Q1 acquisition targets.",
    tasks: 33,
    done: 5,
    status: "Blocked",
    members: [
      { initials: "TW", name: "Taylor Wong" },
      { initials: "SR", name: "Sam Rivera" },
      { initials: "AL", name: "Ada Lovelace" },
    ],
    lists: ["Ideas", "In Progress", "Review", "Live"],
    updated: "6h ago",
    created: "Mar 10, 2026",
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

function progressPct(done, total) {
  return Math.round((done / total) * 100);
}

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

function Avatar({ initials, name }) {
  return (
    <abbr
      title={name}
      className="
        no-underline flex items-center justify-center
        w-7 h-7 rounded-full shrink-0
        bg-primary-500 border border-text-500/20
        font-mono text-[0.55rem] tracking-wider uppercase text-text-500/60
        -ml-2 first:ml-0
        ring-1 ring-secondary-500
      "
    >
      {initials}
    </abbr>
  );
}

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
            <select
              aria-label="Sort projects"
              className="
                bg-secondary-500 border border-text-500/12
                text-text-500/50 font-mono text-[0.6rem] tracking-widest uppercase
                px-4 py-2 outline-none rounded-none
                hover:border-text-500/30 focus:border-text-500/40
                transition-all cursor-pointer
              "
            >
              <option value="updated">Last Updated</option>
              <option value="created">Date Created</option>
              <option value="name">Name A–Z</option>
              <option value="progress">Progress</option>
            </select>
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
                        <span
                          className={`
                          inline-flex items-center gap-1.5
                          font-mono text-[0.55rem] tracking-widest uppercase
                          border px-2.5 py-1
                          ${status.text} ${status.border}
                        `}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${status.dot}`}
                            aria-hidden
                          />
                          {status.label}
                        </span>
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
                    <div className="flex flex-col gap-2 w-full lg:w-40 shrink-0">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[0.55rem] tracking-widest uppercase text-text-500/25">
                          {p.done}/{p.tasks} tasks
                        </span>
                        <span className="font-mono text-[0.55rem] tracking-widest uppercase text-text-500/40 font-semibold">
                          {pct}%
                        </span>
                      </div>
                      <div className="w-full h-px bg-text-500/10 relative">
                        <div
                          className="absolute top-0 left-0 h-full bg-text-500/50 transition-all duration-500"
                          style={{ width: `${pct}%` }}
                          role="progressbar"
                          aria-valuenow={pct}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-label={`${pct}% complete`}
                        />
                      </div>
                    </div>

                    {/* ── Members ── */}
                    <div className="flex items-center gap-3 shrink-0">
                      <div className="flex">
                        {p.members.map((m) => (
                          <Avatar
                            key={m.initials + m.name}
                            initials={m.initials}
                            name={m.name}
                          />
                        ))}
                      </div>
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
        {/* Uncomment when wiring filters:
        <div className="flex flex-col items-center justify-center py-32 gap-6 border border-dashed border-text-500/12">
          <span className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-text-500/20">No projects match</span>
          <Link href="/projects/new" className="bg-text-500 text-primary-500 font-black text-xs tracking-[0.2em] uppercase px-7 py-4 hover:opacity-90 transition-all">
            + Create First Project
          </Link>
        </div>
        */}
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
