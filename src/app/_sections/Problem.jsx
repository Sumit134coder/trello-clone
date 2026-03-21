import React from "react";

const Problem = () => {
  return (
    <section className="px-6 md:px-12 py-28 md:py-40 border-b border-white/10">
      <div className="max-w-350 mx-auto w-full grid md:grid-cols-[1fr_2fr] gap-16 items-start">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-text-secondary-500  mb-4">
            01 — The Problem
          </p>
          <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-black uppercase leading-none tracking-tight text-text-500">
            Chaos
            <br />
            <span className="text-text-secondary-500 ">is the</span>
            <br />
            Default.
          </h2>
        </div>

        <div className="flex flex-col gap-10 pt-2 md:pt-4">
          {[
            {
              num: "01",
              title: "Tasks lost in noise",
              body: "Work gets buried in Slack threads, email chains, and sticky notes. Nothing has a home.",
            },
            {
              num: "02",
              title: "No visibility",
              body: "Nobody knows what's in progress, what's blocked, or what shipped last week. Every status update is a meeting.",
            },
            {
              num: "03",
              title: "Scattered tools",
              body: "Spreadsheets, docs, whiteboards — your team lives in five places at once and still misses deadlines.",
            },
          ].map((item) => (
            <article
              key={item.num}
              className="group flex gap-8 border-t border-white/10 pt-8"
            >
              <span className="text-xs text-secondary-500  mt-1 shrink-0">
                {item.num}
              </span>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-text-500 mb-3 group-hover:text-primary-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-text-secondary-500  leading-relaxed font-light">
                  {item.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
