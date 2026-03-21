import Link from "next/link";
import ActivitySection from "@/components/dashboard/ActivitySection";
import ProjectTile from "@/components/dashboard/ProjectTile";
import DashboardGreetings from "@/components/dashboard/DashboardGreetings";
import projects from "@/constants/json/dummyProjects.json";
import tasks from "@/constants/json/dummyTasks.json";

export const metadata = {
  title: "Dashboard — TaskFlow",
  description: "Your TaskFlow workspace overview.",
};

// ── Mock Data ─────────────────────────────────────────────────────────────────

const user = { name: "Ada Lovelace", username: "ada_lovelace", initials: "AL" };

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-primary-500 text-text-500 flex flex-col">
      <div className="flex-1 px-6 md:px-10 py-10 md:py-14 max-w-[1600px] mx-auto w-full">
        {/* ── Page title ── */}
        <DashboardGreetings />

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
