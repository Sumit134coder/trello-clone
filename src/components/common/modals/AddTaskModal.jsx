"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// ── Types ───────────────────────────────────────────────────────────────────

// ── Mock Data ─────────────────────────────────────────────────────────────────

const lists = ["Backlog", "Design", "Review", "Done"];

const members = [
  { initials: "AL", name: "Ada Lovelace",  role: "Product Lead"    },
  { initials: "JD", name: "Jordan Davis",  role: "Designer"        },
  { initials: "SR", name: "Sam Rivera",    role: "Product Manager" },
  { initials: "MK", name: "Mo Khan",       role: "Engineer"        },
];

const availableTags = ["Design", "Figma", "Tokens", "Icons", "Research", "Docs", "Strategy", "Dev", "Bug", "Feature"];

// ── Helpers ───────────────────────────────────────────────────────────────────

const priorityConfig = {
  High: { dot: "bg-text-500",    text: "text-text-500",    border: "border-text-500/40", bg: "bg-text-500/8"  },
  Med:  { dot: "bg-text-500/55", text: "text-text-500/60", border: "border-text-500/22", bg: "bg-text-500/4"  },
  Low:  { dot: "bg-text-500/22", text: "text-text-500/35", border: "border-text-500/12", bg: "bg-transparent" },
};

// ── Sub-components ────────────────────────────────────────────────────────────

function FieldLabel({
  children,
  optional = false,
  htmlFor,
}) {
  return (
    <div className="flex items-center justify-between mb-2">
      <label
        htmlFor={htmlFor}
        className="font-mono text-[0.62rem] tracking-[0.22em] uppercase text-text-500/40"
      >
        {children}
      </label>
      {optional && (
        <span className="font-mono text-[0.52rem] tracking-widest uppercase text-text-500/20">
          Optional
        </span>
      )}
    </div>
  );
}

function Avatar({ initials, name }) {
  return (
    <abbr
      title={name}
      className="
        no-underline flex items-center justify-center shrink-0
        w-7 h-7 rounded-full
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

// ── Modal ─────────────────────────────────────────────────────────────────────

export function AddTaskModal({
  isOpen,
  onClose,
  defaultList = "Backlog",}
) {
  const [selectedList,     setSelectedList]     = useState(defaultList);
  const [priority,         setPriority]         = useState("Med");
  const [selectedMembers,  setSelectedMembers]  = useState([]);
  const [selectedTags,     setSelectedTags]     = useState([]);
  const [title,            setTitle]            = useState("");
  const [description,      setDescription]      = useState("");
  const [dueDate,          setDueDate]          = useState("");
  const [showMemberPicker, setShowMemberPicker] = useState(false);
  const [showTagPicker,    setShowTagPicker]    = useState(false);
  const [titleError,       setTitleError]       = useState(false);

  const dialogRef  = useRef(null);
  const titleRef   = useRef(null);

  // Open / close the native <dialog>
  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    if (isOpen) {
      el.showModal();
      setTimeout(() => titleRef.current?.focus(), 50);
    } else {
      el.close();
    }
  }, [isOpen]);

  // Close on backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === dialogRef.current) onClose();
  };

  // Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const toggleMember = (initials) =>
    setSelectedMembers((prev) =>
      prev.includes(initials) ? prev.filter((m) => m !== initials) : [...prev, initials]
    );

  const toggleTag = (tag) =>
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setTitleError(true);
      titleRef.current?.focus();
      return;
    }
    // TODO: wire to API
    console.log({ title, description, selectedList, priority, selectedMembers, selectedTags, dueDate });
    onClose();
  };

  const resetForm = () => {
    setTitle(""); setDescription(""); setDueDate("");
    setSelectedList(defaultList); setPriority("Med");
    setSelectedMembers([]); setSelectedTags([]);
    setTitleError(false); setShowMemberPicker(false); setShowTagPicker(false);
  };

  const handleClose = () => { resetForm(); onClose(); };

  if (!isOpen) return null;

  return (
    <dialog
      ref={dialogRef}
      onClick={handleBackdropClick}
      aria-modal="true"
      aria-labelledby="modal-title"
      className="
        fixed inset-0 z-50 m-0 p-0 w-full h-full max-w-none max-h-none
        bg-transparent
        backdrop:bg-primary-500/80 backdrop:backdrop-blur-sm
        open:flex open:items-center open:justify-center
      "
    >
      {/* Modal panel */}
      <div
        className="
          relative w-full max-w-2xl max-h-[90dvh]
          bg-secondary-500 border border-text-500/12
          flex flex-col
          overflow-hidden
          mx-4
        "
        onClick={(e) => e.stopPropagation()}
      >

        {/* ── Modal Header ── */}
        <header className="flex items-center justify-between px-7 pt-7 pb-5 border-b border-text-500/8 shrink-0">
          <div className="flex flex-col gap-1.5">
            <p className="font-mono text-[0.55rem] tracking-[0.25em] uppercase text-text-500/30">
              New Task
            </p>
            <h2
              id="modal-title"
              className="text-xl font-black uppercase tracking-tight text-text-500"
            >
              Add Card
            </h2>
          </div>

          {/* Close */}
          <button
            onClick={handleClose}
            aria-label="Close modal"
            className="
              w-9 h-9 flex items-center justify-center
              border border-text-500/12 text-text-500/30
              hover:border-text-500/40 hover:text-text-500/70
              font-mono text-lg leading-none
              transition-all duration-150
            "
          >
            ×
          </button>
        </header>

        {/* ── Form body (scrollable) ── */}
        <form
          id="add-card-form"
          onSubmit={handleSubmit}
          noValidate
          aria-label="Add card form"
          className="flex-1 overflow-y-auto px-7 py-6 flex flex-col gap-6"
        >

          {/* Title */}
          <div>
            <FieldLabel htmlFor="card-title">Task Title</FieldLabel>
            <input
              ref={titleRef}
              id="card-title"
              name="title"
              type="text"
              required
              maxLength={120}
              value={title}
              onChange={(e) => { setTitle(e.target.value); setTitleError(false); }}
              placeholder="What needs to be done?"
              aria-invalid={titleError}
              aria-describedby={titleError ? "title-error" : undefined}
              className={`
                w-full bg-primary-500 border
                text-text-500 placeholder:text-text-500/20
                px-5 py-4 text-sm font-semibold rounded-none
                outline-none transition-all duration-200
                ${titleError
                  ? "border-text-500/60 focus:border-text-500"
                  : "border-text-500/12 hover:border-text-500/22 focus:border-text-500/50"
                }
              `}
            />
            {titleError && (
              <p id="title-error" role="alert" className="mt-2 font-mono text-[0.58rem] tracking-widest uppercase text-text-500/60">
                A title is required to create a card.
              </p>
            )}
          </div>

          {/* Description */}
          <div>
            <FieldLabel htmlFor="card-description" optional>Description</FieldLabel>
            <textarea
              id="card-description"
              name="description"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add more context, acceptance criteria, or notes…"
              className="
                w-full bg-primary-500 border border-text-500/12
                text-text-500 placeholder:text-text-500/20
                px-5 py-4 text-sm font-light rounded-none resize-none
                outline-none
                focus:border-text-500/50 hover:border-text-500/22
                transition-all duration-200
              "
            />
          </div>

          {/* List + Priority row */}
          <div className="grid grid-cols-2 gap-4">

            {/* List */}
            <div>
              <FieldLabel htmlFor="card-list">List</FieldLabel>
              <select
                id="card-list"
                name="list"
                value={selectedList}
                onChange={(e) => setSelectedList(e.target.value)}
                className="
                  w-full bg-primary-500 border border-text-500/12
                  text-text-500/70 font-mono text-[0.7rem] tracking-widest uppercase
                  px-4 py-4 outline-none rounded-none
                  hover:border-text-500/30 focus:border-text-500/50
                  transition-all cursor-pointer
                "
              >
                {lists.map((l) => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>
            </div>

            {/* Due date */}
            <div>
              <FieldLabel htmlFor="card-due" optional>Due Date</FieldLabel>
              <input
                id="card-due"
                name="due_date"
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="
                  w-full bg-primary-500 border border-text-500/12
                  text-text-500/60 font-mono text-sm
                  px-4 py-4 outline-none rounded-none
                  hover:border-text-500/30 focus:border-text-500/50
                  transition-all [color-scheme:dark]
                "
              />
            </div>
          </div>

          {/* Priority */}
          <div>
            <FieldLabel>Priority</FieldLabel>
            <div className="flex gap-3" role="group" aria-label="Select priority">
              {(["High", "Med", "Low"]).map((p) => {
                const cfg     = priorityConfig[p];
                const isActive = priority === p;
                return (
                  <button
                    key={p}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setPriority(p)}
                    className={`
                      flex-1 flex items-center justify-center gap-2
                      border py-3
                      font-mono text-[0.6rem] tracking-widest uppercase
                      transition-all duration-150
                      ${isActive
                        ? `${cfg.bg} ${cfg.text} ${cfg.border}`
                        : "border-text-500/10 text-text-500/25 hover:border-text-500/25 hover:text-text-500/45"
                      }
                    `}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${isActive ? cfg.dot : "bg-text-500/20"}`} aria-hidden />
                    {p}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Assignees */}
          <div>
            <FieldLabel optional>Assignees</FieldLabel>

            {/* Selected avatars + toggle */}
            <button
              type="button"
              aria-expanded={showMemberPicker}
              aria-controls="member-picker"
              onClick={() => { setShowMemberPicker((v) => !v); setShowTagPicker(false); }}
              className="
                w-full flex items-center gap-4
                bg-primary-500 border border-text-500/12
                hover:border-text-500/30
                px-5 py-3.5
                transition-all duration-200
              "
            >
              {selectedMembers.length === 0 ? (
                <span className="font-mono text-[0.6rem] tracking-widest uppercase text-text-500/25">
                  Click to assign members
                </span>
              ) : (
                <div className="flex items-center gap-3">
                  <div className="flex">
                    {selectedMembers.map((initials) => {
                      const m = members.find((x) => x.initials === initials);
                      return <Avatar key={initials} initials={initials} name={m?.name} />;
                    })}
                  </div>
                  <span className="font-mono text-[0.58rem] tracking-widest uppercase text-text-500/35">
                    {selectedMembers.length} assigned
                  </span>
                </div>
              )}
              <span className="ml-auto font-mono text-text-500/20 text-xs">
                {showMemberPicker ? "▲" : "▼"}
              </span>
            </button>

            {/* Member picker dropdown */}
            {showMemberPicker && (
              <div
                id="member-picker"
                role="group"
                aria-label="Select assignees"
                className="flex flex-col gap-px bg-text-500/8 border border-t-0 border-text-500/12"
              >
                {members.map((m) => {
                  const selected = selectedMembers.includes(m.initials);
                  return (
                    <label
                      key={m.initials}
                      className={`
                        flex items-center justify-between gap-4
                        px-5 py-3.5 cursor-pointer
                        transition-all duration-150
                        ${selected ? "bg-primary-500/80" : "bg-primary-500 hover:bg-primary-500/60"}
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <Avatar initials={m.initials} name={m.name} />
                        <div className="flex flex-col gap-0.5">
                          <span className="text-sm font-medium text-text-500/75">{m.name}</span>
                          <span className="font-mono text-[0.5rem] tracking-widest uppercase text-text-500/25">{m.role}</span>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        name="assignees"
                        value={m.initials}
                        checked={selected}
                        onChange={() => toggleMember(m.initials)}
                        aria-label={`Assign ${m.name}`}
                        className="w-4 h-4 rounded-none border border-text-500/20 bg-secondary-500 accent-text-500 cursor-pointer"
                      />
                    </label>
                  );
                })}
              </div>
            )}
          </div>

          {/* Tags */}
          <div>
            <FieldLabel optional>Tags</FieldLabel>

            <button
              type="button"
              aria-expanded={showTagPicker}
              aria-controls="tag-picker"
              onClick={() => { setShowTagPicker((v) => !v); setShowMemberPicker(false); }}
              className="
                w-full flex items-center gap-3 flex-wrap
                bg-primary-500 border border-text-500/12
                hover:border-text-500/30
                px-5 py-3.5 min-h-[52px]
                transition-all duration-200
              "
            >
              {selectedTags.length === 0 ? (
                <span className="font-mono text-[0.6rem] tracking-widest uppercase text-text-500/25">
                  Click to add tags
                </span>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {selectedTags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[0.5rem] tracking-widest uppercase text-text-500/60 border border-text-500/25 px-2.5 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <span className="ml-auto font-mono text-text-500/20 text-xs shrink-0">
                {showTagPicker ? "▲" : "▼"}
              </span>
            </button>

            {/* Tag picker */}
            {showTagPicker && (
              <div
                id="tag-picker"
                role="group"
                aria-label="Select tags"
                className="flex flex-wrap gap-2 p-4 border border-t-0 border-text-500/12 bg-primary-500/60"
              >
                {availableTags.map((tag) => {
                  const selected = selectedTags.includes(tag);
                  return (
                    <button
                      key={tag}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => toggleTag(tag)}
                      className={`
                        font-mono text-[0.55rem] tracking-widest uppercase
                        border px-3 py-1.5
                        transition-all duration-150
                        ${selected
                          ? "bg-text-500/10 text-text-500/70 border-text-500/35"
                          : "text-text-500/25 border-text-500/10 hover:border-text-500/25 hover:text-text-500/45"
                        }
                      `}
                    >
                      {selected && <span className="mr-1.5">✓</span>}
                      {tag}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

        </form>

        {/* ── Footer / Actions ── */}
        <footer className="flex items-center justify-between gap-4 px-7 py-5 border-t border-text-500/8 shrink-0 bg-secondary-500">
          <p className="font-mono text-[0.55rem] tracking-widest uppercase text-text-500/20 hidden sm:block">
            Press <kbd className="border border-text-500/15 px-1.5 py-0.5 font-mono text-[0.5rem]">Esc</kbd> to cancel
          </p>

          <div className="flex items-center gap-3 ml-auto">
            {/* Cancel */}
            <button
              type="button"
              onClick={handleClose}
              className="
                font-mono text-[0.62rem] tracking-[0.2em] uppercase
                text-text-500/30 hover:text-text-500/60
                border border-text-500/12 hover:border-text-500/30
                px-6 py-3.5
                transition-all duration-200
              "
            >
              Cancel
            </button>

            {/* Submit */}
            <button
              type="submit"
              form="add-card-form"
              className="
                bg-text-500 text-primary-500
                font-black text-[0.62rem] tracking-[0.22em] uppercase
                px-8 py-3.5
                hover:opacity-90 active:scale-[0.98]
                transition-all duration-150
                cursor-pointer
              "
            >
              Add Card →
            </button>
          </div>
        </footer>
      </div>
    </dialog>
  );
}
