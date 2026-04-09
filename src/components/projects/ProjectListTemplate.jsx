import React from "react";

const ProjectListTemplate = ({ template, onTemplateSelect }) => {
  return (
    <button
      key={template.name}
      type="button"
      onClick={() => onTemplateSelect(template)}
      className="flex flex-col gap-3 text-left
                      border border-text-500/10
                      hover:border-text-500/35 hover:bg-secondary-500/60
                      px-5 py-4
                      transition-all duration-200 group
                    "
    >
      <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-text-500/35 group-hover:text-text-500/60 transition-colors">
        {template.name}
      </span>
      <div className="flex flex-wrap gap-1.5">
        {template.lists.map((l) => (
          <span
            key={l}
            className="font-mono text-[0.5rem] tracking-widest uppercase text-text-500/20 border border-text-500/10 px-1.5 py-0.5"
          >
            {l}
          </span>
        ))}
      </div>
    </button>
  );
};

export default ProjectListTemplate;
