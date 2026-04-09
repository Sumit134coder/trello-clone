"use client";

import Link from "next/link";

const CreateProjectActions = () => {
  return (
    <div className="border-t border-text-500/8 pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
      <p className="text-xs text-text-500/25 font-light font-mono tracking-wide max-w-sm">
        Your project will be created instantly. You can edit all of these
        settings later from the project page.
      </p>

      <div className="flex items-center gap-4 shrink-0">
        {/* Cancel */}
        <Link
          href="/projects"
          className="
                font-mono text-[0.65rem] tracking-[0.2em] uppercase
                text-text-500/30 hover:text-text-500/60
                border border-text-500/12 hover:border-text-500/30
                px-7 py-4
                transition-all duration-200
              "
        >
          Cancel
        </Link>

        {/* Submit */}
        <button
          type="submit"
          className="
                bg-text-500 text-primary-500
                font-black text-xs tracking-[0.25em] uppercase
                px-10 py-4
                hover:opacity-90 active:scale-[0.98]
                transition-all duration-150
                cursor-pointer
              "
        >
          Create Project →
        </button>
      </div>
    </div>
  );
};

export default CreateProjectActions;
