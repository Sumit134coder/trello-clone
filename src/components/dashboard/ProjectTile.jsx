import React from "react";
import Avatar from "../common/Avatar";
import Link from "next/link";
import ProgressBar from "../common/ProgressBar";
import { progressPct } from "@/lib/utils/helpers";

const ProjectTile = ({ projectInfo = {} }) => {
  const pct = progressPct(projectInfo.done, projectInfo.tasks);

  return (
    <Link
      href={`/projects/${projectInfo?.slug}`}
      className="
                    group flex flex-col justify-between gap-6
                    bg-secondary-500 border border-text-500/8
                    hover:border-text-500/30 hover:bg-secondary-500/70
                    p-6 transition-all duration-200
                  "
    >
      {/* Top */}
      <div className="flex flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-bold uppercase tracking-tight text-text-500 leading-tight group-hover:text-text-500 line-clamp-2">
            {projectInfo?.name}
          </h3>
          {pct === 100 && (
            <span className="shrink-0 font-mono text-[0.5rem] tracking-widest uppercase text-text-500/40 border border-text-500/15 px-2 py-0.5 mt-0.5">
              Done
            </span>
          )}
        </div>
        <p className="font-mono text-[0.6rem] tracking-widest uppercase text-text-500/25">
          Updated {projectInfo?.updated}
        </p>
      </div>

      {/* Progress bar */}
      <div className="flex flex-col gap-2">
        <ProgressBar percentage={pct} />
        <div className="flex items-center justify-between">
          <span className="font-mono text-[0.55rem] tracking-widest uppercase text-text-500/25">
            {projectInfo?.done}/{projectInfo?.tasks} tasks
          </span>
          <span className="font-mono text-[0.55rem] tracking-widest uppercase text-text-500/35">
            {pct}%
          </span>
        </div>
      </div>

      {/* Members */}
      <div className="flex items-center gap-2 pt-1 border-t border-text-500/8">
        <div className="flex">
          {projectInfo?.members.map((m) => (
            <Avatar key={m} initials={m.initials} />
          ))}
        </div>
        <span className="font-mono text-[0.5rem] tracking-widest uppercase text-text-500/20 ml-1">
          {projectInfo?.members.length}{" "}
          {projectInfo?.members.length === 1 ? "member" : "members"}
        </span>
      </div>
    </Link>
  );
};

export default ProjectTile;
