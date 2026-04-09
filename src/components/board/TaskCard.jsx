import Link from "next/link";
import AvatarStack from "../common/AvatarStack";

const priorityConfig = {
  High: {
    label: "High",
    dot: "bg-text-500",
    text: "text-text-500",
    border: "border-text-500/40",
  },
  Med: {
    label: "Med",
    dot: "bg-text-500/50",
    text: "text-text-500/55",
    border: "border-text-500/22",
  },
  Low: {
    label: "Low",
    dot: "bg-text-500/20",
    text: "text-text-500/30",
    border: "border-text-500/10",
  },
};

const TaskCard = ({ card, listName, projectSlug }) => {
  const p = priorityConfig[card.priority];
  const isDone = listName === "Done";

  return (
    <Link
      href={`/projects/${projectSlug}/tasks/${card.id}`}
      draggable
      aria-label={`Task: ${card.title}`}
      className={`
        group flex flex-col gap-3.5
        bg-primary-500 border border-text-500/8
        hover:border-text-500/30
        p-4
        transition-all duration-200
        cursor-pointer
        ${isDone ? "opacity-50 hover:opacity-75" : ""}
      `}
    >
      {/* Tags */}
      {card.tags && card.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {card.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[0.5rem] tracking-widest uppercase text-text-500/30 border border-text-500/10 px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Title */}
      <h4
        className={`
        text-sm font-bold leading-snug
        ${isDone ? "line-through decoration-text-500/20 text-text-500/40" : "text-text-500/85 group-hover:text-text-500"}
        transition-colors
      `}
      >
        {card.title}
      </h4>

      {/* Description */}
      <p className="text-xs text-text-500/35 font-light leading-relaxed line-clamp-2">
        {card.description}
      </p>

      {/* Bottom row */}
      <div className="flex items-center justify-between gap-2 pt-1 border-t border-text-500/8">
        {/* Priority */}
        <span
          className={`
          inline-flex items-center gap-1.5
          font-mono text-[0.5rem] tracking-widest uppercase
          border px-2 py-0.5
          ${p.text} ${p.border}
        `}
        >
          <span className={`w-1 h-1 rounded-full ${p.dot}`} aria-hidden />
          {p.label}
        </span>

        <div className="flex items-center gap-3">
          {/* Due date */}
          {card.due && (
            <span className="font-mono text-[0.5rem] tracking-widest uppercase text-text-500/25">
              {card.due}
            </span>
          )}

          {/* Attachments */}
          {card.attachments && (
            <span className="flex items-center gap-1 font-mono text-[0.5rem] tracking-widest uppercase text-text-500/25">
              <svg
                width="9"
                height="9"
                viewBox="0 0 10 10"
                fill="none"
                aria-hidden
              >
                <path
                  d="M9 5L5 9C3.9 10.1 2.1 10.1 1 9C-.1 7.9-.1 6.1 1 5L5.5 0.5C6.3-.3 7.5-.3 8.3.5C9.1 1.3 9.1 2.5 8.3 3.3L3.8 7.8C3.4 8.2 2.7 8.2 2.3 7.8C1.9 7.4 1.9 6.8 2.3 6.4L6 2.5"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="square"
                />
              </svg>
              {card.attachments}
            </span>
          )}

          {/* Comments */}
          {card.comments && (
            <span className="flex items-center gap-1 font-mono text-[0.5rem] tracking-widest uppercase text-text-500/25">
              <svg
                width="9"
                height="9"
                viewBox="0 0 10 10"
                fill="none"
                aria-hidden
              >
                <path
                  d="M1 1h8v6H6L4 9V7H1V1Z"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinejoin="round"
                />
              </svg>
              {card.comments}
            </span>
          )}

          {/* Assignees */}
          {card.assignees.length > 0 && (
            <AvatarStack members={card.assignees} />
          )}
        </div>
      </div>
    </Link>
  );
};

export default TaskCard;
