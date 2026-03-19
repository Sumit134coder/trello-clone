import React from "react";

const HowItWorks = () => {
  return (
    <section
      id="how"
      className="px-6 md:px-12 py-28 md:py-40 bg-text-light-500 text-[#0c0c0c] border-b border-[#0c0c0c]/10"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <p className="text-xs tracking-[0.3em] uppercase text-primary-500 mb-6">
          02 — The Solution
        </p>

        <h2 className="text-[clamp(3rem,9vw,9rem)] font-black uppercase leading-none tracking-tight mb-20">
          One System.
          <br />
          <span className="text-primary-500">Total</span> Clarity.
        </h2>

        <div className="grid md:grid-cols-3 gap-px bg-[#0c0c0c]/10">
          {[
            {
              label: "Boards",
              title: "Your Projects,\nAt a Glance",
              body: "Each board is a project. Open it and see everything — who owns what, what's moving, what's stuck.",
            },
            {
              label: "Lists",
              title: "Stages That\nMake Sense",
              body: "Represent your workflow with lists: To Do, In Progress, Review, Done. Designed around how you actually work.",
            },
            {
              label: "Cards",
              title: "Tasks With\nAll The Detail",
              body: "Every card holds a task — with a description, deadline, and everything the person doing it actually needs.",
            },
          ].map((item) => (
            <article
              key={item.label}
              className="bg-text-light-500 p-10 md:p-14 flex flex-col gap-6 group hover:bg-[#0c0c0c] hover:text-text-light-500 transition-colors duration-300"
            >
              <span className="text-xs tracking-widest uppercase text-tertiary-500">
                {item.label}
              </span>
              <h3 className="text-3xl md:text-4xl font-black uppercase leading-tight whitespace-pre-line">
                {item.title}
              </h3>
              <p className="text-sm md:text-base leading-relaxed font-light opacity-60">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
