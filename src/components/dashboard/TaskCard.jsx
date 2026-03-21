import React from "react";
import AvatarStack from "../common/AvatarStack";

const statusStyle = {
  Done: "text-text-500/40  border-text-500/15",
  "In Review": "text-text-500/70  border-text-500/30",
  "In Progress": "text-text-500     border-text-500/50",
  Blocked: "text-text-500/90  border-text-500",
};

const TaskCard = ({ title, description, project, status, assignees }) => {
  return (
    <article
      className="
      group flex flex-col gap-3 p-6
      bg-secondary-500 border border-text-500/8
      hover:border-text-500/25 hover:bg-secondary-500/80
      transition-all duration-200 cursor-pointer
    "
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1 flex-1 min-w-0">
          <span className="font-mono text-[0.55rem] tracking-[0.2em] uppercase text-text-500/30">
            {project}
          </span>
          <h4 className="text-sm font-bold text-text-500 leading-snug group-hover:text-text-500 line-clamp-1">
            {title}
          </h4>
        </div>
        <span
          className={`
          shrink-0 font-mono text-[0.55rem] tracking-widest uppercase
          border px-2 py-1 ${statusStyle[status] ?? "text-text-500/40 border-text-500/15"}
        `}
        >
          {status}
        </span>
      </div>

      {/* Description */}
      <p className="text-xs text-text-500/40 font-light leading-relaxed line-clamp-2">
        {description}
      </p>

      {/* Assignees */}
      <div className="flex items-center justify-between mt-1">
        <AvatarStack members={assignees} />
        <span className="font-mono text-[0.55rem] tracking-widest uppercase text-text-500/20">
          {assignees.length} {assignees.length === 1 ? "person" : "people"}
        </span>
      </div>
    </article>
  );
};

export default TaskCard;
