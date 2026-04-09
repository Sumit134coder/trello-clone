
const ProjectListChip = ({list , index, onRemove}) => {
  return (
    <div
      key={list}
      className="flex items-center gap-3 bg-secondary-500 border border-text-500/12 px-4 py-3 group"
    >
      <span className="font-mono text-[0.55rem] text-text-500/25 shrink-0">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="text-sm font-medium text-text-500/70">{list}</span>
      <button
        type="button"
        aria-label={`Remove ${list} list`}
        onClick={() => onRemove && onRemove(list)}
        className="text-text-500/20 hover:text-text-500/60 transition-colors ml-1 font-mono text-xs leading-none"
      >
        ×
      </button>
    </div>
  );
};

export default ProjectListChip;
