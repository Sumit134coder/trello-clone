import React from "react";
import ProjectListChip from "./ProjectListChip";

const defaultLists = ["Backlog", "In Progress", "Review", "Done"];

const ProjectListSelector = () => {
  return (
    <div>
      <p className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-text-500/30 mb-4">
        Default Lists
      </p>
      <div className="flex flex-wrap gap-3">
        {defaultLists.map((list, i) => (
          <ProjectListChip key={i} list={list} index={i} />
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
  );
};

export default ProjectListSelector;
