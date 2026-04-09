"use client";

const AddTaskButton = ({
  openModal,
  setActiveList,
  list = null,
  variant = "default" || "column-button",
}) => {
  const handleAddTaskClick = () => {
    if (list) {
      setActiveList(list);
    } else {
      setActiveList(null);
    }
    openModal();
  };

  if (variant === "list-header") {
    return (
      <button
        aria-label={`Add task to ${list}`}
        onClick={handleAddTaskClick}
        className="
                    w-6 h-6 flex items-center justify-center
                    text-text-500/20 hover:text-text-500/55
                    border border-transparent hover:border-text-500/20
                    font-light text-base leading-none
                    transition-all duration-200 cursor-pointer
                  "
      >
        +
      </button>
    );
  }

  if (variant === "column-button") {
    return (
      <button
        aria-label={`Add a card to ${list}`}
        onClick={handleAddTaskClick}
        className="
                    w-full flex items-center gap-2 justify-center
                    border border-dashed border-text-500/10
                    hover:border-text-500/25 hover:bg-secondary-500/40
                    py-4
                    font-mono text-[0.55rem] tracking-widest uppercase text-text-500/20
                    hover:text-text-500/45
                    transition-all duration-200
                  "
      >
        <span className="text-base leading-none font-light">+</span>
        Add Card
      </button>
    );
  }

  return (
    <button
      aria-label="Add new task"
      onClick={handleAddTaskClick}
      className="
                flex items-center gap-2
                bg-text-500 text-primary-500
                font-black text-[0.6rem] tracking-[0.2em] uppercase
                px-5 py-2.5
                hover:opacity-90 active:scale-[0.98]
                transition-all duration-150
              "
    >
      + Add Task
    </button>
  );
};

export default AddTaskButton;
