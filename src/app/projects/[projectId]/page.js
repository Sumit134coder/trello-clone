import Link from "next/link";

export const metadata = {
  title: "Brand Redesign — TaskFlow",
  description: "Project details for Brand Redesign.",
};

// ── Mock Data ─────────────────────────────────────────────────────────────────

const project = {
  id: 1,
  slug: "brand-redesign",
  name: "Brand Redesign",
  description:
    "Overhaul the full visual identity — color system, typography, component library, brand guidelines, and all public-facing touchpoints. Deliverables include a Figma design system, updated marketing site, and a living style guide.",
  status: "In Progress",
  visibility: "Team",
  created: "March 1, 2026",
  dueDate: "April 15, 2026",
  updatedAt: "2 hours ago",
  owner: { initials: "AL", name: "Ada Lovelace", role: "Product Lead" },
  members: [
    { initials: "AL", name: "Ada Lovelace",  role: "Product Lead"    },
    { initials: "JD", name: "Jordan Davis",  role: "Designer"        },
    { initials: "SR", name: "Sam Rivera",    role: "Product Manager" },
  ],
  lists: [
    { name: "Backlog",     count: 2 },
    { name: "Design",      count: 3 },
    { name: "Review",      count: 1 },
    { name: "Done",        count: 7 },
  ],
  tasks: {
    total: 12,
    done: 7,
    inProgress: 3,
    blocked: 0,
  },
};

const recentActivity = [
  { id: 1, actor: "JD", action: "moved",    target: "Typeface selection",         from: "Design",  to: "Review",  time: "2h ago"   },
  { id: 2, actor: "SR", action: "created",  target: "Brand voice document",       from: null,      to: "Backlog", time: "5h ago"   },
  { id: 3, actor: "AL", action: "completed",target: "Color system tokens",        from: "Review",  to: "Done",    time: "Yesterday"},
  { id: 4, actor: "JD", action: "completed",target: "Logo mark explorations",     from: "Design",  to: "Done",    time: "Yesterday"},
  { id: 5, actor: "SR", action: "commented",target: "Spacing & grid system",      from: null,      to: null,      time: "2d ago"   },
  { id: 6, actor: "AL", action: "moved",    target: "Icon set — 1st pass",        from: "Backlog", to: "Design",  time: "3d ago"   },
];

const tasksByList = {
  Backlog: [
    { id: 1, title: "Motion & animation guidelines",   assignee: "SR", due: "Apr 10",  priority: "Low" },
    { id: 2, title: "Social media template kit",       assignee: "JD", due: "Apr 12",  priority: "Med" },
  ],
  Design: [
    { id: 3, title: "Icon set — 1st pass",             assignee: "JD", due: "Mar 28",  priority: "High"},
    { id: 4, title: "Spacing & grid system",           assignee: "AL", due: "Mar 25",  priority: "High"},
    { id: 5, title: "Illustration style exploration",  assignee: "SR", due: "Apr 2",   priority: "Med" },
  ],
  Review: [
    { id: 6, title: "Typeface selection & pairing",    assignee: "JD", due: "Mar 22",  priority: "High"},
  ],
  Done: [
    { id: 7,  title: "Color system tokens",            assignee: "AL", due: undefined, priority: "High"},
    { id: 8,  title: "Logo mark explorations",         assignee: "JD", due: undefined, priority: "High"},
    { id: 9,  title: "Brand positioning statement",    assignee: "SR", due: undefined, priority: "Med" },
    { id: 10, title: "Competitor visual audit",        assignee: "AL", due: undefined, priority: "Low" },
    { id: 11, title: "Moodboard & direction vote",     assignee: "SR", due: undefined, priority: "Low" },
    { id: 12, title: "Stakeholder kick-off deck",      assignee: "AL", due: undefined, priority: "Med" },
    { id: 13, title: "Design principles doc",          assignee: "JD", due: undefined, priority: "Low" },
  ],
};

// ── Helpers ───────────────────────────────────────────────────────────────────

function progressPct(done, total ) {
  return Math.round((done / total) * 100);
}

const statusConfig = {
  "In Progress": { dot: "bg-text-500",     text: "text-text-500",     border: "border-text-500/35" },
  "In Review":   { dot: "bg-text-500/60",  text: "text-text-500/70",  border: "border-text-500/22" },
  "Done":        { dot: "bg-text-500/25",  text: "text-text-500/35",  border: "border-text-500/12" },
  "Blocked":     { dot: "bg-text-500/80",  text: "text-text-500/80",  border: "border-text-500/50" },
};

const priorityConfig= {
  "High": "text-text-500     border-text-500/40",
  "Med":  "text-text-500/55  border-text-500/20",
  "Low":  "text-text-500/30  border-text-500/10",
};

const actionVerb = {
  moved:     "moved",
  created:   "created",
  completed: "completed",
  commented: "commented on",
};

// ── Sub-components ────────────────────────────────────────────────────────────

function Avatar({
  initials,
  name,
  size = "sm",
}) {
  const sizeClass = size === "lg" ? "w-11 h-11 text-xs" : size === "md" ? "w-8 h-8 text-[0.6rem]" : "w-7 h-7 text-[0.55rem]";
  return (
    <abbr
      title={name}
      className={`
        no-underline flex items-center justify-center shrink-0
        ${sizeClass} rounded-full
        bg-primary-500 border border-text-500/20
        font-mono tracking-wider uppercase text-text-500/60
        ring-1 ring-secondary-500
      `}
    >
      {initials}
    </abbr>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ProjectDetailPage() {
  const pct    = progressPct(project.tasks.done, project.tasks.total);
  const status = statusConfig[project.status] ?? statusConfig["In Progress"];

  return (
    <div className="min-h-screen bg-primary-500 text-text-500">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-12 md:py-16">

        {/* ── Breadcrumb ── */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-3 mb-10">
          <Link
            href="/projects"
            className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-text-500/30 hover:text-text-500/60 transition-colors group flex items-center gap-2"
          >
            <span className="group-hover:-translate-x-0.5 transition-transform duration-200 inline-block">←</span>
            Projects
          </Link>
          <span className="text-text-500/15 font-mono text-xs">/</span>
          <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-text-500/50 truncate max-w-[160px]">
            {project.name}
          </span>
        </nav>

        {/* ══════════════════════════════════════════════════
            HERO — Project title + actions
        ══════════════════════════════════════════════════ */}
        <header className="border-b border-text-500/8 pb-10 mb-14">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">

            {/* Left — name, status, meta */}
            <div className="flex flex-col gap-5">
              {/* Status badge */}
              <div className="flex items-center gap-3">
                <span className={`
                  inline-flex items-center gap-2
                  font-mono text-[0.6rem] tracking-widest uppercase
                  border px-3 py-1.5
                  ${status.text} ${status.border}
                `}>
                  <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} aria-hidden />
                  {project.status}
                </span>
                <span className="font-mono text-[0.6rem] tracking-widest uppercase text-text-500/20">
                  {project.visibility}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-[clamp(2.8rem,5.5vw,5.5rem)] font-black uppercase leading-none tracking-tight text-text-500">
                {project.name}
              </h1>

              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-5 text-text-500/25 font-mono text-[0.58rem] tracking-widest uppercase">
                <span>Created {project.created}</span>
                <span className="text-text-500/10">·</span>
                <span>Due {project.dueDate}</span>
                <span className="text-text-500/10">·</span>
                <span>Updated {project.updatedAt}</span>
              </div>
            </div>

            {/* Right — primary actions */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              {/* ── OPEN BOARD — primary CTA ── */}
              <Link
                href={`/projects/${project.slug}/board`}
                className="
                  inline-flex items-center gap-3
                  bg-text-500 text-primary-500
                  font-black text-xs tracking-[0.25em] uppercase
                  px-7 py-4
                  hover:opacity-90 active:scale-[0.98]
                  transition-all duration-150
                "
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <rect x="1" y="1" width="4" height="12" rx="0.5" stroke="currentColor" strokeWidth="1.2" />
                  <rect x="7" y="1" width="4" height="8"  rx="0.5" stroke="currentColor" strokeWidth="1.2" />
                </svg>
                Open Board
              </Link>

              {/* Edit */}
              <Link
                href={`/projects/${project.slug}/settings`}
                className="
                  inline-flex items-center gap-2
                  border border-text-500/20 text-text-500/50
                  font-mono text-[0.6rem] tracking-[0.2em] uppercase
                  px-5 py-4
                  hover:border-text-500/45 hover:text-text-500/75
                  transition-all duration-200
                "
              >
                Settings
              </Link>

              {/* More */}
              <button
                aria-label="More options"
                className="
                  w-12 h-12 flex items-center justify-center
                  border border-text-500/12 text-text-500/35
                  hover:border-text-500/35 hover:text-text-500/60
                  transition-all duration-200
                  font-mono text-lg leading-none tracking-tighter
                "
              >
                ···
              </button>
            </div>
          </div>
        </header>

        {/* ══════════════════════════════════════════════════
            BODY — 2-col layout
        ══════════════════════════════════════════════════ */}
        <div className="grid lg:grid-cols-[1fr_320px] gap-12 xl:gap-16">

          {/* ── LEFT COLUMN ── */}
          <div className="flex flex-col gap-14 min-w-0">

            {/* ── Description ── */}
            <section aria-labelledby="desc-heading">
              <h2
                id="desc-heading"
                className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-text-500/30 mb-4"
              >
                About
              </h2>
              <p className="text-sm md:text-base text-text-500/60 font-light leading-relaxed max-w-2xl">
                {project.description}
              </p>
            </section>

            {/* ── Task breakdown by list ── */}
            <section aria-labelledby="tasks-heading">
              <div className="flex items-center justify-between mb-7">
                <h2
                  id="tasks-heading"
                  className="text-xl font-black uppercase tracking-tight text-text-500"
                >
                  Tasks
                </h2>
                <Link
                  href={`/projects/${project.slug}/board`}
                  className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-text-500/30 hover:text-text-500/60 transition-colors"
                >
                  View board →
                </Link>
              </div>

              {/* List sections */}
              <div className="flex flex-col gap-6">
                {Object.entries(tasksByList).map(([listName, listTasks]) => (
                  <div key={listName}>
                    {/* List header */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-text-500/35">
                        {listName}
                      </span>
                      <span className="font-mono text-[0.55rem] tracking-widest text-text-500/20 border border-text-500/12 px-2 py-0.5">
                        {listTasks.length}
                      </span>
                      <div className="flex-1 border-t border-text-500/8" />
                    </div>

                    {/* Task rows */}
                    <ul className="flex flex-col gap-px bg-text-500/6" role="list">
                      {listTasks.map((task) => (
                        <li key={task.id} role="listitem">
                          <Link
                            href={`/projects/${project.slug}/tasks/${task.id}`}
                            className="
                              group flex items-center gap-4
                              bg-secondary-500 px-5 py-4
                              hover:bg-secondary-500/60
                              border-l-2 border-transparent hover:border-text-500/30
                              transition-all duration-200
                            "
                          >
                            {/* Done indicator */}
                            <span
                              aria-hidden
                              className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                                listName === "Done" ? "bg-text-500/25" : "border border-text-500/25"
                              }`}
                            />

                            {/* Title */}
                            <span className={`
                              flex-1 text-sm font-medium truncate
                              ${listName === "Done" ? "text-text-500/30 line-through decoration-text-500/20" : "text-text-500/75 group-hover:text-text-500"}
                              transition-colors
                            `}>
                              {task.title}
                            </span>

                            {/* Priority */}
                            <span className={`
                              hidden sm:block
                              font-mono text-[0.5rem] tracking-widest uppercase
                              border px-2 py-0.5 shrink-0
                              ${priorityConfig[task.priority]}
                            `}>
                              {task.priority}
                            </span>

                            {/* Due date */}
                            {task.due && (
                              <span className="hidden md:block font-mono text-[0.55rem] tracking-widest uppercase text-text-500/25 shrink-0">
                                {task.due}
                              </span>
                            )}

                            {/* Assignee */}
                            <Avatar initials={task.assignee} size="sm" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Activity feed ── */}
            <section aria-labelledby="activity-heading">
              <h2
                id="activity-heading"
                className="text-xl font-black uppercase tracking-tight text-text-500 mb-7"
              >
                Activity
              </h2>

              <ol className="flex flex-col relative" aria-label="Project activity feed">
                {/* Vertical rule */}
                <div className="absolute top-0 bottom-0 left-[13px] w-px bg-text-500/8 pointer-events-none" aria-hidden />

                {recentActivity.map((event, i) => (
                  <li
                    key={event.id}
                    className={`relative flex items-start gap-5 pb-7 ${
                      i === recentActivity.length - 1 ? "" : ""
                    }`}
                  >
                    {/* Avatar dot */}
                    <div className="shrink-0 z-10">
                      <Avatar initials={event.actor} size="sm" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 pt-1">
                      <p className="text-sm text-text-500/55 font-light leading-snug">
                        <span className="text-text-500/80 font-semibold">{event.actor}</span>
                        {" "}{actionVerb[event.action]}{" "}
                        <span className="text-text-500/70 font-medium">{event.target}</span>
                        {event.from && event.to && (
                          <>
                            {" "}
                            <span className="font-mono text-[0.55rem] tracking-widest uppercase text-text-500/25">
                              {event.from}
                            </span>
                            {" → "}
                            <span className="font-mono text-[0.55rem] tracking-widest uppercase text-text-500/25">
                              {event.to}
                            </span>
                          </>
                        )}
                        {!event.from && event.to && (
                          <>
                            {" "}
                            <span className="font-mono text-[0.55rem] tracking-widest uppercase text-text-500/25">
                              → {event.to}
                            </span>
                          </>
                        )}
                      </p>
                      <span className="font-mono text-[0.55rem] tracking-widest uppercase text-text-500/20 mt-1 block">
                        {event.time}
                      </span>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

          </div>

          {/* ── RIGHT SIDEBAR ── */}
          <aside className="flex flex-col gap-10" aria-label="Project sidebar">

            {/* ── Open Board — sticky CTA ── */}
            <Link
              href={`/projects/${project.slug}/board`}
              className="
                group flex items-center justify-between gap-4
                bg-secondary-500 border border-text-500/15
                hover:border-text-500/40
                px-6 py-5
                transition-all duration-200
              "
            >
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[0.55rem] tracking-[0.2em] uppercase text-text-500/30">
                  Project Board
                </span>
                <span className="text-sm font-bold uppercase text-text-500 group-hover:text-text-500">
                  Open Board →
                </span>
              </div>
              <div className="flex gap-1 shrink-0" aria-hidden>
                {[3, 5, 2].map((h, i) => (
                  <div
                    key={i}
                    className="w-3 bg-text-500/15 group-hover:bg-text-500/30 transition-colors rounded-none"
                    style={{ height: `${h * 6}px` }}
                  />
                ))}
              </div>
            </Link>

            {/* ── Progress ── */}
            <section aria-labelledby="progress-heading" className="flex flex-col gap-5">
              <h3
                id="progress-heading"
                className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-text-500/30"
              >
                Progress
              </h3>

              {/* Big % */}
              <div className="flex items-end gap-3">
                <span className="text-[4rem] font-black leading-none text-text-500">
                  {pct}
                </span>
                <span className="font-mono text-sm text-text-500/30 mb-2">%</span>
              </div>

              {/* Bar */}
              <div className="w-full h-1 bg-text-500/10">
                <div
                  className="h-full bg-text-500/60 transition-all duration-700"
                  style={{ width: `${pct}%` }}
                  role="progressbar"
                  aria-valuenow={pct}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${pct}% complete`}
                />
              </div>

              {/* Breakdown */}
              <div className="grid grid-cols-3 gap-px bg-text-500/8 mt-1">
                {[
                  { label: "Done",        value: project.tasks.done       },
                  { label: "Active",      value: project.tasks.inProgress },
                  { label: "Remaining",   value: project.tasks.total - project.tasks.done },
                ].map((s) => (
                  <div key={s.label} className="bg-primary-500 flex flex-col gap-1 px-4 py-4">
                    <span className="text-2xl font-black text-text-500 leading-none">{s.value}</span>
                    <span className="font-mono text-[0.5rem] tracking-widest uppercase text-text-500/25">{s.label}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Lists ── */}
            <section aria-labelledby="lists-heading" className="flex flex-col gap-4">
              <h3
                id="lists-heading"
                className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-text-500/30"
              >
                Lists
              </h3>
              <ul className="flex flex-col gap-px bg-text-500/8" role="list">
                {project.lists.map((list) => (
                  <li
                    key={list.name}
                    role="listitem"
                    className="flex items-center justify-between bg-primary-500 px-4 py-3"
                  >
                    <span className="font-mono text-[0.6rem] tracking-widest uppercase text-text-500/45">
                      {list.name}
                    </span>
                    <span className="font-mono text-[0.55rem] tracking-widest text-text-500/25 border border-text-500/10 px-2 py-0.5">
                      {list.count}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* ── Team ── */}
            <section aria-labelledby="team-heading" className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h3
                  id="team-heading"
                  className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-text-500/30"
                >
                  Team
                </h3>
                <button
                  aria-label="Add team member"
                  className="font-mono text-[0.55rem] tracking-widest uppercase text-text-500/25 hover:text-text-500/55 border border-text-500/12 hover:border-text-500/30 px-3 py-1.5 transition-all"
                >
                  + Add
                </button>
              </div>

              <ul className="flex flex-col gap-2" role="list">
                {project.members.map((m) => (
                  <li
                    key={m.initials}
                    role="listitem"
                    className="flex items-center gap-3 bg-secondary-500 border border-text-500/8 px-4 py-3"
                  >
                    <Avatar initials={m.initials} name={m.name} size="md" />
                    <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                      <span className="text-sm font-semibold text-text-500/75 truncate">{m.name}</span>
                      <span className="font-mono text-[0.5rem] tracking-widest uppercase text-text-500/25">{m.role}</span>
                    </div>
                    {m.initials === project.owner.initials && (
                      <span className="font-mono text-[0.5rem] tracking-widest uppercase text-text-500/30 border border-text-500/12 px-2 py-0.5 shrink-0">
                        Owner
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </section>

            {/* ── Details ── */}
            <section aria-labelledby="details-heading" className="flex flex-col gap-4">
              <h3
                id="details-heading"
                className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-text-500/30"
              >
                Details
              </h3>
              <dl className="flex flex-col gap-px bg-text-500/8">
                {[
                  { label: "Status",     value: project.status     },
                  { label: "Visibility", value: project.visibility },
                  { label: "Due Date",   value: project.dueDate    },
                  { label: "Created",    value: project.created    },
                ].map((d) => (
                  <div
                    key={d.label}
                    className="flex items-center justify-between bg-primary-500 px-4 py-3"
                  >
                    <dt className="font-mono text-[0.55rem] tracking-widest uppercase text-text-500/25">
                      {d.label}
                    </dt>
                    <dd className="font-mono text-[0.6rem] tracking-widest uppercase text-text-500/50">
                      {d.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

          </aside>
        </div>
      </div>
    </div>
  );
}