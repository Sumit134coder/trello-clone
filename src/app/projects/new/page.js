import Link from "next/link";

export const metadata = {
  title: "New Project — TaskFlow",
  description: "Create a new TaskFlow project.",
};

// ── Mock team members for the invite picker ───────────────────────────────────
const teamMembers = [
  { initials: "JD", name: "Jordan Davis",  role: "Designer"         },
  { initials: "SR", name: "Sam Rivera",    role: "Product Manager"  },
  { initials: "MK", name: "Mo Khan",       role: "Engineer"         },
  { initials: "TW", name: "Taylor Wong",   role: "Engineer"         },
];

const defaultLists = ["Backlog", "In Progress", "Review", "Done"];

// ── Sub-components ────────────────────────────────────────────────────────────

function FieldLabel({
  htmlFor,
  children,
  optional = false,
}) {
  return (
    <div className="flex items-center justify-between mb-2">
      <label
        htmlFor={htmlFor}
        className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-text-500/40"
      >
        {children}
      </label>
      {optional && (
        <span className="font-mono text-[0.55rem] tracking-widest uppercase text-text-500/20">
          Optional
        </span>
      )}
    </div>
  );
}

function InputBase({ className = "", ...props }) {
  return (
    <input
      className={`
        w-full bg-secondary-500 border border-text-500/12
        text-text-500 placeholder:text-text-500/20
        px-5 py-4 text-sm font-light rounded-none
        outline-none
        focus:border-text-500/50 focus:bg-secondary-500/80
        hover:border-text-500/22
        transition-all duration-200
        ${className}
      `}
      {...props}
    />
  );
}

function TextAreaBase({ className = "", ...props }) {
  return (
    <textarea
      rows={4}
      className={`
        w-full bg-secondary-500 border border-text-500/12
        text-text-500 placeholder:text-text-500/20
        px-5 py-4 text-sm font-light rounded-none resize-none
        outline-none
        focus:border-text-500/50 focus:bg-secondary-500/80
        hover:border-text-500/22
        transition-all duration-200
        ${className}
      `}
      {...props}
    />
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

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
            <span className="group-hover:-translate-x-0.5 transition-transform duration-200 inline-block">←</span>
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

        {/* ── FORM ── */}
        <form
          method="POST"
          action="/api/projects/create"
          noValidate
          aria-label="Create new project form"
          className="flex flex-col gap-14"
        >

          {/* ════════════════════════════════════════
              SECTION 1 — Basics
          ════════════════════════════════════════ */}
          <fieldset className="flex flex-col gap-8 border-none p-0 m-0">
            <legend className="flex items-center gap-4 w-full mb-2">
              <span className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-text-500/25">
                01
              </span>
              <span className="text-xl font-black uppercase tracking-tight text-text-500">
                Basics
              </span>
              <div className="flex-1 border-t border-text-500/8" />
            </legend>

            {/* Project name */}
            <div>
              <FieldLabel htmlFor="project-name">Project Name</FieldLabel>
              <InputBase
                id="project-name"
                name="name"
                type="text"
                required
                maxLength={80}
                placeholder="e.g. Brand Redesign, API v2 Launch…"
                autoComplete="off"
                className="text-base md:text-lg font-semibold"
              />
              <p className="mt-2 font-mono text-[0.58rem] tracking-widest uppercase text-text-500/20">
                Keep it short and specific. Max 80 characters.
              </p>
            </div>

            {/* Description */}
            <div>
              <FieldLabel htmlFor="project-description" optional>
                Description
              </FieldLabel>
              <TextAreaBase
                id="project-description"
                name="description"
                placeholder="What is this project about? What does success look like?"
              />
            </div>

            {/* Slug preview */}
            <div>
              <FieldLabel htmlFor="project-slug" optional>
                Project URL Slug
              </FieldLabel>
              <div className="flex items-stretch">
                <span className="
                  inline-flex items-center px-4 bg-primary-500
                  border border-r-0 border-text-500/12
                  font-mono text-[0.65rem] tracking-widest text-text-500/25
                  select-none shrink-0
                ">
                  taskflow.app/p/
                </span>
                <InputBase
                  id="project-slug"
                  name="slug"
                  type="text"
                  placeholder="brand-redesign"
                  pattern="[a-z0-9-]+"
                  autoComplete="off"
                  className="border-l-0 font-mono text-sm"
                />
              </div>
              <p className="mt-2 font-mono text-[0.58rem] tracking-widest uppercase text-text-500/20">
                Lowercase letters, numbers, and hyphens only. Auto-generated if left blank.
              </p>
            </div>
          </fieldset>

          {/* ════════════════════════════════════════
              SECTION 2 — Workflow Lists
          ════════════════════════════════════════ */}
          <fieldset className="flex flex-col gap-8 border-none p-0 m-0">
            <legend className="flex items-center gap-4 w-full mb-2">
              <span className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-text-500/25">
                02
              </span>
              <span className="text-xl font-black uppercase tracking-tight text-text-500">
                Workflow Lists
              </span>
              <div className="flex-1 border-t border-text-500/8" />
            </legend>

            <p className="text-sm text-text-500/40 font-light leading-relaxed -mt-2">
              Lists represent stages in your workflow — tasks move left to right as they progress.
              You can always add, rename, or remove lists later.
            </p>

            {/* Default list chips */}
            <div>
              <p className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-text-500/30 mb-4">
                Default Lists
              </p>
              <div className="flex flex-wrap gap-3">
                {defaultLists.map((list, i) => (
                  <div
                    key={list}
                    className="flex items-center gap-3 bg-secondary-500 border border-text-500/12 px-4 py-3 group"
                  >
                    <span className="font-mono text-[0.55rem] text-text-500/25 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-medium text-text-500/70">{list}</span>
                    <button
                      type="button"
                      aria-label={`Remove ${list} list`}
                      className="text-text-500/20 hover:text-text-500/60 transition-colors ml-1 font-mono text-xs leading-none"
                    >
                      ×
                    </button>
                  </div>
                ))}

                {/* Add list button */}
                <button
                  type="button"
                  aria-label="Add a new list"
                  className="
                    flex items-center gap-2
                    border border-dashed border-text-500/15
                    hover:border-text-500/35 hover:bg-secondary-500/50
                    px-4 py-3
                    font-mono text-[0.6rem] tracking-[0.2em] uppercase text-text-500/30
                    hover:text-text-500/55
                    transition-all duration-200
                  "
                >
                  <span className="text-lg leading-none font-light">+</span>
                  Add List
                </button>
              </div>
            </div>

            {/* Template picker */}
            <div>
              <p className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-text-500/30 mb-4">
                Or Start From a Template
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { name: "Kanban",     lists: ["To Do", "In Progress", "Done"]                        },
                  { name: "Sprint",     lists: ["Backlog", "Sprint", "Review", "Done"]                 },
                  { name: "Bug Tracker",lists: ["Reported", "Confirmed", "In Fix", "Resolved"]         },
                  { name: "Content",    lists: ["Ideas", "Drafting", "Editing", "Published"]           },
                ].map((tpl) => (
                  <button
                    key={tpl.name}
                    type="button"
                    className="
                      flex flex-col gap-3 text-left
                      border border-text-500/10
                      hover:border-text-500/35 hover:bg-secondary-500/60
                      px-5 py-4
                      transition-all duration-200 group
                    "
                  >
                    <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-text-500/35 group-hover:text-text-500/60 transition-colors">
                      {tpl.name}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {tpl.lists.map((l) => (
                        <span
                          key={l}
                          className="font-mono text-[0.5rem] tracking-widest uppercase text-text-500/20 border border-text-500/10 px-1.5 py-0.5"
                        >
                          {l}
                        </span>
                      ))}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </fieldset>

          {/* ════════════════════════════════════════
              SECTION 3 — Team
          ════════════════════════════════════════ */}
          <fieldset className="flex flex-col gap-8 border-none p-0 m-0">
            <legend className="flex items-center gap-4 w-full mb-2">
              <span className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-text-500/25">
                03
              </span>
              <span className="text-xl font-black uppercase tracking-tight text-text-500">
                Team
              </span>
              <div className="flex-1 border-t border-text-500/8" />
            </legend>

            <p className="text-sm text-text-500/40 font-light leading-relaxed -mt-2">
              Add team members now or invite them later from inside the project.
            </p>

            {/* Member list */}
            <div className="flex flex-col gap-2">
              {teamMembers.map((m) => (
                <label
                  key={m.initials}
                  className="
                    flex items-center justify-between gap-5
                    bg-secondary-500 border border-text-500/8
                    hover:border-text-500/25
                    px-5 py-4
                    cursor-pointer group
                    transition-all duration-200
                    has-[:checked]:border-text-500/35
                    has-[:checked]:bg-secondary-500/80
                  "
                >
                  <div className="flex items-center gap-4 min-w-0">
                    {/* Avatar */}
                    <span className="
                      w-9 h-9 rounded-full shrink-0 flex items-center justify-center
                      bg-primary-500 border border-text-500/20
                      font-mono text-[0.6rem] tracking-wider uppercase text-text-500/60
                    ">
                      {m.initials}
                    </span>
                    {/* Name + role */}
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <span className="text-sm font-semibold text-text-500/80 group-hover:text-text-500 transition-colors truncate">
                        {m.name}
                      </span>
                      <span className="font-mono text-[0.55rem] tracking-widest uppercase text-text-500/25">
                        {m.role}
                      </span>
                    </div>
                  </div>

                  {/* Checkbox */}
                  <input
                    type="checkbox"
                    name="members"
                    value={m.initials}
                    aria-label={`Add ${m.name} to project`}
                    className="
                      w-4 h-4 shrink-0 rounded-none
                      border border-text-500/20
                      bg-primary-500 accent-text-500
                      cursor-pointer
                    "
                  />
                </label>
              ))}
            </div>

            {/* Invite by email */}
            <div>
              <FieldLabel htmlFor="invite-email" optional>
                Invite by Email
              </FieldLabel>
              <div className="flex gap-3">
                <InputBase
                  id="invite-email"
                  name="invite_email"
                  type="email"
                  placeholder="colleague@example.com"
                  autoComplete="off"
                  className="flex-1"
                />
                <button
                  type="button"
                  aria-label="Send invite"
                  className="
                    shrink-0 border border-text-500/20 text-text-500/50
                    font-mono text-[0.6rem] tracking-[0.2em] uppercase
                    px-6 py-4
                    hover:border-text-500/50 hover:text-text-500
                    hover:bg-secondary-500
                    transition-all duration-200
                  "
                >
                  Send Invite
                </button>
              </div>
            </div>
          </fieldset>

          {/* ════════════════════════════════════════
              SECTION 4 — Settings
          ════════════════════════════════════════ */}
          <fieldset className="flex flex-col gap-8 border-none p-0 m-0">
            <legend className="flex items-center gap-4 w-full mb-2">
              <span className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-text-500/25">
                04
              </span>
              <span className="text-xl font-black uppercase tracking-tight text-text-500">
                Settings
              </span>
              <div className="flex-1 border-t border-text-500/8" />
            </legend>

            <div className="grid sm:grid-cols-2 gap-6">

              {/* Due date */}
              <div>
                <FieldLabel htmlFor="project-due" optional>
                  Target Due Date
                </FieldLabel>
                <InputBase
                  id="project-due"
                  name="due_date"
                  type="date"
                  className="font-mono text-sm text-text-500/60 [color-scheme:dark]"
                />
              </div>

              {/* Visibility */}
              <div>
                <FieldLabel htmlFor="project-visibility">
                  Visibility
                </FieldLabel>
                <select
                  id="project-visibility"
                  name="visibility"
                  aria-label="Project visibility"
                  className="
                    w-full bg-secondary-500 border border-text-500/12
                    text-text-500/60 font-mono text-sm
                    px-5 py-4 outline-none rounded-none
                    hover:border-text-500/30 focus:border-text-500/50
                    transition-all cursor-pointer
                  "
                >
                  <option value="team">Team — members only</option>
                  <option value="workspace">Workspace — everyone</option>
                  <option value="private">Private — only me</option>
                </select>
              </div>
            </div>

            {/* Toggle options */}
            <div className="flex flex-col gap-3">
              {[
                { id: "notify-members",  label: "Notify members when added",    defaultChecked: true  },
                { id: "activity-feed",   label: "Enable activity feed",          defaultChecked: true  },
                { id: "due-reminders",   label: "Send due-date reminders",       defaultChecked: false },
              ].map((opt) => (
                <label
                  key={opt.id}
                  htmlFor={opt.id}
                  className="flex items-center justify-between gap-5 border border-text-500/8 hover:border-text-500/22 px-5 py-4 cursor-pointer transition-all duration-200 group"
                >
                  <span className="text-sm text-text-500/55 font-light group-hover:text-text-500/75 transition-colors">
                    {opt.label}
                  </span>
                  <input
                    id={opt.id}
                    name={opt.id}
                    type="checkbox"
                    defaultChecked={opt.defaultChecked}
                    className="
                      w-4 h-4 shrink-0 rounded-none
                      border border-text-500/20
                      bg-primary-500 accent-text-500
                      cursor-pointer
                    "
                  />
                </label>
              ))}
            </div>
          </fieldset>

          {/* ════════════════════════════════════════
              ACTIONS
          ════════════════════════════════════════ */}
          <div className="border-t border-text-500/8 pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <p className="text-xs text-text-500/25 font-light font-mono tracking-wide max-w-sm">
              Your project will be created instantly. You can edit all of these settings later from the project page.
            </p>

            <div className="flex items-center gap-4 shrink-0">
              {/* Cancel */}
              <Link
                href="/projects"
                className="
                  font-mono text-[0.65rem] tracking-[0.2em] uppercase
                  text-text-500/30 hover:text-text-500/60
                  border border-text-500/12 hover:border-text-500/30
                  px-7 py-4
                  transition-all duration-200
                "
              >
                Cancel
              </Link>

              {/* Submit */}
              <button
                type="submit"
                className="
                  bg-text-500 text-primary-500
                  font-black text-xs tracking-[0.25em] uppercase
                  px-10 py-4
                  hover:opacity-90 active:scale-[0.98]
                  transition-all duration-150
                  cursor-pointer
                "
              >
                Create Project →
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
}