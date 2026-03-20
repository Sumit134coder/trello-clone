import Link from "next/link";
import ActivitySection from "@/components/dashboard/ActivitySection";
import ProjectTile from "@/components/dashboard/ProjectTile";

export const metadata = {
  title: "Dashboard — TaskFlow",
  description: "Your TaskFlow workspace overview.",
};

// ── Mock Data ─────────────────────────────────────────────────────────────────

const user = { name: "Ada Lovelace", username: "ada_lovelace", initials: "AL" };

const projects = [
  {
    id: 1,
    slug: "brand-redesign",
    name: "Brand Redesign",
    tasks: 12,
    done: 7,
    members: ["AL", "JD", "SR"],
    updated: "2h ago",
  },
  {
    id: 2,
    slug: "api-v2",
    name: "API v2 Launch",
    tasks: 28,
    done: 19,
    members: ["AL", "MK"],
    updated: "5h ago",
  },
  {
    id: 3,
    slug: "onboarding-flow",
    name: "Onboarding Flow",
    tasks: 9,
    done: 2,
    members: ["SR", "JD", "TW", "AL"],
    updated: "Yesterday",
  },
  {
    id: 4,
    slug: "mobile-app",
    name: "Mobile App",
    tasks: 41,
    done: 34,
    members: ["MK", "TW"],
    updated: "3d ago",
  },
  {
    id: 5,
    slug: "data-pipeline",
    name: "Data Pipeline",
    tasks: 15,
    done: 15,
    members: ["JD", "AL"],
    updated: "1w ago",
  },
];

const tasks = {
  yesterday: [
    {
      id: 1,
      title: "Finalize color system tokens",
      description:
        "Document primary, secondary, and text tokens with usage examples across all components.",
      project: "Brand Redesign",
      status: "Done",
      assignees: [
        { initials: "AL", name: "Ada Lovelace" },
        { initials: "SR", name: "Sam Rivera" },
      ],
    },
    {
      id: 2,
      title: "Write rate-limiting middleware",
      description:
        "Implement per-user and per-route rate limiting for the v2 API gateway.",
      project: "API v2 Launch",
      status: "In Review",
      assignees: [{ initials: "MK", name: "Mo Khan" }],
    },
    {
      id: 3,
      title: "User interview synthesis",
      description:
        "Cluster findings from 6 onboarding interviews into actionable insight themes.",
      project: "Onboarding Flow",
      status: "In Progress",
      assignees: [
        { initials: "JD", name: "Jordan Davis" },
        { initials: "AL", name: "Ada Lovelace" },
      ],
    },
  ],
  last7: [
    {
      id: 4,
      title: "Auth token refresh logic",
      description:
        "Handle silent refresh and expiry edge cases without logging users out mid-session.",
      project: "API v2 Launch",
      status: "Done",
      assignees: [{ initials: "AL", name: "Ada Lovelace" }],
    },
    {
      id: 5,
      title: "Push notification setup",
      description:
        "Integrate FCM for iOS and Android. Handle permission prompts and fallback states.",
      project: "Mobile App",
      status: "Done",
      assignees: [
        { initials: "TW", name: "Taylor Wong" },
        { initials: "MK", name: "Mo Khan" },
      ],
    },
    {
      id: 6,
      title: "Empty state illustrations",
      description:
        "Design zero-data states for boards, task lists, and the activity feed.",
      project: "Brand Redesign",
      status: "In Review",
      assignees: [{ initials: "SR", name: "Sam Rivera" }],
    },
    {
      id: 7,
      title: "Kafka consumer group config",
      description:
        "Set consumer group offsets and retry policies for the new event ingestion pipeline.",
      project: "Data Pipeline",
      status: "Done",
      assignees: [{ initials: "JD", name: "Jordan Davis" }],
    },
  ],
  last30: [
    {
      id: 8,
      title: "Database schema v2 migration",
      description:
        "Write and test Prisma migration scripts for the new multi-tenant schema structure.",
      project: "API v2 Launch",
      status: "Done",
      assignees: [
        { initials: "AL", name: "Ada Lovelace" },
        { initials: "JD", name: "Jordan Davis" },
      ],
    },
    {
      id: 9,
      title: "Offline mode sync strategy",
      description:
        "Define conflict resolution rules for tasks edited offline and then reconnected.",
      project: "Mobile App",
      status: "Done",
      assignees: [{ initials: "TW", name: "Taylor Wong" }],
    },
    {
      id: 10,
      title: "Typeface selection & pairing",
      description:
        "Shortlist display and body font combinations. Present options to the team for vote.",
      project: "Brand Redesign",
      status: "Done",
      assignees: [
        { initials: "SR", name: "Sam Rivera" },
        { initials: "AL", name: "Ada Lovelace" },
      ],
    },
  ],
};

// ── Helpers ───────────────────────────────────────────────────────────────────

// ── Page ──────────────────────────────────────────────────────────────────────

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-primary-500 text-text-500 flex flex-col">
      {/* ══ TOP NAV ══════════════════════════════════════════════════════════ */}
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

      {/* ══ PAGE BODY ═════════════════════════════════════════════════════════ */}
      <div className="flex-1 px-6 md:px-10 py-10 md:py-14 max-w-[1600px] mx-auto w-full">
        {/* ── Page title ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 border-b border-text-500/8 pb-10">
          <div>
            <p className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-text-500/30 mb-3">
              For You
            </p>
            <h1 className="text-[clamp(2.5rem,5vw,5rem)] font-black uppercase leading-none tracking-tight text-text-500">
              Good Morning,
              <br />
              <span className="text-text-500/25">Ada.</span>
            </h1>
          </div>
          <div className="flex items-center gap-3 pb-1">
            <span className="font-mono text-[0.6rem] tracking-widest uppercase text-text-500/25">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </div>

        {/* ══ SECTION 1 — PROJECTS ════════════════════════════════════════════ */}
        <section aria-labelledby="projects-heading" className="mb-16">
          <header className="flex items-center justify-between mb-7">
            <div className="flex items-center gap-4">
              <h2
                id="projects-heading"
                className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-500"
              >
                Projects
              </h2>
              <span className="font-mono text-[0.55rem] tracking-widest text-text-500/25 border border-text-500/12 px-2 py-0.5">
                {projects.length}
              </span>
            </div>
            <Link
              href="/projects"
              className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-text-500/30 hover:text-text-500/60 transition-colors"
            >
              View all →
            </Link>
          </header>

          {/* Project grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
            {/* Existing project tiles */}
            {projects.map((p) => (
              <ProjectTile projectInfo={p} key={p.id} />
            ))}

            {/* ── Create New Project tile ── */}
            <Link
              href="/projects/new"
              className="
                group flex flex-col items-center justify-center gap-4
                border border-dashed border-text-500/15
                hover:border-text-500/40 hover:bg-secondary-500/40
                p-6 min-h-[180px]
                transition-all duration-200
              "
              aria-label="Create new project"
            >
              {/* Plus icon */}
              <span
                aria-hidden
                className="
                  w-10 h-10 flex items-center justify-center
                  border border-text-500/20 group-hover:border-text-500/50
                  text-text-500/30 group-hover:text-text-500/60
                  font-light text-2xl leading-none
                  transition-all duration-200
                "
              >
                +
              </span>
              <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-text-500/30 group-hover:text-text-500/50 transition-colors text-center">
                New Project
              </span>
            </Link>
          </div>
        </section>

        {/* ══ SECTION 2 — RECENT ACTIVITY ═════════════════════════════════════ */}
        <section aria-labelledby="activity-heading">
          <header className="flex items-center justify-between mb-10">
            <h2
              id="activity-heading"
              className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-500"
            >
              Recent Activity
            </h2>
            <Link
              href="/tasks"
              className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-text-500/30 hover:text-text-500/60 transition-colors"
            >
              All tasks →
            </Link>
          </header>

          <div className="flex flex-col gap-12">
            <ActivitySection
              label="Yesterday"
              count={tasks.yesterday.length}
              tasks={tasks.yesterday}
            />
            <ActivitySection
              label="Last 7 Days"
              count={tasks.last7.length}
              tasks={tasks.last7}
            />
            <ActivitySection
              label="Last 30 Days"
              count={tasks.last30.length}
              tasks={tasks.last30}
            />
          </div>
        </section>
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
