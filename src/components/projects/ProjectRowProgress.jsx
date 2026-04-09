import ProgressBar from "../common/ProgressBar";
import { progressPct } from "@/lib/utils/helpers";

const ProjectRowProgress = ({doneTask , totalTask}) => {

    const pct = progressPct(doneTask, totalTask);

  return (
    <div className="flex flex-col gap-2 w-full lg:w-40 shrink-0">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[0.55rem] tracking-widest uppercase text-text-500/25">
          {doneTask}/{totalTask} tasks
        </span>
        <span className="font-mono text-[0.55rem] tracking-widest uppercase text-text-500/40 font-semibold">
          {pct}%
        </span>
      </div>
      <ProgressBar percentage={pct} />
    </div>
  );
};

export default ProjectRowProgress;
