import React from "react";
import TaskCard from "./TaskCard";

const ActivitySection = ({ label, count, tasks: sectionTasks }) => {
  return (
    <section
      aria-labelledby={`section-${label.replace(/\s+/g, "-").toLowerCase()}`}
    >
      {/* Section header */}
      <header className="flex items-center gap-4 mb-5">
        <h3
          id={`section-${label.replace(/\s+/g, "-").toLowerCase()}`}
          className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-text-500/35"
        >
          {label}
        </h3>
        <span className="font-mono text-[0.55rem] tracking-widest text-text-500/20 border border-text-500/12 px-2 py-0.5">
          {count}
        </span>
        <div className="flex-1 border-t border-text-500/8" />
      </header>

      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {sectionTasks.map((t) => (
          <TaskCard key={t.title} {...t} />
        ))}
      </div>
    </section>
  );
};

export default ActivitySection;
