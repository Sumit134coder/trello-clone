import FormError from "../common/inputs/FormError";

const priorityConfig = {
  High: {
    dot: "bg-text-500",
    text: "text-text-500",
    border: "border-text-500/40",
    bg: "bg-text-500/8",
  },
  Med: {
    dot: "bg-text-500/55",
    text: "text-text-500/60",
    border: "border-text-500/22",
    bg: "bg-text-500/4",
  },
  Low: {
    dot: "bg-text-500/22",
    text: "text-text-500/35",
    border: "border-text-500/12",
    bg: "bg-transparent",
  },
};

const TaskPrioritySelector = ({ activeLabel = "", setValue , fieldError }) => {

    console.log({activeLabel})

  return (
    <div>
      <label className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-text-500/40">
        Priority
      </label>
      <div className="flex gap-3 mb-2" role="group"  aria-label="Select priority">
        {["High", "Med", "Low"].map((p) => {
          const cfg = priorityConfig[p];
          const isActive = activeLabel === p;
          return (
            <button
              key={p}
              type="button"
              aria-pressed={isActive}
              onClick={() => setValue("priority", p)}
              className={`
                      flex-1 flex items-center justify-center gap-2
                      border py-3
                      font-mono text-[0.6rem] tracking-widest uppercase
                      transition-all duration-150
                      ${
                        isActive
                          ? `${cfg.bg} ${cfg.text} ${cfg.border}`
                          : "border-text-500/10 text-text-500/25 hover:border-text-500/25 hover:text-text-500/45"
                      }
                    `}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${isActive ? cfg.dot : "bg-text-500/20"}`}
                aria-hidden
              />
              {p}
            </button>
          );
        })}
      </div>
      {
        fieldError && <FormError message={fieldError} />
      }
    </div>
  );
};

export default TaskPrioritySelector;
