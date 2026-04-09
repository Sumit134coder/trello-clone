"use client";

import { useEffect, useRef } from "react";
import CreateTaskForm from "@/components/forms/board/CreateTaskForm";

export function AddTaskModal({ isOpen, onClose, defaultList = "Backlog" }) {
  const dialogRef = useRef(null);
  const titleRef = useRef(null);

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
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // const toggleMember = (initials) =>
  //   setSelectedMembers((prev) =>
  //     prev.includes(initials) ? prev.filter((m) => m !== initials) : [...prev, initials]
  //   );

  // const toggleTag = (tag) =>
  //   setSelectedTags((prev) =>
  //     prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
  //   );

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!title.trim()) {
  //     setTitleError(true);
  //     titleRef.current?.focus();
  //     return;
  //   }
  //   // TODO: wire to API
  //   console.log({ title, description, selectedList, priority, selectedMembers, selectedTags, dueDate });
  //   onClose();
  // };

  const handleClose = () => {
    onClose();
  };

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

        <CreateTaskForm onCancel={handleClose} />
      </div>
    </dialog>
  );
}
