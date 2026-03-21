"use client";
import { useMemo } from "react";
import { getGreetingText } from "@/lib/utils/dashboardHelpers";

const DashboardGreetings = () => {
  const firstName = "Ada"; //TODO: has to be dynamic
  const dateObj = useMemo(() => new Date(), []);
  const hours = dateObj.getHours();
  const dayString = dateObj.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  const greeting = getGreetingText(hours);

  return (
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 border-b border-text-500/8 pb-10">
      <div>
        <p className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-text-500/30 mb-3">
          For You
        </p>
        <h1 className="text-[clamp(2.5rem,5vw,5rem)] font-black uppercase leading-none tracking-tight text-text-500">
          {greeting},
          <br />
          <span className="text-text-500/25">{firstName}.</span>
        </h1>
      </div>
      <div className="flex items-center gap-3 pb-1">
        <span className="font-mono text-[0.6rem] tracking-widest uppercase text-text-500/25">
          {dayString}
        </span>
      </div>
    </div>
  );
};

export default DashboardGreetings;
