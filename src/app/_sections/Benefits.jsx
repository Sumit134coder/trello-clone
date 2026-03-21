import React from "react";

const Benefits = () => {
  return (
    <section className="px-6 md:px-12 py-28 md:py-40 bg-primary-500 text-text-500 border-b border-[#0c0c0c]/20">
      <div className="max-w-350 mx-auto w-full">
        <p className="text-xs tracking-[0.3em] uppercase text-text-500 mb-6">
          05 — Productivity Benefits
        </p>
        <h2 className="text-[clamp(3rem,8vw,8rem)] font-black uppercase leading-none tracking-tight mb-20">
          Less Friction.
          <br />
          More Done.
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              stat: "01",
              title: "Clear Project Status",
              body: "No more guessing. One glance at the board and you know exactly where every project stands.",
            },
            {
              stat: "02",
              title: "Better Task Organization",
              body: "Every task has a place. No more hunting through chats or docs for what needs to happen next.",
            },
            {
              stat: "03",
              title: "Faster Team Collaboration",
              body: "When everyone sees the same board, communication becomes action — not overhead.",
            },
          ].map((item) => (
            <article key={item.stat} className="flex flex-col gap-5">
              <span className="text-6xl font-black text-text-500 leading-none">
                {item.stat}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold">{item.title}</h3>
              <p className="text-light-900 font-light leading-relaxed">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
